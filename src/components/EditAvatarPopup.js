import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup(props) {
  const avatarRef = React.useRef('');

  function handleSubmit(e) {
    e.preventDefault();
  
    props.onUpdateAvatar({
      avatar: avatarRef.current.value
    });

    avatarRef.current.value = '';
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
        type="url" 
        placeholder="Ссылка на аватар" 
        required 
      />
      <span id="avatar-error" className="popup__error"></span>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;