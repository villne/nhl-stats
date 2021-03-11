import React from 'react';
import './News.scss';

interface NewsProps {}

const news = [
  {
    id: 1,
    news:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat expedita obcaecati officiis nisi ut facere laborum quo harum, aperiam sed earum illo animi quibusdam vel, ducimus sit laboriosam, consequatur eum?',
  },
  {
    id: 2,
    news:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum magnam distinctio beatae quibusdam, eius adipisci iusto exercitationem deleniti magni, ducimus fugit modi unde doloribus cupiditate laborum odit provident molestias optio!',
  },
  {
    id: 3,
    news:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod minima debitis ratione natus aperiam perspiciatis sit ipsam amet, unde facilis, officiis dolor, consectetur qui asperiores veniam excepturi sed. Maiores, sunt.',
  },
];

export const News: React.FC<NewsProps> = () => {
  return (
    <section className='news-section'>
      <h1>News</h1>
      {news.map((item) => (
        <div className='item-news'>{item.news}</div>
      ))}
    </section>
  );
};
