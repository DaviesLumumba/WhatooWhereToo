const axios = require('axios')

const fetchSearchContacts = async (username, query) => {
  const res = await axios.get(`/contact/search/${username}/${query}`);
  return res;
}

const fetchSuggestContacts = async (username) => {
  const res = await axios.get(`/contact/suggest/${username}`);
  return res;
}

const fetchContacts = async (username) => {
  const res = await axios.get(`/contact/${username}`);
  return res;
}

const addContact = async (username) => {
    const res = await axios.post(`/contact/${username}`);
    return res;
}

const deleteContact = async (username) => {
    const res = await axios.delete(`/contact/${username}`);
    return res;
}

export { fetchSearchContacts, fetchSuggestContacts, fetchContacts, addContact, deleteContact};
