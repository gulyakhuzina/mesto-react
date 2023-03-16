import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup(props) {
  const [avatar, setAvatar] = React.useState('');
  const avatarRef = React.useRef('');

  function handleChangeAvatar(e) {
    setAvatar(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
  
    props.onUpdateAvatar({
      avatar: avatarRef.current.value
    });
  }

  return (
    <PopupWithForm 
      name="avatar" 
      title="Обновить аватар" 
      isOpen={props.isOpen}
      buttonText="Сохранить"
      onClose ={props.onClose}
      onSubmit={handleSubmit}
    >
      <input 
        ref={avatarRef} 
        id="avatar" 
        name="avatar" 
        className="popup__input" 
        defaultValue="" 
        onChange={handleChangeAvatar} 
        type="url" 
        placeholder="Ссылка на аватар" 
        required 
      />
      <span id="avatar-error" className="popup__error"></span>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;