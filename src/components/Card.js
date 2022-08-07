export default class Card {
  constructor(
    cardData,
    handleImageClick,
    cardSelector,
    handleCardRemove,
    handleLikeAdd,
    handleLikeRemove
  ) {
    this._name = cardData.name;
    this._photo = cardData.link;
    this._handleImageClick = handleImageClick;
    this._cardSelector = cardSelector;

    this._likes = cardData.likes;
    this._cardId = cardData.cardId;
    this._userId = cardData.userId;
    this._ownerId = cardData.ownerId;

    this._handleCardRemove = handleCardRemove;
    this._handleLikeAdd = handleLikeAdd;
    this._handleLikeRemove = handleLikeRemove;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content.cloneNode(true).children[0];

    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();

    this._photoElement = this._element.querySelector(".place__photo");

    this._photoElement.src = this._photo;
    this._photoElement.alt = this._name;
    this._element.querySelector(".place__name").textContent = this._name;

    this._likeButton = this._element.querySelector(".place__like-button");
    this._deleteButton = this._element.querySelector(".place__delete-button");

    this._likesCount = this._element.querySelector(".place__likes-count");
    this._likesCount.textContent = `${this._likes.length}`;

    this._handleLikeStatus();
    this._handleDeleteButtonStatus();

    this._setEventListeners();

    return this._element;
  }

  _setEventListeners() {
    if (this._deleteButton) {
      this._deleteButton.addEventListener("click", () => {
        this._handleCardRemove();
      });
    }

    // this._deleteButton?.addEventListener("click", () => {
    //   this._handleCardRemove();
    // });

    this._likeButton.addEventListener("click", () => {
      if (this._likeButton.classList.contains("place__like-button_active")) {
        this._handleLikeRemove();
      } else {
        this._handleLikeAdd();
      }
    });

    this._photoElement.addEventListener("click", () => {
      this._handleImageClick(this._name, this._photo);
    });
  }

  // _handleLike() {
  //   this._likeButton.classList.toggle("place__like-button_active");
  // }

  handleLikeAdd() {
    this._likeButton.classList.add("place__like-button_active");
  }

  handleLikeRemove() {
    this._likeButton.classList.remove("place__like-button_active");
  }

  deleteCard() {
    this._element.remove();
    this._element = null;
  }

  handleLikesCount(res) {
    this._likesCount.textContent = `${res.likes.length}`;
  }

  _handleLikeStatus() {
    this._likes.forEach((user) => {
      if (user._id === this._userId) {
        this.handleLikeAdd();
      } else {
        this.handleLikeRemove();
      }
    });
  }

  _handleDeleteButtonStatus() {
    if (this._userId !== this._ownerId) {
      this._deleteButton.remove();
      this._deleteButton = null;
    }
  }
}
