import { apiDbc } from "../../api"

export const getPeople = async (dispatch) => {
    try {
        const {data} = await apiDbc.get('/pessoa?pagina=0&tamanhoDasPaginas=200')
        const people = {
            type: 'SET_PEOPLE',
            people: data.content,
        }
        dispatch(people)
    } catch (error) {
        console.log(error)
    }
}

export const handleCreatePerson = async (values, navigate) => {
    try {
        await apiDbc.post('/pessoa', values)
        navigate('/pessoa')
        console.log('funcionou')
    } catch (error) {
        console.log(error)
    }
}

export const getPersonToUpdate = async (dispatch, idPerson) => {
    try {
        const {data} = await apiDbc.get(`/pessoa/lista-completa?idPessoa=${idPerson}`)
        const updatePerson = {
            type: 'UPDATE_PERSON',
            person: data && data[0],
        }
        dispatch(updatePerson)
    } catch (error) {
        console.log(error)
    }
}

export const handleUpdatePerson = async (values, idPerson, navigate) => {
    try {
        await apiDbc.put(`/pessoa/${idPerson}`, values)
        navigate('/pessoa')
    } catch (error) {
        console.log(error)
    }
}

export const handleDeletePerson = async (idPerson, navigate, dispatch) => {
    try {
        await apiDbc.delete(`/pessoa/${idPerson}`)
        await getPeople(dispatch)
    } catch (error) {
        console.log(error)
    }
}

export const navigateUpdatePerson = (dispatch, idPerson, navigate) => {
    navigate(`/atualizar-pessoa/${idPerson}`)
    const setUpdate = {
        type: 'SET_UPDATE'
    }
    dispatch(setUpdate)
}

export const navigateCreatePerson = (dispatch, navigate) => {
    navigate(`/criar-pessoa`)
    const createPerson = {
        type: 'CREATE_PERSON',
        loading: false
    }
    dispatch(createPerson)
}