import { apiDbc } from "../../api"

export const getContact = async (dispatch, idPerson) => {
    try {
        const {data} = await apiDbc.get(`contato/${idPerson}`)
        const getContact = {
            type: 'GET_CONTACT',
            contact: data
        }
        dispatch(getContact)
    } catch (error) {
        console.log(error)
    }
}

export const createContact = async (dispatch, idPerson, navigate, values) => {
    try {
        await apiDbc.post(`contato/${idPerson}`, values)
        const createContact = {
            type: 'CREATE_CONTACT'
        }
        dispatch(createContact)
        navigate(`/contato-pessoa/${idPerson}`)
    } catch (error) {
        console.log(error)
    }
}

export const updateContact = async (dispatch, idPerson, idContact, navigate, values) => {
    try {
        await apiDbc.put(`/contato/${idContact}`, values)
        const updateContact = {
            type: 'UPDATE_CONTACT'
        }
        dispatch(updateContact)
        navigate(`/contato-pessoa/${idPerson}`)
    } catch (error) {
        console.log(error)
    }
}

export const deleteContact = async (dispatch, idContact, idPerson) => {
    try {
        await apiDbc.delete(`/contato/${idContact}`)
        getContact(dispatch, idPerson)
    } catch (error) {
        console.log(error)
    }
}

export const setContactToUpdate = async (dispatch, idContact, idPerson, navigate, contact) => {
    const data = contact.filter(c => {
        return parseInt(c.idContato) === parseInt(idContact)
    })
    console.log(data[0])
    const setContactToUpdate = {
        type: 'SET_CONTACT_TO_UPDATE',
        contactToUpdate: data[0]
    }
    dispatch(setContactToUpdate)
    navigate(`/atualizar-contato/${idPerson}/${idContact}`)
}

export const navigateContactPerson = (dispatch, idPerson, navigate) => {
    navigate(`/contato-pessoa/${idPerson}`)
    const contact = {
        type: 'SET_CONTACT',
        idPerson: idPerson
    }
    dispatch(contact)
}

export const navigateCreateContact = (dispatch, idPerson, navigate) => {
    navigate(`/criar-contato/${idPerson}`)
    const createContat = {
        type: 'SET_CREATE',
    }
    dispatch(createContat)
}

