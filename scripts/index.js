import FormValidation from "./FormValidation.js";
import Card from "./Card.js";
import { initialPlaces } from "./initialPlaces.js";
import { settings } from "./settings.js";

// popupEdit

const popupEdit = document.querySelector(".popup_edit");
const editProfileButton = document.querySelector(".profile__edit-button");
const closeEdit = document.querySelector(".popup__close-button_edit");
const profilePageName = document.querySelector(".profile__name");
const profilePageTitle = document.querySelector(".profile__title");

const inputProfileName = document.querySelector(
  ".popup__info_input_profile-name"
);
const inputProfileTitle = document.querySelector(
  ".popup__info_input_profile-title"
);

const popupEditForm = document.querySelector(".popup__form_edit");

// popupAdd

const popupAdd = document.querySelector(".popup_add");
const addButton = document.querySelector(".profile__add-button");
const popupAddForm = document.querySelector(".popup__form_add");
const inputAddName = document.querySelector(".popup__info_input_place-name");
const inputAddPhoto = document.querySelector(".popup__info_input_place-link");

const closeAdd = document.querySelector(".popup__close-button_add");

// submit + addNewPlace

const placesContainer = document.querySelector(".places");

// popupPhoto

const popupImage = document.querySelector(".popup__photo-image");
const popupPhoto = document.querySelector(".popup_photo");

const closePhoto = document.querySelector(".popup__close-button_photo");

const popupPhotoName = document.querySelector(".popup__photo-name");

// activate buttons for newPlaces

const places = document.querySelectorAll(".place");

// new place template

const newPlaceTemplate = document.querySelector("#place").content;

// all popups for overlay close click

const popups = document.querySelectorAll(".popup");

//

const validEditForm = new FormValidation(settings, popupEditForm);
validEditForm.enableValidation();

const validAddForm = new FormValidation(settings, popupAddForm);
validAddForm.enableValidation();

// open + close popup

const openPopup = (popup) => {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", closePopupEsc);
};
const closePopup = (popup) => {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", closePopupEsc);
};

// close popup with esc key

const closePopupEsc = (evt) => {
  if (evt.key === "Escape") {
    closePopup(document.querySelector(".popup_opened"));
  }
};

// close popup on overlay click

popups.forEach((popup) =>
  popup.addEventListener("click", (evt) => {
    if (evt.target.classList.contains("popup_opened")) {
      closePopup(evt.target);
    }
  })
);

// photo popup func

function placeOpened(name, link) {
  popupImage.src = link;
  popupPhotoName.textContent = name;
  popupImage.alt = name;
  openPopup(popupPhoto);
}

// addPlace to the page; places = placesContainer

function addPlace(places, place) {
  places.prepend(place);
}

// load six places

initialPlaces.forEach((initialPlace) => {
  const place = new Card(initialPlace, placeOpened);
  place.generateCard();
  addPlace(placesContainer, place.getElement());
});

// open + close popupAdd buttons + validation before input

addButton.addEventListener("click", () => {
  openPopup(popupAdd);
});
closeAdd.addEventListener("click", () => {
  closePopup(popupAdd);
});

// popupPhotoClose

closePhoto.addEventListener("click", () => {
  closePopup(popupPhoto);
});

// submit popupAdd button + addNewPlace

function addFormSubmitHandler(evt) {
  evt.preventDefault();
  const newPlace = new Card(
    {
      name: inputAddName.value,
      link: inputAddPhoto.value,
    },
    placeOpened
  );
  newPlace.generateCard();
  addPlace(placesContainer, newPlace.getElement());
  closePopup(popupAdd);
  popupAddForm.reset();
}
popupAddForm.addEventListener("submit", addFormSubmitHandler);

// open + close popupEdit buttons + validation w/ profile value

editProfileButton.addEventListener("click", () => {
  inputProfileName.value = profilePageName.textContent;
  inputProfileTitle.value = profilePageTitle.textContent;
  openPopup(popupEdit);
});
closeEdit.addEventListener("click", () => {
  closePopup(popupEdit);
});

// submit popupEdit button

popupEditForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  profilePageName.textContent = inputProfileName.value;
  profilePageTitle.textContent = inputProfileTitle.value;
  closePopup(popupEdit);
});
