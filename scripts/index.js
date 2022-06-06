// popupProfile

const popup = document.querySelector('.popup');
const editButton = document.querySelector('.profile__edit-button');
const closeButton = document.querySelector('.popup__close-button');
const profilePageName = document.querySelector('.profile__name');
const profilePageTitle = document.querySelector('.profile__title');
const inputName = document.querySelector('.popup__input-name');
const inputTitle = document.querySelector('.popup__input-title');
const popupForm = document.querySelector('.popup__info-form');

// popupAdd

const popupAdd = document.querySelector('.popupAdd');
const addButton = document.querySelector('.profile__add-button');
const popupAddForm = document.querySelector('.popupAdd__add-form');
const inputAddName = document.querySelector('.popupAdd__input-place-name');
const inputAddPhoto = document.querySelector('.popupAdd__input-place-link');
const closeAddButton = document.querySelector('.popupAdd__close-button');

// submit + addNewPlace

const placesContainer = document.querySelector('.places');

// popupPhotoClose

const closePopupPhoto = document.querySelector('.popupPhoto__close-button');

// popupPhotoOpen

const popupImage = document.querySelector('.popupPhoto__image');
const popupPhoto = document.querySelector('.popupPhoto');
const placeName = document.querySelector('.place__name');

// activate buttons for newPlaces

const places = document.querySelectorAll('.place');

// initialPlaces

const initialPlaces = [
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  }
];

// addPlace on start-up

function addPlace(name, link) {

  const newPlace = document.querySelector('#place').content.cloneNode(true);

  newPlace.querySelector('.place__name').textContent = name;
  newPlace.querySelector('.place__photo').src = link;
  
  addPlaceListeners(newPlace);

  placesContainer.prepend(newPlace);
}

//likeButton, deleteButton & popupPhoto

function addPlaceListeners (place) {
  const deletePlaceButton = place.querySelector('.place__delete-button');
  deletePlaceButton.addEventListener('click', (evt) => {
    evt.target.parentNode.remove();
  } 
  );
  const likeButton = place.querySelector('.place__like-button');
  likeButton.addEventListener('click', () => {
    likeButton.classList.toggle('place__like-button_active');
  }
  );
  const placeImage = place.querySelector('.place__photo');
  const popupPhotoName = document.querySelector('.popupPhoto__name');
  placeImage.addEventListener('click', () => {
    popupPhoto.classList.add('popupPhotoOpen');
    popupImage.src = placeImage.src;
    popupPhotoName.textContent = placeName.textContent;
  }
  );
}

// activate buttons for newPlaces

for (let i = 0; i < places.length; i ++) {
  addPlaceListeners(places[i]);
}

/*
 forEach( (place) => addPlaceListeners(place)); not legal
 Array.from(document.querySelectorAll('.place')).forEach(addPlaceListeners);
*/

// addPlace six times on start-up

for (let i = 0; i < initialPlaces.length; i++) {
  addPlace(initialPlaces[i].name, initialPlaces[i].link);
}

// open popupAdd button

addButton.addEventListener('click', () => {
  popupAdd.classList.add('popupAddOpen');
}
);

// submit button + addNewPlace

popupAddForm.addEventListener('submit', (evt) => {
  evt.preventDefault();

  addPlace(inputAddName.value, inputAddPhoto.value);

  popupAdd.classList.remove('popupAddOpen');
}
);

// close popupAdd button

closeAddButton.addEventListener('click', () => {
  popupAdd.classList.remove('popupAddOpen');
}
);

// popupPhotoClose

closePopupPhoto.addEventListener('click', () => {
  popupPhoto.classList.remove('popupPhotoOpen');
}
);

// open editPopup button

editButton.addEventListener('click', () => {
  let currentName = profilePageName.textContent;
  let currentTitle = profilePageTitle.textContent;
  inputName.value = currentName;
  inputTitle.value = currentTitle;
  popup.classList.add('popupOpen');
}
);

// submit button + profileInfoEdit

popupForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  profilePageName.textContent = inputName.value;
  profilePageTitle.textContent = inputTitle.value;
  popup.classList.remove('popupOpen');
}
);

// close editPopup button

closeButton.addEventListener('click', () => {
  popup.classList.remove('popupOpen');
}
);




