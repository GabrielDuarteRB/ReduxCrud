import { combineReducers } from "redux";
import authReducer from "./AuthReducer";
import peopleReducer from "./PeopleReducer";

export default combineReducers ({
    authReducer,
    peopleReducer
})