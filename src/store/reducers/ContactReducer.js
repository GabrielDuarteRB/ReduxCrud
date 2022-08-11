const INITIAL_STATE = {
    contact: [],
    contactToUpdate: [],
    idPerson: '',
    isLoading: true,
    update: false
}

const contactReducer = (state = INITIAL_STATE, action) => {
    if(action.type === 'SET_CONTACT') {
        return {
            isLoading: true,
            idPerson: action.idPerson
        }
    }
    else if(action.type === 'SET_CREATE') {
        return {
            isLoading: true,
        }
    }
    else if(action.type === 'SET_CONTACT_TO_UPDATE') {
        return {
            isLoading: true,
            contactToUpdate: action.contactToUpdate,
            update: true
        }
    }
    else if(action.type === 'GET_CONTACT') {
        return {
            isLoading: false,
            contact: action.contact,
            contactToUpdate: [],
            update: false
        }
    }
    else if(action.type === 'CREATE_CONTACT') {
        return {
            isLoading: true,
        }
    }
    else if(action.type === 'UPDATE_CONTACT') {
        return {
            isLoading: true,
        }
    }
    return state
}

export default contactReducer