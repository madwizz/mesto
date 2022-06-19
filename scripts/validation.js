// проверить стили ошибок

function validateForm(formElement) {
  const submitBtn = formElement.querySelector(".popup__submit-button");
  if (!formElement.checkValidity()) {
    submitBtn.classList.add("popup__submit-button_disabled");
    submitBtn.setAttribute("disabled", "true");
  } else {
    submitBtn.classList.remove("popup__submit-button_disabled");
    submitBtn.removeAttribute("disabled");
  }
}

const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.add("form__info_invalid");
  errorElement.textContent = errorMessage;
  errorElement.classList.add("popup__error-message_active");
};

const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.remove("form__info_invalid");
  errorElement.classList.remove("popup__error-message_active");
  errorElement.textContent = "";
};

const checkInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
};

const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll(".popup__info"));
  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", function () {
      checkInputValidity(formElement, inputElement);
    });
  });

  formElement.addEventListener("input", () => validateForm(formElement));
};

function enableValidation() {
  const formList = Array.from(document.querySelectorAll(".popup__form"));
  formList.forEach((formElement) => {
    formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    setEventListeners(formElement);
  });
}
enableValidation();
