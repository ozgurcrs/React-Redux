import {UserActionTypes} from './userTypes'
import axios from 'axios'

export const getUser = () => {
    return  async (dispatch) => {
      const response = await axios.get("http://localhost:3004/data");
      dispatch(setUser(response.data))
    }
}

export const addUserAsync = (data) => {
    return (dispatch,data) =>{
        dispatch(addUser(data))
    }
}

export const addUser = (payload) =>{
    return{
        type:UserActionTypes.ADD_USER,
        payload
    }
}



export const setUser = (user) => {
    return {
        type:UserActionTypes.SET_USER,
        payload:user
    }
}