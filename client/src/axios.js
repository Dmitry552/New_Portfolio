import axios from 'axios';
//import config from './config';

//axios.defaults.baseURL = config.URL;
axios.defaults.headers.common['Accept'] = 'application/json';
axios.defaults.headers.post['Content-Type'] = 'application/json';

export default axios;