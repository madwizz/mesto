let popup = document.querySelector('.popup');
let editButton = document.querySelector('.profile__edit-button');
let closeButton = document.querySelector('.popup__close-button');

let profilePageName = document.querySelector('.profile__name');
let profilePageTitle = document.querySelector('.profile__title');

let inputName = document.querySelector('.popup__profile-name');
let inputTitle = document.querySelector('.popup__profile-title');

let popupForm = document.querySelector('.popup__form');
let likeButton = document.querySelector('.place__like-button');

likeButton.addEventListener('click', function(){
  likeButton.classList.remove('place__like-button');
  likeButton.classList.add('place__like-button-active');
}
)

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

