import axios from "axios"

const BASE_URL = 'https://pixabay.com/api/'
const API_KEY = '34922298-738fc0c04c0e6fb96d143066f'


export const getGallery = async (query, currentPage) => {
    const {data} = await axios.get(`${BASE_URL}?q=${query}&page=${currentPage}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`);
    return data;
}