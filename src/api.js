import axios from "axios";

console.log(process.env.PORT)

const instance = axios.create({
    // baseURL: 'http://localhost:5000'
    baseURL: 'https://guarded-hamlet-78791.herokuapp.com'
});


export default instance;
