import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization:
        'Client-ID 4f74a18000dd375a260dbd9b4e9fce35137b00e7bdfa32e20b89a55873351bbf'
    }
});