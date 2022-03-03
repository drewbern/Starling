import ApiHelper from "./ApiHelper";

class AuthService {
  static async syncAnalysis(RGB_RED, RGB_GREEN, RGB_BLUE, RGB_IR, RGB_UVA) {
    return ApiHelper.postAnonymous("analysis?RGB_RED=" + RGB_RED + "&RGB_GREEN=" + RGB_BLUE + "&RGB_BLUE=" + RGB_GREEN + "&RGB_IR=" + RGB_IR + "&RGB_UVA=" + RGB_UVA, {});
  }
}
export default AuthService;
