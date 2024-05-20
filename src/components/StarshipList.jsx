import React from 'react';
import StarshipCard from './StarshipCard';

function StarshipList({ starships }) {
  return (
    <section>
      <ul>
        {starships.map((starship) => (
          <li key={starship.name}>
            <StarshipCard starship={starship} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default StarshipList;
