import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://tinder-backend-anadi.herokuapp.com',
});

export default instance;