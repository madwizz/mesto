import FormValidation from "../scripts/FormValidation.js";
import Card from "../scripts/Card.js";
import { initialPlaces } from "../scripts/initialPlaces.js";
import { settings } from "../scripts/settings.js";
import Section from "../scripts/Section.js";
import UserInfo from "../scripts/UserInfo.js";
import PopupWithForm from "../scripts/PopupWithForm.js";
import PopupWithImage from "../scripts/PopupWithImage.js";
import "./index.css";

import {
  popupEdit,
  profileEditButton,
  popupCloseEdit,
  profilePageName,
  profilePageTitle,
  inputProfileName,
  inputProfileTitle,
  popupEditForm,
  popupAdd,
  profileAddButton,
  popupAddForm,
  // inputAddName,
  // inputAddPhoto,
  popupCloseAdd,
  placesContainer,
  // popupImage,
  popupPhoto,
  popupClosePhoto,
  // popupPhotoName,
  // popups,
} from "../scripts/variables.js";

// photo popup func

function handleImageClick(name, src) {
  popupImage.open(name, src);
}

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
  profileNameSelector: profilePageName,
  profileTitleSelector: profilePageTitle,
});

const profileSubmit = (userInfo) => {
  profileInfo.setUserInfo(userInfo);
};

function placeSubmit(obj) {
  const place = createPlace(obj);
  renderInitialPlaces.addItem(place);
}

profileAddButton.addEventListener("click", () => {
  popupAddPlace.open();
  validAddForm.resetValidation();
});
// popupCloseAdd.addEventListener("click", () => {
//   popupAddPlace.close();
// });

// popupPhotoClose

// popupClosePhoto.addEventListener("click", () => {
//   popupImage.close();
// });

// open + close popupEdit buttons + validation w/ profile value

// profileEditButton.addEventListener("click", () => {
//   inputProfileName.value = profilePageName.textContent;
//   inputProfileTitle.value = profilePageTitle.textContent;
//   popupProfile.open();
// });

profileEditButton.addEventListener("click", () => {
  const { profileName, profileTitle } = profileInfo.getUserInfo();
  inputProfileName.value = profileName;
  inputProfileTitle.value = profileTitle;
  popupProfile.open();
});

popupCloseEdit.addEventListener("click", () => {
  popupEditForm.reset();
  validEditForm.resetValidation();
});

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
