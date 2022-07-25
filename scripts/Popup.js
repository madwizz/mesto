export default class Popup {
  constructor(popupSelector) {
    this._popupSelector = popupSelector;
    this._handleEscClose = this._handleEscClose.bind(this);
  }
  open() {
    this._popupSelector.classList.add("popup_opened");
    document.addEventListener("keydown", this._handleEscClose);
  }

  close() {
    this._popupSelector.classList.remove("popup_opened");
    document.removeEventListener("keydown", this._handleEscClose);
  }

  _handleEscClose(evt) {
    console.log(evt);
    if (evt.key === "Escape") {
      this.close();
    }
  }

  // _handleEscClose = (evt) => {
  //   if (evt.key === "Escape") {
  //     this.close();
  //   }
  // };

  setEventListeners() {
    this._popupSelector.addEventListener("click", (evt) => {
      if (evt.target.classList.contains("popup_opened")) {
        this.close();
      }
    });
  }
}

// // open + close popup

// const openPopup = (popup) => {
//   popup.classList.add("popup_opened");
//   document.addEventListener("keydown", closePopupEsc);
// };
// const closePopup = (popup) => {
//   popup.classList.remove("popup_opened");
//   document.removeEventListener("keydown", closePopupEsc);
// };

// // close popup with esc key

// const closePopupEsc = (evt) => {
//   if (evt.key === "Escape") {
//     closePopup(document.querySelector(".popup_opened"));
//   }
// };

// // close popup on overlay click

// popups.forEach((popup) =>
//   popup.addEventListener("click", (evt) => {
//     if (evt.target.classList.contains("popup_opened")) {
//       closePopup(evt.target);
//     }
//   })
// );
