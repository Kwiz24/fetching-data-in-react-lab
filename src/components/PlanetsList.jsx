import React, { useState, useEffect } from 'react';
import { fetchPlanets } from '../services/planetsService';

function PlanetsList() {
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getPlanets = async () => {
      try {
        const planetsData = await fetchPlanets();
        setPlanets(planetsData);
        setLoading(false);
      } catch (error) {
        setError('Failed to fetch planets. Please try again later.');
        setLoading(false);
      }
    };
    getPlanets();
  }, []);

  return (
    <div>
      <h2>Planets</h2>
      {loading ? (
        <div className="loading">Loading...</div>
      ) : error ? (
        <div className="error">{error}</div>
      ) : (
        <ul>
          {planets.map((planet) => (
            <li key={planet.name}>
              <div>
                <h3>{planet.name}</h3>
                <p>Rotation Period: {planet.rotation_period}</p>
                <p>Orbital Period: {planet.orbital_period}</p>
                <p>Diameter: {planet.diameter}</p>
                <p>Climate: {planet.climate}</p>
                <p>Gravity: {planet.gravity}</p>
                <p>Terrain: {planet.terrain}</p>
                <p>Surface Water: {planet.surface_water}</p>
                <p>Population: {planet.population}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default PlanetsList;
