const INITIAL_STATE = {
    people: [],
    person: {},
    loading: true,
    isUpdate: false
}

const peopleReducer = (state = INITIAL_STATE, action) => {
    if(action.type === 'SET_PEOPLE') {
        return {
            ...state,
            people: action.people,
            loading: true,
            isUpdate: false
        } 
    }
    else if(action.type === 'UPDATE_PERSON') {
        return {
            ...state,
            person: action.person,
            loading: false,
            isUpdate: true
        } 
    }
    else if(action.type === 'CREATE_PERSON') {
        return {
            ...state,
            person: action.person,
            loading: false,
            isUpdate: false
        } 
    }
    return state
}

export default peopleReducer