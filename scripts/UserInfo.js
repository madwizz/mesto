export default class UserInfo {
  constructor({ profileNameSelector, profileTitleSelector }) {
    this._profileName = profileNameSelector;
    this._profileTitle = profileTitleSelector;
  }
  getUserInfo() {
    const userInfo = {
      profileName: this._profileName.textContent,
      profileTitle: this._profileTitle.textContent,
    };
    return userInfo;
  }
  setUserInfo(profileInfo) {
    this._profileName.textContent = profileInfo["profile-name"];
    this._profileTitle.textContent = profileInfo["profile-title"];
  }
}
