import { useFormik } from 'formik'
import { connect } from 'react-redux'
import { useNavigate } from "react-router-dom"
import FormLogin from '../../components/Formulario/FormLogin'
import { handleLogin } from '../../store/actions/AuthAction'

const Login = ({auth, dispatch}) => {
    const navigate = useNavigate()

    const formik = useFormik({
      initialValues: {
          login: '',
          senha: ''
      },
      onSubmit: values => handleLogin(values, dispatch, navigate)
    })
      
    return (
        <FormLogin formik={formik}/>
    )
}


const mapStateToProps = state => ({
    auth: state.authReducer.auth
})

export default connect(mapStateToProps)(Login)