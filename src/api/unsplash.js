import axios from 'axios';

export default axios.create({
  baseURL :"https://api.unsplash.com",
  headers:{
    Authorization: 'Client-ID d8b870a2c24615f41f56eb18eb1b0a59ed413ba389ff68d37df59d3f89777d6a'
  }
});
