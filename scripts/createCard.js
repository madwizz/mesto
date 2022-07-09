import Card from "./Card";

// было

initialPlaces.forEach((initialPlace) => {
  const place = new Card(initialPlace, handleImageClick);
  place.generateCard();
  addPlace(placesContainer, place.getElement());
});

function addFormSubmitHandler(evt) {
  evt.preventDefault();
  const newPlace = new Card(
    {
      name: inputAddName.value,
      link: inputAddPhoto.value,
    },
    handleImageClick
  );
  newPlace.generateCard();
  addPlace(placesContainer, newPlace.getElement());
  closePopup(popupAdd);
  popupAddForm.reset();
}

// стало

function createPlace(cardData) {
  const place = new Card(cardData, handleImageClick);
  return place.generateCard();
}

initialPlaces.forEach((initialPlace) => {
  createPlace(initialPlace, handleImageClick);
  addPlace(placesContainer, getElement());
});

function addFormSubmitHandler(evt) {
  evt.preventDefault();
  createPlace(
    {
      name: inputAddName.value,
      link: inputAddPhoto.value,
    },
    handleImageClick
  );
  addPlace(placesContainer, place.getElement());
  closePopup(popupAdd);
  popupAddForm.reset();
}
