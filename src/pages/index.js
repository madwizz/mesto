import FormValidation from "../components/FormValidation.js";
import Card from "../components/Card.js";
import { initialPlaces } from "../components/initialPlaces.js";
import { settings } from "../components/settings.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import "../pages/index.css";

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
  placesContainer,
  popupPhoto,
  popupAvatar,
  profileAvatarButton,
  popupCloseAvatar,
  popupAvatarForm,
  profileAvatar,
} from "../components/variables.js";

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
  profileAvatarSelector: profileAvatar,
});

const profileSubmit = (userInfo) => {
  profileInfo.setUserInfo(userInfo);
};

function placeSubmit(obj) {
  const place = createPlace(obj);
  renderInitialPlaces.addItem(place);
}

const avatarSubmit = (avatarInfo) => {
  profileInfo.setUserAvatar(avatarInfo);
};

profileAddButton.addEventListener("click", () => {
  popupAddPlace.open();
  validAddForm.resetValidation();
});

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

profileAvatarButton.addEventListener("click", () => {
  popupAvatarEdit.open();
  validAvatarForm.resetValidation();
});

// edit

const popupProfile = new PopupWithForm(popupEdit, profileSubmit);
popupProfile.setEventListeners();

const validEditForm = new FormValidation(settings, popupEditForm);
validEditForm.enableValidation();

// add

const popupAddPlace = new PopupWithForm(popupAdd, placeSubmit);
popupAddPlace.setEventListeners();

const validAddForm = new FormValidation(settings, popupAddForm);
validAddForm.enableValidation();

// photo

const popupImage = new PopupWithImage(popupPhoto);
popupImage.setEventListeners();

// avatar

const popupAvatarEdit = new PopupWithForm(popupAvatar, avatarSubmit);
popupAvatarEdit.setEventListeners();

const validAvatarForm = new FormValidation(settings, popupAvatarForm);
validAvatarForm.enableValidation();
