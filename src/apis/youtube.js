import axios from 'axios';

const KEY = 'AIzaSyC3NiPO1AkVPs5CBofS5_jTc2zpQbLJHG0';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY,
    }

});