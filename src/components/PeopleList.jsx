import React, { useState, useEffect } from 'react';
import { fetchPeople } from '../services/peopleService';

function PeopleList() {
  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getPeople = async () => {
      try {
        const peopleData = await fetchPeople();
        setPeople(peopleData);
        setLoading(false);
      } catch (error) {
        setError('Failed to fetch people. Please try again later.');
        setLoading(false);
      }
    };
    getPeople();
  }, []);

  return (
    <div>
      <h2>People</h2>
      {loading ? (
        <div className="loading">Loading...</div>
      ) : error ? (
        <div className="error">{error}</div>
      ) : (
        <ul>
          {people.map((person) => (
            <li key={person.name}>
              <div>
                <h3>{person.name}</h3>
                <p>Height: {person.height}</p>
                <p>Mass: {person.mass}</p>
                <p>Hair Color: {person.hair_color}</p>
                <p>Skin Color: {person.skin_color}</p>
                <p>Eye Color: {person.eye_color}</p>
                <p>Birth Year: {person.birth_year}</p>
                <p>Gender: {person.gender}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default PeopleList;
