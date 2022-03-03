import ServerURL from '../../Utils/ServerURL';
// import AuthLogic from '../../Utils/AuthLogic';

class ApiHelper {
  static headers() {
    return {
      Accept: '*/*',
      'Content-Type': 'application/json',
    };
  }

  static getAnonymous(route, abortController) {
    return this.xhr(route, null, null, 'GET', abortController);
  }

  static putAnonymous(route, params, abortController) {
    return this.xhr(route, params, null, 'PUT', abortController);
  }

  // static async postAuthenticated(route, params, abortController) {
  //   return this.xhr(
  //     route,
  //     params,
  //     await AuthLogic.GetToken(),
  //     'POST',
  //     abortController,
  //   );
  // }

  // static async getAuthenticated(route, abortController) {
  //   return this.xhr(
  //     route,
  //     null,
  //     await AuthLogic.GetToken(),
  //     'GET',
  //     abortController,
  //   );
  // }

  // static async deleteAuthenticated(route, abortController) {
  //   return this.xhr(
  //     route,
  //     null,
  //     await AuthLogic.GetToken(),
  //     'DELETE',
  //     abortController,
  //   );
  // }

  // static async postFileAuthenticated(route, params, abortController) {
  //   return this.xhr(
  //     route,
  //     params,
  //     await AuthLogic.GetToken(),
  //     'POST',
  //     abortController,
  //     'file'
  //   );
  // }

  static postAnonymous(route, params, abortController) {
    return this.xhr(route, params, null, 'POST', abortController);
  }

  static deleteAnonymous(route, params, abortController) {
    return this.xhr(route, params, null, 'DELETE', abortController);
  }

  static xhr(route, params, token = '', verb, abortController, type) {
    const host = ServerURL.getAPIUrl();
    const url = `${host}${route}`;
    let options = Object.assign(
      { method: verb },
      params ? { body: JSON.stringify(params) } : null,
    );
    if (abortController && abortController.signal) {
      options.signal = abortController.signal;
    }
    options.headers = ApiHelper.headers()
    if (token) {
      options.headers = {
        ...options.headers,
        Authorization: `Bearer ${token}`,
      };
    }
    return fetch(url, options).then(resp => {
      if (resp.status === 401) {
        return { error: 'Unauthorize!!!' };
      }
      let json = resp.json();
      if (resp.ok) {
        return json;
      }
      return json.then(err => {
        return err;
      });
    });
  }
}

export default ApiHelper;
