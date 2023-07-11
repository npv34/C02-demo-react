import axios from "axios";

const getUserAPI = async () => {
    return await axios.get('https://api.github.com/users');
}

const findUserByUserName = async (username) => {
    return await axios.get('https://api.github.com/users/' + username)
}

export  {getUserAPI, findUserByUserName}
