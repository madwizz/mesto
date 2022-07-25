import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._image = this._popupSelector.querySelector(".popup__photo-image");
    this._name = this._popupSelector.querySelector(".popup__photo-name");
  }
  open(name, src) {
    super.open();

    this._image.src = src; // link = src
    this._name.textContent = name;
    this._image.alt = name;
  }
}

// const popupImage = document.querySelector(".popup__photo-image");
// const popupPhoto = document.querySelector(".popup_photo");
// const popupPhotoName = document.querySelector(".popup__photo-name");

// // photo popup func

// function handleImageClick(name, link) {
//   popupImage.src = link;
//   popupPhotoName.textContent = name;
//   popupImage.alt = name;
//   openPopup(popupPhoto);
// }

// // popupPhotoClose

// closePhoto.addEventListener("click", () => {
//   closePopup(popupPhoto);
// });
