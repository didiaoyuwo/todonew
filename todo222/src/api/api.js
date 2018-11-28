import axios from 'axios'

export const getTodo = (params) => {
  return axios.get('/', {
    params
  })
}
export const getItems = (params) => {
  return axios.get('/todo/0', {
    params
  })
}
