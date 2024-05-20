import React, { useState } from 'react';

function StarshipSearch({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search starships..."
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default StarshipSearch;
