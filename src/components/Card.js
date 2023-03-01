import React from 'react';

function Card(props) {
  function handleClick() {
    props.onCardClick(props.card);
  } 

  return (
    <div className="element_default" id="image">
        <li className="element">
          <img className="element__image" onClick={handleClick} src={props.card.link} alt={props.card.name} />
          <button className="element__basket" type="button"></button>
          <div className="element__card">
            <h3 className="element__title">{props.card.name}</h3>
            <div className="element__like">
              <button className="element__like-button" type="button"></button>
              <span className="element__like-count">{props.card.likes.length}</span>
            </div>
          </div>
        </li>
      </div>
  );
}

export default Card;