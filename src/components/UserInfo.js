export default class UserInfo {
  constructor({
    profileNameSelector,
    profileTitleSelector,
    profileAvatarSelector,
  }) {
    this._profileName = document.querySelector(profileNameSelector);
    this._profileTitle = document.querySelector(profileTitleSelector);
    this._profileAvatar = document.querySelector(profileAvatarSelector);
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
  setUserAvatar(avatarInfo) {
    this._profileAvatar.src = avatarInfo["avatar"];
  }
}
