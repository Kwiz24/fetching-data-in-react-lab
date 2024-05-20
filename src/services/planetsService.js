const PLANETS_URL = 'https://swapi.dev/api/planets/';

export async function fetchPlanets() {
  try {
    const response = await fetch(PLANETS_URL);
    if (!response.ok) throw new Error('Network response was not ok');
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
}
