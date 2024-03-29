import FormValidation from "../components/FormValidation.js";
import Card from "../components/Card.js";
import { settings } from "../utils/settings.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import "../pages/index.css";
import Api from "../components/Api.js";
import { PopupWithConfirmation } from "../components/PopupWithConfirmation.js";

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
  deletePlaceButton,
  popupDelete,
  popupDeleteForm,
  popupCloseDelete,
} from "../utils/constants.js";

// api

const api = new Api({
  host: "https://mesto.nomoreparties.co/v1/cohort-47",
  headers: {
    authorization: "e64a8138-ccc5-4160-a623-3eaa2a1e9520",
    "content-type": "application/json",
  },
});

// photo popup func

function handleImageClick(name, src) {
  popupImage.open(name, src);
}

// createPlace

const createPlace = (cardData) => {
  const card = new Card(
    {
      name: cardData.name,
      link: cardData.link,
      likes: cardData.likes,
      userId: userId,
      ownerId: cardData.owner._id,
      cardId: cardData._id,
    },
    handleImageClick,
    "#place",
    () => popupConfirm.open(card),
    () => {
      return api
        .addLike(cardData)
        .then((res) => {
          card.handleLikesCount(res);
          card.handleLikeAdd();
        })
        .catch((err) => console.log(err));
    },
    () => {
      return api
        .removeLike(cardData)
        .then((res) => {
          card.handleLikesCount(res);
          card.handleLikeRemove();
        })
        .catch((err) => console.log(err));
    }
  );

  return card.generateCard();
};

const cardsList = new Section(
  {
    renderer: (cardData) => {
      const cardElement = createPlace(cardData);
      cardsList.addItem(cardElement);
    },
  },
  placesContainer
);

const profileInfo = new UserInfo({
  profileNameSelector: profilePageName,
  profileTitleSelector: profilePageTitle,
  profileAvatarSelector: profileAvatar,
});

const profileSubmit = (userInfo) => {
  popupProfile.renderLoading(true);
  return api
    .setUserInfo(userInfo)
    .then((userInfo) => {
      profileInfo.setUserInfo(userInfo);
      popupProfile.close();
    })
    .catch((err) => console.log(err));
};

const placeSubmit = (cardData) => {
  popupAddPlace.renderLoading(true);
  return api
    .newCard(cardData)
    .then((cardData) => {
      const cardElement = createPlace(cardData);
      cardsList.addItem(cardElement);
      popupAddPlace.close();
    })
    .catch((err) => {
      console.log(err);
    });
};

const avatarSubmit = (avatarInfo) => {
  popupAvatarEdit.renderLoading(true);
  return api
    .setAvatar(avatarInfo)
    .then((avatarInfo) => {
      profileInfo.setUserAvatar(avatarInfo);
      popupAvatarEdit.close();
    })
    .catch((err) => {
      console.log(err);
    });
};

const confirmSubmit = (card) => {
  return api
    .removeCard(card._cardId)
    .then(() => {
      card.deleteCard();
      popupConfirm.close();
    })
    .catch((err) => console.log(err));
};

profileAddButton.addEventListener("click", () => {
  popupAddPlace.open();
  validAddForm.resetValidation();
});

profileEditButton.addEventListener("click", () => {
  popupProfile.open();
  validEditForm.resetValidation();
  const userInfo = profileInfo.getUserInfo();
  inputProfileName.value = userInfo.name;
  inputProfileTitle.value = userInfo.about;
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

// deletePopup

const popupConfirm = new PopupWithConfirmation(popupDelete, confirmSubmit);
popupConfirm.setEventListeners();

// promises

let userId;

Promise.all([api.getInitialCards(), api.getUserInfo()])
  .then((value) => {
    userId = value[1]._id;
    cardsList.renderItems(value[0].reverse());
    profileInfo.setUserInfo(value[1]);
  })
  .catch((err) => {
    console.log(err);
  });
