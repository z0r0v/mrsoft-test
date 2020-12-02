const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
const requestURL = 'https://www.mrsoft.by/data.json';

export default class Api {
    getData() {
        return fetch(proxyUrl + requestURL)
            .then(response => response.json())
            .then(({data}) => data)
    }
}
