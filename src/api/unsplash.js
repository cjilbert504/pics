import axios from 'axios';

export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization: "Client-ID 2hbnwqKQi3RlFLXkUVr7eTUpV0KYDhycsxzKbTriNHc"
    }
})