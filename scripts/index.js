const popupOpenButtonElement = document.querySelector('.profile__edit-button');
const popupElement = document.querySelector('#popup-edit');
const popupCloseButtonElement = popupElement.querySelector('.popup__close');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__profession');
let formElement = popupElement.querySelector('#form-edit');
let nameInput = popupElement.querySelector('.popup__input_type_name');
let jobInput = popupElement.querySelector('.popup__input_type_job');

function handleFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup();
}

function openPopup(open) {
  open.classList.add('popup_opened');
}

function openEditPopup() {
  openPopup(popupElement);
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}

function closePopup() {
  popupElement.classList.remove('popup_opened');
  addPopupElement.classList.remove('popup_opened');
  imagePopupElement.classList.remove('popup_opened');
}

formElement.addEventListener('submit', handleFormSubmit);
popupOpenButtonElement.addEventListener('click', openEditPopup);
popupCloseButtonElement.addEventListener('click', closePopup);

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg',
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg',
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg',
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg',
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg',
  },
];

const elementsList = document.querySelector('.elements');
const elementTemplate = document.querySelector('.element-template').content;
const addPopupElement = document.querySelector('#popup-add');
const addOpenPopupButton = document.querySelector('.profile__add-button');
const addForm = addPopupElement.querySelector('#form-add');
const addButtonSaveElement = addForm.querySelector('.popup__save');
const addClosePopupButton = addPopupElement.querySelector('.popup__close');
const imagePopupElement = document.querySelector('#popup-image');
const imageClosePopupElement = imagePopupElement.querySelector('.popup__close');
let photoInput = addForm.querySelector('.popup__input_type_link');
let placeInput = addForm.querySelector('.popup__input_type_place');

function render() {
  initialCards.forEach(renderItem);
}

function renderItem(item) {
  const newHtmlElement = elementTemplate.cloneNode(true);
  const photoElement = newHtmlElement.querySelector('.element__photo');
  const placeElement = newHtmlElement.querySelector('.element__place');
  placeElement.textContent = item.name;
  photoElement.src = item.link;
  photoElement.alt = item.name;

  newHtmlElement
    .querySelector('.element__photo').addEventListener('click', function () {
      imageOpenPopup(item.link, item.name);
    });

  listenersForItem(newHtmlElement);
  elementsList.prepend(newHtmlElement);
}

render();

function listenersForItem(element) {
  const addDeleteButton = element.querySelector('.element__delete');
  addDeleteButton.addEventListener('click', handleDelete);

  const addLikeButton = element.querySelector('.element__like');
  addLikeButton.addEventListener('click', handleLike);
}

function handleDelete(event) {
  const currentDelete = event.target.closest('.element');
  currentDelete.remove();
}

function handleLike(event) {
  event.target.classList.toggle('element__like_active');
}

function imageOpenPopup(imageLink, imageSubtitle) {
  const image = imagePopupElement.querySelector('.popup__photo');
  const subtitle = imagePopupElement.querySelector('.popup__subtitle');

  image.src = imageLink;
  image.alt = imageSubtitle;
  subtitle.textContent = imageSubtitle;
  openPopup(imagePopupElement);
}

function addSubmit(evt) {
  evt.preventDefault();
  renderItem({ name: placeInput.value, link: photoInput.value });
  closePopup();
}

function addOpenPopup() {
  openPopup(addPopupElement);
  placeInput.value = '';
  photoInput.value = '';
}

addButtonSaveElement.addEventListener('click', addSubmit);
addOpenPopupButton.addEventListener('click', addOpenPopup);
addClosePopupButton.addEventListener('click', closePopup);
imageClosePopupElement.addEventListener('click', closePopup);
