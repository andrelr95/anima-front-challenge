import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'http://dummy.restapiexample.com/api/v1/',
  headers: {
    'content-type': 'application/json'
  }
})

export {
  axiosInstance
}