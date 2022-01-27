import axios from "axios";
import {array, element} from "prop-types";

const getTattoosFromQuery = async (query) => {
    query = query.toLowerCase().trim()
    const {data} = await axios.get('https://tattooapi.herokuapp.com/gettattoos')
    console.log(data);
    const res = data.filter(element => element.data.tags.includes(query));
    console.log(res);
    return res
}



const registerUser = async (username, password, email, full_name) => {
    return await axios.post('/account/register', {username, password, email, full_name});
}

const loginUser = async (email, password) => {
    const res = await axios.post('/account/login', {email, password});
    return res;
}

const getUserAttempts = async (email) => {
    const {data} = await axios.get(`/account/attempts/${email}`);
    return data.data != null ? data : {data: 0};
}

const addUserAttempts = async (email) => {
    const res = await axios.post('/account/attempts/', {email});
    return res;
}

const resetUserAttempts = async (email) => {
    const res = await axios.put('/account/attempts/', {email});
    return res;
}

const getUserLockedOutTime = async (email) => {
    const {data} = await axios.get(`/account/lockout/${email}`);
    return data.data != null ? data : {data: 0};
}

const addUserLockedOutTime = async (email) => {
    const res = await axios.post('/account/lockout/', {email});
    return res;
}

const logoutUser = async () => {
    const res = await axios.delete('/account/logout');
    return res;
}

const getUser = async () => {
    const res = await axios.get('/account/user');
    return res;
}

const userProfile = async (username) => {
    const res = await axios.get(`/profile/${username}`);
    return res;
}

const addUserProfile = async (username, password, img, full_name) => {
    return await axios.post('/profile', {username, password, img, full_name});
}

const checkLogin = async () => {
    const res = await axios.get('/account/user');
    console.log(`------------${res}---------`);
    return res;
}

export {
    registerUser,
    loginUser,
    getUserAttempts,
    addUserAttempts,
    resetUserAttempts,
    getUserLockedOutTime,
    addUserLockedOutTime,
    logoutUser,
    getUser,
    userProfile,
    addUserProfile,
    checkLogin,
    getTattoosFromQuery
};
