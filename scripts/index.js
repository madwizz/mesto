// popupEdit

const popupEdit = document.querySelector('.popup_edit');
const editProfileButton = document.querySelector('.profile__edit-button');
const closeEdit = document.querySelector('.popup__close-button_edit');
const profilePageName = document.querySelector('.profile__name');
const profilePageTitle = document.querySelector('.profile__title');

const inputProfileName = document.querySelector('.popup__info_input_profile-name');
const inputProfileTitle = document.querySelector('.popup__info_input_profile-title');

const popupEditForm = document.querySelector('.popup__form_edit');

// popupAdd

const popupAdd = document.querySelector('.popup_add');
const addButton = document.querySelector('.profile__add-button');
const popupAddForm = document.querySelector('.popup__form_add');
const inputAddName = document.querySelector('.popup__info_input_place-name');
const inputAddPhoto = document.querySelector('.popup__info_input_place-link');

const closeAdd = document.querySelector('.popup__close-button_add');

// submit + addNewPlace

const placesContainer = document.querySelector('.places');

// popupPhoto

const popupImage = document.querySelector('.popup__photo-image');
const popupPhoto = document.querySelector('.popup_photo');

const closePhoto = document.querySelector('.popup__close-button_photo');

// activate buttons for newPlaces

const places = document.querySelectorAll('.place');

// new place template

const newPlaceTemplate = document.querySelector('#place').content;

// open + close popup

const openPopup = (popup) => {
  popup.classList.add('popup_opened');
}
const closePopup = (popup) => {
  popup.classList.remove('popup_opened');
}

// createPlace

function createPlace(name, link) {
  const newPlace = newPlaceTemplate.cloneNode(true);
  const placeName = newPlace.querySelector('.place__name');
  const placeImage = newPlace.querySelector('.place__photo');
  const placePhoto = newPlace.querySelector('.place__photo');
  placeName.textContent = name;
  placeImage.alt = name;
  placePhoto.src = link;

  return newPlace
}

// addPlace to the page card = place

function addPlace(card) {
  placesContainer.prepend(card);
}

//likeButton, deleteButton & popupPhoto

function addPlaceListeners(place) {
  const deletePlaceButton = place.querySelector('.place__delete-button');
  deletePlaceButton.addEventListener('click', (evt) => {
    evt.target.closest("article").remove();
  } 
  );
  const likeButton = place.querySelector('.place__like-button');
  likeButton.addEventListener('click', () => {
    likeButton.classList.toggle('place__like-button_active');
  }
  );
  const placeImage = place.querySelector('.place__photo');
  const popupPhotoName = document.querySelector('.popup__photo-name');
  const placeName = place.querySelector('.place__name');
  placeImage.addEventListener('click', () => {
    openPopup(popupPhoto);
    popupImage.src = placeImage.src;
    popupImage.alt = placeImage.alt;
    popupPhotoName.textContent = placeName.textContent;
  }
  );
}

// addPlace six times on start-up

for (let i = 0; i < initialPlaces.length; i++) {
  const place = createPlace(initialPlaces[i].name, initialPlaces[i].link);
  addPlaceListeners(place);
  addPlace(place);
}

// open + close popupAdd buttons

addButton.addEventListener('click', () => {
  openPopup(popupAdd);
}
);
closeAdd.addEventListener('click', () => {
  closePopup(popupAdd);
}
);

// popupPhotoClose

closePhoto.addEventListener('click', () => {
  closePopup(popupPhoto);
}
);

// submit popupAdd button + addNewPlace

function addFormSubmitHandler(evt) {
  evt.preventDefault();
  const newPlace = createPlace(inputAddName.value, inputAddPhoto.value);
  addPlaceListeners(newPlace);
  addPlace(newPlace);
  closePopup(popupAdd);
  popupAddForm.reset();
}
popupAddForm.addEventListener('submit', addFormSubmitHandler);

// open + close popupEdit buttons

editProfileButton.addEventListener('click', () => {
  openPopup(popupEdit);
  inputProfileName.value = profilePageName.textContent;
  inputProfileTitle.value = profilePageTitle.textContent;
}
);
closeEdit.addEventListener('click', () => {
  closePopup(popupEdit);
})

// submit popupEdit button

popupEditForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  profilePageName.textContent = inputProfileName.value;
  profilePageTitle.textContent = inputProfileTitle.value;
  closePopup(popupEdit);
}
);
