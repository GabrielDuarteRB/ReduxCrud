import { apiDbc } from "../../api"

export const getAddress = async (dispatch, idPerson) => {
    try {
        const {data} = await apiDbc.get(`/pessoa/lista-completa?idPessoa=${idPerson}`)
        const getAddress = {
            type: 'GET_ADDRESS',
            idPerson: idPerson,
            address: data[0].enderecos,
            loading: false,
        }
        dispatch(getAddress)
    } catch (error) {
        console.log(error)
    }
}

export const getAddressById = async (dispatch, idAddress) => {
    try {
        const {data} = await apiDbc.get(`/endereco/${idAddress}`)
        const getAddress = {
            type: 'GET_ADDRESS_TO_UPDATE',
            addressToUpdate: data
        }
        dispatch(getAddress)
    } catch (error) {
        console.log(error)
    }
}

export const createAddress = async (dispatch, idPerson, values, navigate) => {
    try {
        await apiDbc.post(`endereco/{idPessoa}?idPessoa=${idPerson}`, values)
        const createAddress = {
            type: 'CREATE_ADDRESS',
        }
        dispatch(createAddress)
        navigate(`/endereco-pessoa/${idPerson}`)
    } catch (error) {
        console.log(error)
    }
}

export const updateAddress = async (dispatch, idPerson, idAddress, values, navigate) => {
    try {
        await apiDbc.put(`/endereco/${idAddress}`, values)
        const update = {
            type: 'CREATE_ADDRESS',
        }
        dispatch(update)
        navigate(`/endereco-pessoa/${idPerson}`)
    } catch (error) {
        console.log(error)
    }
}

export const deleteAddress = async (dispatch, idPerson, idAddress, navigate) => {
    try {
        await apiDbc.delete(`/endereco/${idAddress}`)
        getAddress(dispatch, idPerson)
    } catch (error) {
        console.log(error)
    }
}

export const navigateAddress = (navigate, dispatch, idPerson) => {
    navigate(`/endereco-pessoa/${idPerson}`)
    const getAddress = {
        type: 'SET_ADDRESS',
        loading: true,
    }
    dispatch(getAddress)
}

export const navigateCreateAddress = (navigate, dispatch, idPerson) => {
    navigate(`/criar-endereco/${idPerson}`)
    const createAddress = {
        type: 'SET_ADDRESS',
        loading: false,
    }
    dispatch(createAddress)
}

export const navigateUploadAddress = (navigate, dispatch, idPerson, idAddress) => {
    navigate(`/atualizar-endereco/${idPerson}/${idAddress}`)
    const setToUploadAddress = {
        type: 'SET_UPDATE_ADDRESS',
        idAddress: idAddress,
        loading: false,
    }
    dispatch(setToUploadAddress)
}