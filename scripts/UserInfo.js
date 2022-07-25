export default class UserInfo {
  constructor({ profileName, profileTitle }) {
    this._profileName = profileName;
    this._profileTitle = profileTitle;
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

// const profilePageName = document.querySelector(".profile__name");
// const profilePageTitle = document.querySelector(".profile__title");
