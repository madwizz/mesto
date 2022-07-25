export default class Section {
  constructor({ items, renderer }, containerSelector) {
    this._items = items;
    this._renderer = renderer;
    this._containerSelector = containerSelector;
  }
  renderItem() {
    this._items.forEach((item) => {
      this._renderer(item);
    });
  }
  addItem(item) {
    this._containerSelector.prepend(item);
  }
}

// // load six places

// initialPlaces.forEach((initialPlace) => {
//   addPlace(placesContainer, initialPlace);
// });

// // addPlace to the page; places = placesContainer

// function addPlace(places, place) {
//   const card = createPlace(place);
//   places.prepend(card);
// }

// function createPlace(cardData) {
//   const card = new Card(cardData, handleImageClick, "#place");
//   return card.generateCard();
// }
