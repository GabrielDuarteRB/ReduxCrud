import { useFormik } from "formik"
import { useNavigate } from "react-router-dom"
import FormRegister from "../../components/Formulario/FormRegister"
import { handleRegister } from "../../store/actions/AuthAction"

const Register = () => {

  const navigate = useNavigate()

  const formik = useFormik({
    initialValues: {
        login: '',
        senha: ''
    },
    onSubmit: values => handleRegister(values, navigate)
  })

  return (
    <FormRegister formik={formik}/>
  )
}
export default Register