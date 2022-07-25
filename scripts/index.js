import FormValidation from "./FormValidation.js";
import Card from "./Card.js";
import { initialPlaces } from "./initialPlaces.js";
import { settings } from "./settings.js";
import Section from "./Section.js";
import UserInfo from "./UserInfo.js";
import PopupWithForm from "./PopupWithForm.js";
import PopupWithImage from "./PopupWithImage.js";

import {
  popupEdit,
  editProfileButton,
  closeEdit,
  profilePageName,
  profilePageTitle,
  inputProfileName,
  inputProfileTitle,
  popupEditForm,
  popupAdd,
  addButton,
  popupAddForm,
  // inputAddName,
  // inputAddPhoto,
  closeAdd,
  placesContainer,
  // popupImage,
  popupPhoto,
  closePhoto,
  // popupPhotoName,
  // popups,
} from "./variables.js";

// photo popup func

function handleImageClick(name, src) {
  popupImage.open(name, src);
}

// addPlace to the page; places = placesContainer

// function addPlace(places, place) {
//   const card = createPlace(place);
//   places.prepend(card);
// }

// createPlace

function createPlace(cardData) {
  const card = new Card(cardData, handleImageClick, "#place");
  return card.generateCard();
}

// load six places

const renderInitialPlaces = new Section(
  {
    items: initialPlaces,
    renderer: (cardData) => {
      const cardElement = createPlace(cardData);
      renderInitialPlaces.addItem(cardElement);
    },
  },
  placesContainer
);

renderInitialPlaces.renderItem();

const profileInfo = new UserInfo({
  profileName: profilePageName,
  profileTitle: profilePageTitle,
});

const profileSubmit = (userInfo) => {
  console.log(userInfo);
  profileInfo.setUserInfo(userInfo);
};

function placeSubmit(obj) {
  const place = createPlace(obj);
  renderInitialPlaces.addItem(place);
  popupAddPlace.close();
}

// + addNewPlace

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

// open + close popupAdd buttons + validation before input

addButton.addEventListener("click", () => {
  popupAddPlace.open();
});
closeAdd.addEventListener("click", () => {
  popupAddPlace.close();
  popupAddForm.reset();
  validAddForm.resetValidation();
});

// popupPhotoClose

closePhoto.addEventListener("click", () => {
  popupImage.close();
});

// submit popupAdd button

// popupAddForm.addEventListener("submit", placeSubmit);

// open + close popupEdit buttons + validation w/ profile value

editProfileButton.addEventListener("click", () => {
  inputProfileName.value = profilePageName.textContent;
  inputProfileTitle.value = profilePageTitle.textContent;
  popupProfile.open();
});
closeEdit.addEventListener("click", () => {
  popupProfile.close();
  popupEditForm.reset();
  validEditForm.resetValidation();
});

// submit popupEdit button

// popupEditForm.addEventListener("submit", (evt) => {
//   evt.preventDefault();
//   profilePageName.textContent = inputProfileName.value;
//   profilePageTitle.textContent = inputProfileTitle.value;
//   popupProfile.close();
// });

const validEditForm = new FormValidation(settings, popupEditForm);
validEditForm.enableValidation();

const validAddForm = new FormValidation(settings, popupAddForm);
validAddForm.enableValidation();

const popupProfile = new PopupWithForm(popupEdit, profileSubmit);
popupProfile.setEventListeners();

const popupImage = new PopupWithImage(popupPhoto);
popupImage.setEventListeners();

const popupAddPlace = new PopupWithForm(popupAdd, placeSubmit);
popupAddPlace.setEventListeners();
