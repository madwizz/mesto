// popupProfile

const popup = document.querySelector('.popup');
const editButton = document.querySelector('.profile__edit-button');
const closeButton = document.querySelector('.popup__close-button');
const profilePageName = document.querySelector('.profile__name');
const profilePageTitle = document.querySelector('.profile__title');
const inputName = document.querySelector('.popup__input-name');
const inputTitle = document.querySelector('.popup__input-title');

const popupForm = document.querySelector('.popup__info-form');

// initialPlaces

const initialPlaces = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

// popupAdd

const popupAdd = document.querySelector('.popupAdd');
const addButton = document.querySelector('.profile__add-button');

const placeName = document.querySelector('.place__name');
const placePhoto = document.querySelector('.place__photo');

const popupAddForm = document.querySelector('.popupAdd__add-form');

const inputAddName = document.querySelector('.popupAdd__input-place-name');
const inputAddPhoto = document.querySelector('.popupAdd__input-place-link');

const closeAddButton = document.querySelector('.popupAdd__close-button');

addButton.addEventListener('click', () => {
  popupAdd.classList.add('popupAddOpen');
}
);

// submit + addNewPlace

const placesContainer = document.querySelector('.places');

popupAddForm.addEventListener('submit', (evt) => {
  evt.preventDefault();

  addPlace(inputAddName.value, inputAddPhoto.value);

  popupAdd.classList.remove('popupAddOpen');
}
)

closeAddButton.addEventListener('click', () => {
  popupAdd.classList.remove('popupAddOpen');
}
)

// addPlace six times on start-up

for (let i = 0; i < initialPlaces.length; i++) {
  addPlace(initialPlaces[i].name, initialPlaces[i].link);
}


// addPlace on start-up


function addPlace(name, link) {

  const newPlace = document.querySelector('#place').content.cloneNode(true);

  newPlace.querySelector('.place__name').textContent = name;
  newPlace.querySelector('.place__photo').src = link;

  
  addPlaceListeners(newPlace);

  placesContainer.append(newPlace);
}

// popupPhotoOpen

const popupImage = document.querySelector('.popupPhoto__image');
const popupPhoto = document.querySelector('.popupPhoto');

// popupPhotoClose

const closePopupPhoto = document.querySelector('.popupPhoto__close-button');

closePopupPhoto.addEventListener('click', () => {
  popupPhoto.classList.remove('popupPhotoOpen');
}
);

// editButton

editButton.addEventListener('click', () => {
  let currentName = profilePageName.textContent;
  let currentTitle = profilePageTitle.textContent;
  inputName.value = currentName;
  inputTitle.value = currentTitle;
  popup.classList.add('popupOpen');
}
)

popupForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  profilePageName.textContent = inputName.value;
  profilePageTitle.textContent = inputTitle.value;
  popup.classList.remove('popupOpen');
}
)

closeButton.addEventListener('click', () => {
  popup.classList.remove('popupOpen');
}
)


//likeButton & deleteButton

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

const places = document.querySelectorAll('.place');

for (let i = 0; i < places.length; i ++) {
  addPlaceListeners(places[i]);
}

// forEach( (place) => addPlaceListeners(place)); not legal

// Array.from(document.querySelectorAll('.place')).forEach(addPlaceListeners);




// placeTemplate

/*
function addPlace (photoValue, titleValue) {

}

const placeTemplate = document.querySelector('#place').content;

const place = placeTemplate.querySelector('.place').cloneNode(true);
const placePhoto = place.querySelector('.place__photo');
const placeTitle = place.querySelector('.place__title');
placePhoto

placePhoto.querySelector('.place__photo').src = '#'
placeTitle.querySelector('.place__title').textContent = '#'

places.append(placeElement);


// likeButton

let likeButton = document.querySelector('.place__like-button');
let likeButtons = document.querySelectorAll('.place__like-button');
let likeButtonActive = document.querySelector('.place__like-button_active');

*/




