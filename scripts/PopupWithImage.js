import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popup) {
    super(popup);
    this._image = this._popup.querySelector(".popup__photo-image");
    this._name = this._popup.querySelector(".popup__photo-name");
  }
  open(name, src) {
    super.open();

    this._image.src = src; // link = src
    this._name.textContent = name;
    this._image.alt = name;
  }
}
