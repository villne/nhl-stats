import React, { useEffect, useState } from 'react';
import './Cards.scss';
import { Card } from './Card';

interface CardsProps {}

export const Cards: React.FC<CardsProps> = () => {
  const [people, setPeople] = useState<IPeople[]>([]);

  const randomPeopleNumber = (): number =>
    Math.floor(Math.random() * (8477474 - 8477374)) + 8477374;

  const fetchData = async (callNumber: number) => {
    try {
      const response = await fetch(`https://statsapi.web.nhl.com/api/v1/people/${callNumber}`);
      const data = await response.json();
      //console.log(data);
      const [item] = data.people;
      //console.log(item);
      setPeople(item);
    } catch (error) {}
  };

  const leftArrowClicked = () => {};

  const rightArrowClicked = () => {
    fetchData(randomPeopleNumber());
  };

  useEffect(() => {
    fetchData(randomPeopleNumber());
  }, []);

  return (
    <section className='form-container'>
      <Card people={people} />
      <button className='left-arrow' type='submit' onClick={() => leftArrowClicked()}>
        Left Arrow
      </button>
      <button className='right-arrow' type='submit' onClick={() => rightArrowClicked()}>
        Right Arrow
      </button>
    </section>
  );
};
