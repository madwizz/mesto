// popupProfile

let popup = document.querySelector('.popup');
let editButton = document.querySelector('.profile__edit-button');
let closeButton = document.querySelector('.popup__close-button');
let profilePageName = document.querySelector('.profile__name');
let profilePageTitle = document.querySelector('.profile__title');
let inputName = document.querySelector('.popup__input-name');
let inputTitle = document.querySelector('.popup__input-title');

let popupForm = document.querySelector('.popup__info-form');

const initialCards = [
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

// editButton

editButton.addEventListener('click', function() {
  let currentName = profilePageName.textContent;
  let currentTitle = profilePageTitle.textContent;
  inputName.value = currentName;
  inputTitle.value = currentTitle;
  popup.classList.add('popupOpen');
}
)

popupForm.addEventListener('submit', function(evt) {
  evt.preventDefault();
  profilePageName.textContent = inputName.value;
  profilePageTitle.textContent = inputTitle.value;
  popup.classList.remove('popupOpen');
}
)

closeButton.addEventListener('click', function() {
  popup.classList.remove('popupOpen');
}
)

// popupAdd

let popupAdd = document.querySelector('.popupAdd');
let addButton = document.querySelector('.profile__add-button');

let placeName = document.querySelector('.place__name');
let placePhoto = document.querySelector('.place__photo');

let popupAddForm = document.querySelector('.popupAdd__add-form');

let inputAddName = document.querySelector('.popupAdd__input-place-name');
let inputAddPhoto = document.querySelector('.popupAdd__input-place-link');

let closeAddButton = document.querySelector('.popupAdd__close-button');

addButton.addEventListener('click', function() {
  popupAdd.classList.add('popupAddOpen');
}
)

//addPlace

const placesContainer = document.querySelector('.places');

popupAddForm.addEventListener('submit', function(evt) {
  evt.preventDefault();

  const newPlace = document.querySelector('#place').content.cloneNode(true);

  newPlace.querySelector('.place__name').textContent = inputAddName.value;
  newPlace.querySelector('.place__photo').src = inputAddPhoto.value;
  
  addPlaceListeners(newPlace);

  placesContainer.append(newPlace);

  popupAdd.classList.remove('popupAddOpen');
}
)

closeAddButton.addEventListener('click', function() {
  popupAdd.classList.remove('popupAddOpen');
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




