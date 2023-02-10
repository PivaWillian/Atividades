const BASE_URL = 'https://randomuser.me/api/?results=4';

(async function () {
    const response = await fetch(BASE_URL);
    const data = await response.json();
    console.log(data);
})();