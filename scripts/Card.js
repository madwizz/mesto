export default class Card {
  constructor(cardData, handleImageClick) {
    this._name = cardData.name;
    this._photo = cardData.link;
    this._handleImageClick = handleImageClick;
  }

  _getTemplate() {
    const cardElement = document.querySelector("#place").content.cloneNode(true)
      .children[0];

    return cardElement;
  }

  getElement() {
    return this._element;
  }

  generateCard() {
    this._element = this._getTemplate();

    this._photoElement = this._element.querySelector(".place__photo");

    this._photoElement.src = this._photo;
    this._photoElement.alt = this._name;
    this._element.querySelector(".place__name").textContent = this._name;

    this._likeButton = this._element.querySelector(".place__like-button");
    this._deleteButton = this._element.querySelector(".place__delete-button");

    this._setEventListeners();

    return this._element;
  }

  _setEventListeners() {
    this._deleteButton.addEventListener("click", () => {
      this._handleDeleteButton();
    });

    this._likeButton.addEventListener("click", () => {
      this._handleLikeButton();
    });

    this._photoElement.addEventListener("click", () => {
      this._handleImageClick(this._name, this._photo);
    });
  }

  _handleLikeButton() {
    this._likeButton.classList.toggle("place__like-button_active");
  }

  _handleDeleteButton() {
    console.log(this._element);
    this._element.remove();
  }
}
