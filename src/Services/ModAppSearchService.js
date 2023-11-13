import axios from 'axios'

let apiUrl = 'https://one001-ai-app-mod.onrender.com/api/mod/app/search/'
// let apiUrl = 'http://localhost:4011/api/mod/app/search/'

let getModAppByQuery = async (query) => {
    return await axios.get(`${apiUrl}${query}`);
}

export {getModAppByQuery}