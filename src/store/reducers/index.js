import { combineReducers } from "redux";
import authReducer from "./AuthReducer";
import peopleReducer from "./PeopleReducer";
import addressReducer from "./AddressReducer";
import contactReducer from "./ContactReducer";

export default combineReducers ({
    authReducer,
    peopleReducer,
    addressReducer,
    contactReducer
})