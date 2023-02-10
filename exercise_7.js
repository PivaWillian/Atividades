const BASE_URL = 'https://rickandmortyapi.com/api/character';

(async function () {
    const response = await fetch(BASE_URL);
    const data = await response.json();
    console.log(data);
})();