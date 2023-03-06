const axios = require('axios');

class Vagalume {

    constructor(api_key) {
        this.api_key = api_key;
    }

    async search(query) {
        return new Promise((resolve, reject) => {
            query = encodeURIComponent(query);
            axios.get('https://api.vagalume.com.br/search.excerpt?q=' + query + '&limit=1&apiKey=' + this.api_key).then(response => {
                let id = response?.data?.response?.docs?.[0]?.id;
                if(!id) return reject('Not found!');
                axios.get('https://api.vagalume.com.br/search.php?musid=' + id + '&apikey=' + this.api_key).then(response => {
                    let mus = response?.data?.mus?.[0];
                    if(!mus) return reject('Not found!');
                    resolve({
                        name: mus.name,
                        artist: response.data.art.name,
                        url: mus.url,
                        lyrics: mus.text
                    });
                }).catch(error => {
                    return reject(error);
                });
            }).catch(error => {
                return reject(error);
            });
        });
    }

}

module.exports = Vagalume;