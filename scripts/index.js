// popupProfile

let popup = document.querySelector('.popup');
let editButton = document.querySelector('.profile__edit-button');
let closeButton = document.querySelector('.popup__close-button');
let profilePageName = document.querySelector('.profile__name');
let profilePageTitle = document.querySelector('.profile__title');
let inputName = document.querySelector('.popup__input-name');
let inputTitle = document.querySelector('.popup__input-title');

let popupForm = document.querySelector('.popup__info-form');

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

let popupAddForm = document.querySelector('.popupAdd__info-form');

let inputAddName = document.querySelector('.popupAdd__input-place-name');
let inputAddPhoto = document.querySelector('.popupAdd__input-place-link');

let closeAddButton = document.querySelector('.popupAdd__close-button');

addButton.addEventListener('click', function() {
  popupAdd.classList.add('popupAddOpen');
}
)

popupAddForm.addEventListener('submit', function(evt) {
  evt.preventDefault();
  popupAdd.classList.remove('popupAddOpen');
}
)

closeAddButton.addEventListener('click', function() {
  popupAdd.classList.remove('popupAddOpen');
}
)




/*
let likeButton = document.querySelector('.place__like-button');
let likeButtons = document.querySelectorAll('.place__like-button');
let likeButtonActive = document.querySelector('.place__like-button_active');


likeButtons.forEach((likeButton) function() {
  likeButton.addEventListener('click', function() {
    likeButton.classList.remove('place__like-button');
    likeButton.classList.add('place__like-button_active');
  })
});
*/

