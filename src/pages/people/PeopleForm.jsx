
import { useEffect } from "react"
import { connect } from "react-redux"
import { useParams } from "react-router-dom"
import { getPersonToUpdate, setPeople } from "../../store/actions/PeopleActions"
import FormularioPeople from "../../components/Formulario/FormularioPeople"


const PeopleForm = ({person, dispatch}) => {

  const {idPessoa} = useParams()
  
  useEffect(() => {
    if(idPessoa){
      getPersonToUpdate(dispatch, idPessoa)
      return
    }
    setPeople(dispatch)    
  }, [])

  return (
    <FormularioPeople />
  )
}

const mapStateToProps = state => ({
    person: state.peopleReducer.person,
})

export default connect(mapStateToProps)(PeopleForm)

