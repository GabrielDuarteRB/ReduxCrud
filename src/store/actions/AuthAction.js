import { apiDbc } from "../../api"

export const handleLogin = async (values, dispatch, navigate) => {
    try {
        const {data} = await apiDbc.post('/auth', values)
        const logado = {
            type: 'SET_LOGIN',
            token: data,
        }
        localStorage.setItem('token', data)
        apiDbc.defaults.headers.common['Authorization'] = data
        dispatch(logado)
        navigate('/pessoa')
    } catch (error) {
        console.log(error)
    }
}

export const handleRegister = async (values, navigate) => {
    console.log(values)
    try {
        await apiDbc.post('/auth/create', values)
        navigate('/')
    } catch (error) {
        console.log(error)
    }
}

export const logOut = (dispatch, navigate) => {
    const logoff = {
        type: 'SET_LOGOUT',
    }
    localStorage.removeItem('token')
    apiDbc.defaults.headers.common['Authorization'] = undefined
    navigate('/')
    dispatch(logoff)
}

export const isAuth = (dispatch) => {
    const token = localStorage.getItem('token')
    if(token) {
        apiDbc.defaults.headers.common['Authorization'] = token
        const logado = {
            type: 'SET_LOGIN',
            token: token,
        }
        dispatch(logado)
    }
}