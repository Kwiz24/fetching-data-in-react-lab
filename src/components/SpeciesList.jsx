import React, { useState, useEffect } from 'react';
import { fetchSpecies } from '../services/speciesService';

function SpeciesList() {
  const [species, setSpecies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getSpecies = async () => {
      try {
        const speciesData = await fetchSpecies();
        setSpecies(speciesData);
        setLoading(false);
      } catch (error) {
        setError('Failed to fetch species. Please try again later.');
        setLoading(false);
      }
    };
    getSpecies();
  }, []);

  return (
    <div>
      <h2>Species</h2>
      {loading ? (
        <div className="loading">Loading...</div>
      ) : error ? (
        <div className="error">{error}</div>
      ) : (
        <ul>
          {species.map((specie) => (
            <li key={specie.name}>
              <div>
                <h3>{specie.name}</h3>
                <p>Classification: {specie.classification}</p>
                <p>Designation: {specie.designation}</p>
                <p>Average Height: {specie.average_height}</p>
                <p>Skin Colors: {specie.skin_colors}</p>
                <p>Hair Colors: {specie.hair_colors}</p>
                <p>Eye Colors: {specie.eye_colors}</p>
                <p>Average Lifespan: {specie.average_lifespan}</p>
                <p>Language: {specie.language}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SpeciesList;
