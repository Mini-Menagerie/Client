import axios from 'axios';

let token = localStorage.getItem('menagerie');

axios.defaults.baseURL = 'https://mini-menagerie-api.herokuapp.com'
axios.defaults.headers.common = {'Authorization': `Bearer ${token}`}

export default axios;