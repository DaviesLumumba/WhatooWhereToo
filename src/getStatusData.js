const axios = require('axios')

const fetchStatus = async (username) => {
  const res = await axios.get(`/status/${username}`);
  return res;
}

const addStatus = async (username, text, image_url, color) => {
    const res = await axios.post(`/status/`, {username, text, image_url, color});
    return res;
}


export { fetchStatus, addStatus};
