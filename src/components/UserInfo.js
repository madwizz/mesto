export default class UserInfo {
  constructor({ profileNameSelector, profileTitleSelector }) {
    this._profileName = document.querySelector(profileNameSelector);
    this._profileTitle = document.querySelector(profileTitleSelector);
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
