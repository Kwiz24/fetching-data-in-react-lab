import React, { useState, useEffect } from 'react';
import StarshipSearch from './components/StarshipSearch';
import StarshipList from './components/StarshipList';
import { fetchStarships } from './services/starshipService';

function App() {
  const [starships, setStarships] = useState([]);
  const [filteredStarships, setFilteredStarships] = useState([]);

  useEffect(() => {
    const getStarships = async () => {
      try {
        const starshipsData = await fetchStarships();
        setStarships(starshipsData);
        setFilteredStarships(starshipsData);
      } catch (error) {
        console.error('Error fetching starships:', error);
      }
    };
    getStarships();
  }, []);

  const handleSearch = (query) => {
    const filtered = starships.filter((starship) =>
      starship.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredStarships(filtered);
  };

  return (
    <main>
      <StarshipSearch onSearch={handleSearch} />
      <StarshipList starships={filteredStarships} />
    </main>
  );
}

export default App;
