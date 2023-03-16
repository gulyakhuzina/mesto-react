import React from 'react';

function ImagePopup(props) {
  return (
    <div className={`popup popup_open-img ${props.card.link && "popup_opened"}`}>
      <div className="popup__container-img">
        <figure className="popup__figure">
          <img className="popup__open-img" src={props.card.link} alt={props.card.name} />
          <figcaption className="popup__caption-img">{props.card.name}</figcaption>
        </figure>
        <button className="popup__close-button" onClick={props.onClose} type="button"></button>
      </div>
    </div>
  );
}

export default ImagePopup;