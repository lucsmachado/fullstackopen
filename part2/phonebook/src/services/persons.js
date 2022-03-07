import axios from 'axios';
const baseUrl = '/api/persons'

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

const update = (id, person) => {
  return axios
    .put(`${baseUrl}/${id}`, person)
    .then(response => response.data);
}

const services = { readAll, create, del, update };

export default services;