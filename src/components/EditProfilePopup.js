import React from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function EditProfilePopup(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeAbout(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateUser({
      name,
      about: description,
    });
  }

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser, props.isOpen]); 

  return (
    <PopupWithForm 
      name="profile" 
      title="Редактировать профиль" 
      isOpen={props.isOpen} 
      buttonText="Сохранить"
      onClose ={props.onClose}
      onSubmit={handleSubmit}
    >
      <input id="name" name="name" className="popup__input" value={name || ''} onChange={handleChangeName} type="text" minLength="2" maxLength="40" autoFocus placeholder="Ваше имя" required />
      <span id="name-error" className="popup__error"></span>
      <input id="about" name="about" className="popup__input" value={description || ''} onChange={handleChangeAbout} type="text" minLength="2" maxLength="200" placeholder="Ваш род деятельности" required />
      <span id="about-error" className="popup__error"></span>
    </PopupWithForm>
  );
}

export default EditProfilePopup;