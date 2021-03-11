import React from 'react';
import './Card.scss';
import logo from '../../assets/1200px-NHL_Logo_former.png';

interface CardProps {
  people: IPeople[];
}

export const Card: React.FC<CardProps> = ({ people }) => {
  console.log('hello' + people);
  return (
    <div className='card-container'>
      <img src={logo} alt='logo'></img>
      {/*
      {people && (
        <div className="card-text">
           <p>Name: {people.fullName}</p>
          {people.primaryNumber ? <p>Number: {people.primaryNumber}</p> : null}
          <p>
            Position: {people.primaryPosition.name} (
            {people.primaryPosition.code})
          </p>
          <p>Current Team: {people.currentTeam}</p>
          <p>Birthdate: {people.birthDate}</p>
          <p>City of Birth: {people.birthCity}</p>
          <p>Nationality: {people.nationality}</p>
          <p>Height: {people.height}</p>
          <p>Weight: {people.weight}</p>
          {people.active ? <p>Active</p> : <p>Not Active</p>}
          {people.rookie ? <p>Rookie</p> : null}
        </div>
        })}
      )}  */}
    </div>
  );
};
