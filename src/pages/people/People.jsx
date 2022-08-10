import { useEffect } from "react"
import { connect } from "react-redux"
import Aside from "../../components/Aside/Aside"
import ListPeople from "../../components/List/ListPeople"
import { getPeople } from "../../store/actions/PeopleActions"
import { PeopleSection } from "./People.module"

const People = ({people, dispatch}) => {
  
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