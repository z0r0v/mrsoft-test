
const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
const requestURL = 'https://www.mrsoft.by/data.json';

class Api {
    getData() {
        return fetch(proxyUrl + requestURL).then(data=> console.log(data.json()))
    }
}


const api = new Api;
api.getData();


