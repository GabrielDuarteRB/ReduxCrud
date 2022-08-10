
import { useEffect } from "react"
import { connect } from "react-redux"
import { useParams } from "react-router-dom"
import { getPersonToUpdate } from "../../store/actions/PeopleActions"
import FormularioPeople from "../../components/Formulario/FormularioPeople"


const PeopleForm = ({person, dispatch}) => {

  const {idPessoa} = useParams()

  const api =  () => {
    getPersonToUpdate(dispatch, idPessoa)
  }

  useEffect(() => {
    api()
  }, [])

  return (
    <FormularioPeople />
  )
}

const mapStateToProps = state => ({
    person: state.peopleReducer.person
})

export default connect(mapStateToProps)(PeopleForm)

