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
      profileAvatar: this._profileAvatar.src,
    };
    return userInfo;
  }
  setUserInfo(profileInfo) {
    if (profileInfo["profile-name"])
      this._profileName.textContent = profileInfo["profile-name"];
    if (profileInfo["profile-title"])
      this._profileTitle.textContent = profileInfo["profile-title"];
  }
  setUserAvatar(avatarInfo) {
    if (avatarInfo["avatar"]) this._profileAvatar.src = avatarInfo["avatar"];
  }
}
