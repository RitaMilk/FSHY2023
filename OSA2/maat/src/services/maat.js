import axios from 'axios'
const baseUrl = 'https://restcountries.com/v3.1/all'
const baseUrlName = 'https://restcountries.com/v3.1/name'

const getAll = () => {
  return axios.get(baseUrl)
}
const getByName = (name) => {
  return axios.get(`${baseUrlName}/${name}`)
}

const create = newObject => {
  return axios.post(baseUrl, newObject)
}

const update = (id, newObject) => {
  return axios.put(`${baseUrl}/${id}`, newObject)
}

const remove = (id) => {
    return axios.delete(`${baseUrl}/${id}`)
  }

export default { 
  getAll: getAll, 
  create: create, 
  update: update,
  remove: remove,
  getByName: getByName
}