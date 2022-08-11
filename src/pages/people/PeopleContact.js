import { useEffect } from "react"
import { connect } from "react-redux"
import { useParams } from "react-router-dom"
import Aside from "../../components/Aside/Aside"
import ListContact from "../../components/List/ListContact"
import { getContact } from "../../store/actions/ContactAction"
import { PeopleSection } from "./People.module"

const PeopleContact = ({contact, dispatch}) => {

  const {idPessoa} = useParams()

  const setup = async () => {
      await getContact(dispatch, idPessoa)
  } 
  
  useEffect(() => {
      setup() 
  }, [])

  return (
    <PeopleSection>
        <Aside/>
        <ListContact/>
    </PeopleSection>
  )
}

const mapStateToProps = state => ({
    contact: state.contactReducer.contact
})

export default connect(mapStateToProps)(PeopleContact)