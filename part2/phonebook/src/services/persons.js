import axios from 'axios';
const baseUrl = 'http://localhost:3001/persons'

const readAll = () => {
  return axios
    .get(baseUrl)
    .then(response => response.data);
};

const create = (person) => {
  return axios
    .post(baseUrl, person)
    .then(response => response.data);
};

const del = (id) => {
  return axios
    .delete(`${baseUrl}/${id}`);
}

const services = { readAll, create, del };

export default services;