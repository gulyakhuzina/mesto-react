import React from 'react';
import { api } from '../utils/api';
import Card from './Card';

function Main(props) {
  const [userName, setUserName] = React.useState('');
  const [userDescription, setuserDescription] = React.useState('');
  const [userAvatar, setuserAvatar] = React.useState('');
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getInitialCards(), api.getUserInfo()])
      .then(([cardsData, userData]) => {
        setUserName(userData.name);
        setuserAvatar(userData.avatar);
        setuserDescription(userData.about);
        setCards(cardsData.reverse());
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <main className="content page__content">
      <section className="profile">
        <div className="profile__container">
          <button className="profile__avatar-button" onClick={props.onEditAvatar} type="button">
            <img className="profile__avatar-photo" src={userAvatar} alt="Фотография профиля" />
          </button>
          <div className="profile__info">
            <h1 className="profile__title">{userName}</h1>
            <button className="profile__edit-button" onClick={props.onEditProfile} type="button"></button>
            <p className="profile__subtitle">{userDescription}</p>
          </div>
        </div>
        <button className="profile__add-button" onClick={props.onAddPlace} type="button"></button>
      </section>
      <section className="elements">
        <ul className="elements__list">
          {cards.map((card) => (
            <Card card={card} key={card._id} onCardClick={props.onCardClick} />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main; 