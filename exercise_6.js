const BASE_URL = 'https://api.agify.io?name=willian&country_id=BR';
(async function () {
    const resposta = await fetch(BASE_URL);
    const data = await resposta.json();
    console.log(data);
})();
