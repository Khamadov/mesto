export default class FormValidator {

constructor(config, formElement){
  this._config = config;
  this._formElement = formElement;
}


_showError(inputElement, errorElement) {
  inputElement.classList.add(this._config.inputErrorClass);
  errorElement.textContent = inputElement.validationMessage;
}

_hideError(inputElement, errorElement) {
  inputElement.classList.remove(this._config.inputErrorClass);
  errorElement.textContent = "";
}

_checkInputValidity(inputElement) {
  const isInputValid = inputElement.validity.valid;
  const errorElement = this._formElement.querySelector(`#${inputElement.name}-error`);

  if (isInputValid) {
    this._hideError(inputElement, errorElement);
  } else {
    this._showError(inputElement, errorElement);
  }
}

_toggleButton(buttonElement, isActive) {
  if (isActive) {
    buttonElement.disabled = false;
    buttonElement.classList.remove(this._config.inactiveButtonClass);
  } else {
    buttonElement.disabled = 'disabled';
    buttonElement.classList.add(this._config.inactiveButtonClass);
  }
}

_setEventListener() {
  const inputList = this._formElement.querySelectorAll(this._config.inputSelector);
  const submitButton = this._formElement.querySelector(this._config.submitButtonSelector);

  this._toggleButton(submitButton, this._formElement.checkValidity());

  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      this._toggleButton(submitButton, this._formElement.checkValidity());
      this._checkInputValidity(inputElement);
    });
  });
  this._formElement.addEventListener('submit', (evt) => {
    evt.preventDefault();
  });
}

enableValidation() {
  this._setEventListener()
}

}
