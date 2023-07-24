const popupOpenButtonElement = document.querySelector('.profile__edit-button');
const popupElement = document.querySelector('.popup');
const popupCloseButtonElement = popupElement.querySelector('.popup__close');
let formElement = popupElement.querySelector('.popup__form');
let nameInput = document.querySelector('.profile__name');
let jobInput = document.querySelector('.profile__profession');
popupElement.querySelector('.popup__name').value = nameInput.textContent;
popupElement.querySelector('.popup__profession').value = jobInput.textContent;

function handleFormSubmit(evt) {
  evt.preventDefault();
  nameInput.textContent = popupElement.querySelector('.popup__name').value;
  jobInput.textContent = popupElement.querySelector('.popup__profession').value;
  closePopup();
}

function openPopup() {
  popupElement.classList.add('popup__opened');
}

function closePopup() {
  popupElement.classList.remove('popup__opened');
}

formElement.addEventListener('submit', handleFormSubmit);
popupOpenButtonElement.addEventListener('click', openPopup);
popupCloseButtonElement.addEventListener('click', closePopup);

