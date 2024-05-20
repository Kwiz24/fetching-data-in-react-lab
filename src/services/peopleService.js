const PEOPLE_URL = 'https://swapi.dev/api/people/';

export async function fetchPeople() {
  try {
    const response = await fetch(PEOPLE_URL);
    if (!response.ok) throw new Error('Network response was not ok');
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
}
