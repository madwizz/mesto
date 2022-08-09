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
      name: this._profileName.textContent,
      about: this._profileTitle.textContent,
      avatar: this._profileAvatar.src,
    };
    return userInfo;
  }
  setUserInfo(profileInfo) {
    if (profileInfo.name) this._profileName.textContent = profileInfo.name;
    if (profileInfo.about) this._profileTitle.textContent = profileInfo.about;
  }
  setUserAvatar(avatarInfo) {
    if (avatarInfo.avatar) this._profileAvatar.src = avatarInfo.avatar;
  }
}
