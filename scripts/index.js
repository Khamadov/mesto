const buttonEditPopup = document.querySelector('.profile__edit-button');
const popupEdit = document.querySelector('#popup-edit');
const buttonCloseEditPopup = popupEdit.querySelector('.popup__close');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__profession');
const formEdit = popupEdit.querySelector('#form-edit');
const nameInput = popupEdit.querySelector('.popup__input_type_name');
const jobInput = popupEdit.querySelector('.popup__input_type_job');

function handleFormSubmitEdit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup(popupEdit);
}

function openPopup(open) {
  open.classList.add('popup_opened');
}

function closePopup(close) {
  close.classList.remove('popup_opened');
}

function openEditPopup() {
  openPopup(popupEdit);
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}

function closeEditPopup() {
  closePopup(popupEdit);
}

formEdit.addEventListener('submit', handleFormSubmitEdit);
buttonEditPopup.addEventListener('click', openEditPopup);
buttonCloseEditPopup.addEventListener('click', closeEditPopup);

const elementsList = document.querySelector('.elements');
const elementTemplate = document.querySelector('.element-template').content;
const addPopup = document.querySelector('#popup-add');
const addOpenPopupButton = document.querySelector('.profile__add-button');
const addForm = addPopup.querySelector('#form-add');
const addClosePopupButton = addPopup.querySelector('.popup__close');
const imagePopup = document.querySelector('#popup-image');
const imageClosePopupElement = imagePopup.querySelector('.popup__close');
const photoInput = addForm.querySelector('.popup__input_type_link');
const placeInput = addForm.querySelector('.popup__input_type_place');

function renderInitialCards() {
  initialCards.forEach(renderItem);
}

function renderItem(item) {
  const newCard = createCard(item.name, item.link);
  addListenersForItem(newCard, item);
  elementsList.prepend(newCard);
}

function createCard(name, link) {
  const newHtmlElement = elementTemplate.cloneNode(true);
  const photoElement = newHtmlElement.querySelector('.element__photo');
  const placeElement = newHtmlElement.querySelector('.element__place');
  placeElement.textContent = name;
  photoElement.src = link;
  photoElement.alt = name;

  return newHtmlElement;
}

renderInitialCards();

function addListenersForItem(element, item) {
  const addDeleteButton = element.querySelector('.element__delete');
  addDeleteButton.addEventListener('click', handleDelete);

  const addLikeButton = element.querySelector('.element__like');
  addLikeButton.addEventListener('click', handleLike);

  const showImage = element.querySelector('.element__photo');
  showImage.addEventListener('click', () => openImagePopup(item));
}

function handleDelete(event) {
  const currentDelete = event.target.closest('.element');
  currentDelete.remove();
}

function handleLike(event) {
  event.target.classList.toggle('element__like_active');
}

function openImagePopup(item) {
  const image = imagePopup.querySelector('.popup__photo');
  const subtitle = imagePopup.querySelector('.popup__subtitle');
  image.src = item.link;
  image.alt = item.name;
  subtitle.textContent = item.name;
  openPopup(imagePopup);
}

function handleFormSubmitAdd(evt) {
  evt.preventDefault();
  renderItem({ name: placeInput.value, link: photoInput.value });
  closePopup(addPopup);
}

function openAddPopup() {
  openPopup(addPopup);
  addForm.reset();
}

function closeAddPopup() {
  closePopup(addPopup);
}

function closeImagePopup() {
  closePopup(imagePopup);
}

addForm.addEventListener('submit', handleFormSubmitAdd);
addOpenPopupButton.addEventListener('click', openAddPopup);
addClosePopupButton.addEventListener('click', closeAddPopup);
imageClosePopupElement.addEventListener('click', closeImagePopup);
