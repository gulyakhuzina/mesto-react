import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Card(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const isOwn = props.card.owner._id === currentUser._id;
  const isLiked = props.card.likes.some(i => i._id === currentUser._id);
  const cardLikeButtonClassName = ( 
    `element__like-button ${isLiked && 'element__like-button_active'}` 
  );; 

  function handleClick() {
    props.onCardClick(props.card);
  } 

  function handleDeleteClick() {
    props.onCardDelete(props.card);
  }

  function handleLikeClick() {
    props.onCardLike(props.card);
  }

  return (
    <div className="element_default" id="image">
      <li className="element">
        <img className="element__image" onClick={handleClick} src={props.card.link} alt={props.card.name} />
        {isOwn && <button className="element__basket" onClick={handleDeleteClick} type="button"/>}
        <div className="element__card">
          <h3 className="element__title">{props.card.name}</h3>
          <div className="element__like">
            <button className={cardLikeButtonClassName} type="button" onClick={handleLikeClick}></button>
            <span className="element__like-count">{props.card.likes.length}</span>
          </div>
        </div>
      </li>
    </div>
  );
}

export default Card;