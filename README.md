# Vagalume
Esta é uma biblioteca Javascript desenvolvida para buscar letras de músicas no site Vagalume, através da sua API oficial.

### Instalação
```
npm install @eugabrielsilva/vagalume
```

### Uso
É necessário ter uma [token de autorização](https://auth.vagalume.com.br/settings/api/) para acessar a API.

```js
const Vagalume = require('@eugabrielsilva/vagalume');
const vagalume = new Vagalume('API_TOKEN'); // sua token

vagalume.search('just the way you are').then(data => {
    console.log(data);
}).catch(error => {
    console.log(error);
});
```

> A função `search()` é assíncrona e retorna uma Promise.

### Exemplo de resposta
Caso alguma música seja encontrada, um objeto JSON é retornado com a resposta. Se nada for encontrado, um erro é retornado.

```json
{
  name: "Just The Way You Are",
  artist: "Bruno Mars",
  url: "https://www.vagalume.com.br/bruno-mars/just-the-way-you-are.html",
  lyrics: "Oh her eyes, her eyes
           Make the stars look like they're not shining
           Her hair, her hair
           Falls perfectly without her trying
           She's so beautiful (...)"
}
```

### Créditos
Desenvolvido por [Gabriel Silva](https://github.com/eugabrielsilva).