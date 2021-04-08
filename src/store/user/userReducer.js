import { UserActionTypes } from "./userTypes";

const initialState = {
  user: [],
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case UserActionTypes.SET_USER:
      return {
        ...state,
        user: [...state.user, action.payload],
      };

    case UserActionTypes.ADD_USER:
        const data = state.user;
        return{
            ...state,user:[...data,action.payload]
        }

    default:
    return state;
  }
};
