import axios from 'axios'

const typicodeApi = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
  headers: {
    'Content-Type': 'application/json'
  }
})

export default typicodeApi
