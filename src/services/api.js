import axios from 'axios';

const marvelData = axios.create({
  baseURL: 'https://gateway.marvel.com',
  params: {
    apikey: '7706ccc12ce30e7f7de92a4d321d0721'
  }
  // timeout: 10000
});

export default marvelData;
