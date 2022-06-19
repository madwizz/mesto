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

// createPlace

function createPlace(name, link) {
  const newPlace = newPlaceTemplate.cloneNode(true);
  const placeName = newPlace.querySelector(".place__name");
  const placeImage = newPlace.querySelector(".place__photo");
  const placePhoto = placeImage;
  placeName.textContent = name;
  placeImage.alt = name;
  placePhoto.src = link;
  addPlaceListeners(newPlace);

  return newPlace;
}

// addPlace to the page; places = placesContainer

function addPlace(places, place) {
  places.prepend(place);
}

//likeButton, deleteButton & popupPhoto

function addPlaceListeners(place) {
  const deletePlaceButton = place.querySelector(".place__delete-button");
  deletePlaceButton.addEventListener("click", (evt) => {
    evt.target.closest(".place").remove();
  });
  const likeButton = place.querySelector(".place__like-button");
  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("place__like-button_active");
  });
  const placeImage = place.querySelector(".place__photo");
  const placeName = place.querySelector(".place__name");
  placeImage.addEventListener("click", () => {
    openPopup(popupPhoto);
    popupImage.src = placeImage.src;
    popupImage.alt = placeImage.alt;
    popupPhotoName.textContent = placeName.textContent;
  });
}

// addPlace six times on start-up

for (let i = 0; i < initialPlaces.length; i++) {
  const place = createPlace(initialPlaces[i].name, initialPlaces[i].link);
  addPlace(placesContainer, place);
}

// open + close popupAdd buttons

addButton.addEventListener("click", () => {
  openPopup(popupAdd);
  validateForm(popupAdd.querySelector(".popup__form"));
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
  const newPlace = createPlace(inputAddName.value, inputAddPhoto.value);
  addPlace(placesContainer, newPlace);
  closePopup(popupAdd);
  popupAddForm.reset();
}
popupAddForm.addEventListener("submit", addFormSubmitHandler);

// open + close popupEdit buttons

editProfileButton.addEventListener("click", () => {
  openPopup(popupEdit);
  inputProfileName.value = profilePageName.textContent;
  inputProfileTitle.value = profilePageTitle.textContent;
  validateForm(popupEdit.querySelector(".popup__form"));
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
