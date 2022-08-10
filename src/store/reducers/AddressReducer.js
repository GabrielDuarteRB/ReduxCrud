const INITIAL_STATE = {
    address: [],
    addressToUpdate: [],
    loading: true,
    idPerson: '',
    idAddress: '',
    isUpdate: false
}

const addressReducer = (state = INITIAL_STATE, action) => {
    if(action.type === 'GET_ADDRESS'){
        return { 
            ...state,
            address: action.address,
            idPerson: action.idPerson,
            loading: false,
        }
    }
    else if(action.type === 'GET_ADDRESS_TO_UPDATE'){
        return { 
            ...state,
            addressToUpdate: action.addressToUpdate,
            loading: false,
        }
    }
    else if(action.type === 'CREATE_ADDRESS'){
        return { 
            ...state,
            loading: true,
            addressToUpdate: [],
            idAddress: '',
            isUpdate: false
        }
    }
    else if(action.type === 'SET_ADDRESS'){
        return { 
            ...state,
            loading: true,
        }
    }
    else if(action.type === 'SET_UPDATE_ADDRESS'){
        return { 
            ...state,
            idAddress: action.idAddress,
            loading: true,
            isUpdate: true,
        }
    }
    return state
}

export default addressReducer