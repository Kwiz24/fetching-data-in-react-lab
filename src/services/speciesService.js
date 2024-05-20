const SPECIES_URL = 'https://swapi.dev/api/species/';

export async function fetchSpecies() {
  try {
    const response = await fetch(SPECIES_URL);
    if (!response.ok) throw new Error('Network response was not ok');
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
}
