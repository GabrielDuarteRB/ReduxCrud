import { useEffect } from "react"
import { connect } from "react-redux"
import { useNavigate } from "react-router-dom"
import Aside from "../../components/Aside/Aside"
import ListPeople from "../../components/List/ListPeople"
import { logOut } from "../../store/actions/AuthAction"
import { getPeople, navigateCreatePerson } from "../../store/actions/PeopleActions"
import { PeopleSection } from "./People.module"

const People = ({people, dispatch}) => {
    const navigate = useNavigate()
  
    const setup = async () => {
      await getPeople(dispatch)
    } 
  
    useEffect(() => {
        setup() 
    }, [])

    return (
    <PeopleSection>
        <Aside/>
        <ListPeople />
    </PeopleSection>
    )
}

const mapStateToProps = state => ({
    people: state.peopleReducer.people
})

export default connect(mapStateToProps)(People)