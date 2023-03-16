import React from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup(props) {
  const [name, setName] = React.useState('');
  const [link, setLink] = React.useState('');

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeLink(e) {
    setLink(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onAddPlace({
      name,
      link
    });
  }

  React.useEffect(() => {
    setName('');
    setLink('');
  }, [props.isOpen]); 

  return (
    <PopupWithForm 
      name="img" 
      title="Новое место" 
      isOpen={props.isOpen}
      buttonText="Создать"
      onClose ={props.onClose}
      onAddPlace={props.onAddPlace}
      onSubmit={handleSubmit}
    >
      <input id="title" name="name" className="popup__input" value={name || ''} onChange={handleChangeName} type="text" minLength="2" maxLength="30" autoFocus placeholder="Название" required />
      <span id="title-error" className="popup__error"></span>
      <input id="link" name="link" className="popup__input" value={link || ''} onChange={handleChangeLink} type="url" placeholder="Ссылка на картинку" required />
      <span id="link-error" className="popup__error"></span>
    </PopupWithForm>
  );
}

export default AddPlacePopup;