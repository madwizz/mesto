import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, submitHandler) {
    super(popupSelector);
    this._submitHandler = submitHandler;
    this._popupForm = this._popupSelector.querySelector(".popup__form");
    this._inputList = this._popupSelector.querySelectorAll(".popup__info"); // 'all' doesnt save the data
  }

  _getInputValues() {
    console.log(this._inputList);
    this._inputValues = {};
    this._inputList.forEach((input) => {
      this._inputValues[input.id] = input.value;
    });
    return this._inputValues;
  }
  setEventListeners() {
    super.setEventListeners();
    this._popupSelector.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._submitHandler(this._getInputValues());
      this.close();
    });
  }
  close() {
    super.close();
    this._popupForm.reset();
  }
}

// // + addNewPlace

// function addFormSubmitHandler(evt) {
//   evt.preventDefault();
//   addPlace(placesContainer, {
//     name: inputAddName.value,
//     link: inputAddPhoto.value,
//   });
//   closePopup(popupAdd);
//   popupAddForm.reset();
//   validAddForm.resetValidation();
// }
