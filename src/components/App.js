import React from "react";
import { ReactDOM } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditProfilePopupOpen, setisEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setisAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setisEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});

  function handleEditAvatarClick() {
    setisEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setisEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setisAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setisEditProfilePopupOpen(false);
    setisAddPlacePopupOpen(false);
    setisEditAvatarPopupOpen(false);
    setSelectedCard({});
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  return (
    <div className="page">
      <Header />
      <Main 
        onEditProfile={handleEditProfileClick} 
        onAddPlace={handleAddPlaceClick} 
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
      />
      <Footer />
      <PopupWithForm 
        name="profile" 
        title="Редактировать профиль" 
        isOpen={isEditProfilePopupOpen} 
        buttonText="Сохранить"
        onClose ={closeAllPopups}
      >
        <input id="name" name="name" className="popup__input" defaultValue="" type="text" minLength="2" maxLength="40" autoFocus placeholder="Ваше имя" required />
        <span id="name-error" className="popup__error"></span>
        <input id="about" name="about" className="popup__input" defaultValue="" type="text" minLength="2" maxLength="200" placeholder="Ваш род деятельности" required />
        <span id="about-error" className="popup__error"></span>
      </PopupWithForm>

      <PopupWithForm 
        name="avatar" 
        title="Обновить аватар" 
        isOpen={isEditAvatarPopupOpen}
        buttonText="Сохранить"
        onClose ={closeAllPopups}
      >
        <input id="avatar" name="avatar" className="popup__input" defaultValue="" type="url" placeholder="Ссылка на аватар" required />
        <span id="avatar-error" className="popup__error"></span>
      </PopupWithForm>

      <PopupWithForm 
        name="img" 
        title="Новое место" 
        isOpen={isAddPlacePopupOpen}
        buttonText="Создать"
        onClose ={closeAllPopups}
      >
        <input id="title" name="name" className="popup__input" defaultValue="" type="text" minLength="2" maxLength="30" autoFocus placeholder="Название" required />
        <span id="title-error" className="popup__error"></span>
        <input id="link" name="link" className="popup__input" defaultValue="" type="url" placeholder="Ссылка на картинку" required />
        <span id="link-error" className="popup__error"></span>
      </PopupWithForm>

      <ImagePopup
        card={selectedCard}
        onClose={closeAllPopups}
      />

      <PopupWithForm name="confirmation" title="Вы уверены?" buttonText="Да" />
    </div>
  );
}

export default App;
