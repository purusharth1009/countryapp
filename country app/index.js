document.addEventListener('DOMContentLoaded', () => {
    const apiUrl = 'https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries';
    const countryCards = document.getElementById('country-cards');
    const sortBtn = document.getElementById('sort-btn');
    let countriesData = [];
  
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        countriesData = data.data; // Adjusted to match the actual API response structure
        displayCountries(countriesData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    const displayCountries = (countries) => {
      countryCards.innerHTML = '';
      countries.forEach(country => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
          <h2>${country.name}</h2>
          <p>Population: ${country.population}</p>
          <p>Region: ${country.region}</p>
          <p>Capital: ${country.capital}</p>
        `;
        countryCards.appendChild(card);
      });
    };
  
    const sortCountriesByPopulation = () => {
      const sortedCountries = [...countriesData].sort((a, b) => b.population - a.population);
      displayCountries(sortedCountries);
    };
  
    sortBtn.addEventListener('click', sortCountriesByPopulation);
  
    fetchData();
  });
  