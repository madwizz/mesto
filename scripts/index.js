// popupProfile

const popupProfile = document.querySelector('.popup-profile');
const editProfileButton = document.querySelector('.profile__edit-button');
const closeProfileButton = document.querySelector('.popup-profile__close-button');
const profilePageName = document.querySelector('.profile__name');
const profilePageTitle = document.querySelector('.profile__title');
const inputProfileName = document.querySelector('.popup-profile__info_input-name');
const inputProfileTitle = document.querySelector('.popup-profile__info_input-title');
const popupProfileForm = document.querySelector('.popup-profile__info-form');

// popupAdd

const popupAdd = document.querySelector('.popup-add');
const addButton = document.querySelector('.profile__add-button');
const popupAddForm = document.querySelector('.popup-add__form');
const inputAddName = document.querySelector('.popup-add__info_input-place-name');
const inputAddPhoto = document.querySelector('.popup-add__info_input-place-link');
const closeAddButton = document.querySelector('.popup-add__close-button');

// submit + addNewPlace

const placesContainer = document.querySelector('.places');

// popupPhotoClose

const closePopupPhoto = document.querySelector('.popup-photo__close-button');

// popupPhotoOpen

const popupImage = document.querySelector('.popup-photo__image');
const popupPhoto = document.querySelector('.popup-photo');

// activate buttons for newPlaces

const places = document.querySelectorAll('.place');

// new place template

const newPlaceTemplate = document.querySelector('#place').content;

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
  const popupPhotoName = document.querySelector('.popup-photo__name');
  const placeName = place.querySelector('.place__name');
  placeImage.addEventListener('click', () => {
    popupPhoto.classList.add('popup-photo_open');
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

// open popupAdd button

addButton.addEventListener('click', () => {
  popupAdd.classList.add('popup-add_open');
}
);

// submit button + addNewPlace

function addFormSubmitHandler(evt) {
  evt.preventDefault();
  const newPlace = createPlace(inputAddName.value, inputAddPhoto.value);
  addPlaceListeners(newPlace);
  addPlace(newPlace);
  popupAdd.classList.remove('popup-add_open');
  popupAddForm.reset();
}
popupAddForm.addEventListener('submit', addFormSubmitHandler);

// close popupAdd button

closeAddButton.addEventListener('click', () => {
  popupAdd.classList.remove('popup-add_open');
}
);

// popupPhotoClose

closePopupPhoto.addEventListener('click', () => {
  popupPhoto.classList.remove('popup-photo_open');
}
);

// open editPopup button

editProfileButton.addEventListener('click', () => {
  const currentName = profilePageName.textContent;
  const currentTitle = profilePageTitle.textContent;
  inputProfileName.value = currentName;
  inputProfileTitle.value = currentTitle;
  popupProfile.classList.add('popup-profile_open');
}
);

// submit button + profileInfoEdit

popupProfileForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  profilePageName.textContent = inputProfileName.value;
  profilePageTitle.textContent = inputProfileTitle.value;
  popupProfile.classList.remove('popup-profile_open');
}
);

// close editPopup button

closeProfileButton.addEventListener('click', () => {
  popupProfile.classList.remove('popup-profile_open');
}
);



