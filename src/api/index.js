import axios from 'axios'
import { URL } from '../config'
const apiKey = process.env.REACT_APP_API_KEY

const instance = axios.create({
    baseURL: URL
})

const get = async (url, extraData = '') => {
    return await instance.get(`${url}?api_key=${apiKey}${extraData}`)
}

const getListLimit = async (url, limit) => {
    let movielist = []
    const itemlist = await instance.get(`${url}?api_key=${apiKey}`)
    for(let i=0; i < limit; i++){
        movielist.push(itemlist.data.results[i])
    }
    return movielist
}

export default instance
export {get, getListLimit}