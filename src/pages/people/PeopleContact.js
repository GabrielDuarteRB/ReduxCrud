import { useEffect } from "react"
import { connect } from "react-redux"
import { useParams } from "react-router-dom"
import Aside from "../../components/Aside/Aside"
import ListContact from "../../components/List/ListContact"
import Loading from "../../components/Loading/Loading"
import { getContact } from "../../store/actions/ContactAction"
import { PeopleSection } from "./People.module"

const PeopleContact = ({contact, isLoading, dispatch}) => {

  const {idPessoa} = useParams()

  const setup = async () => {
      await getContact(dispatch, idPessoa)
  } 

  useEffect(() => {
    setup() 
}, [])

  if(isLoading){
    return(
        <Loading/>
    )
  }

  return (
    <PeopleSection>
        <Aside/>
        <ListContact/>
    </PeopleSection>
  )
}

const mapStateToProps = state => ({
    contact: state.contactReducer.contact,
    isLoading: state.contactReducer.isLoading,
})

export default connect(mapStateToProps)(PeopleContact)