import React from 'react';

function PopupWithForm(props) {
  return (
    <div className={`popup popup_${props.name} ${props.isOpen && "popup_opened"}`}>
      <div className="popup__container">
        <form name={`${props.name}`} className="popup__form" onSubmit={props.onSubmit}>
          <h3 className="popup__title">{props.title}</h3>
          {props.children}
          <button className="popup__submit-button" type="submit">{props.buttonText}</button>
        </form>
        <button className="popup__close-button" onClick={props.onClose} type="button"></button>
      </div>
    </div>
  );
}

export default PopupWithForm;