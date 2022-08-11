import { useEffect } from "react"
import { connect } from "react-redux"
import Aside from "../../components/Aside/Aside"
import ListPeople from "../../components/List/ListPeople"
import { getPeople } from "../../store/actions/PeopleActions"
import { PeopleSection } from "./People.module"
import Loading from '../../components/Loading/Loading'

const People = ({people, loading, dispatch}) => {
  
    const setup = async () => {
      await getPeople(dispatch)
    } 
  
    useEffect(() => {
        setup() 
    }, [])

    if(loading) {
        return(
            <Loading/>
        )
    }

    return (
    <PeopleSection>
        <Aside/>
        <ListPeople />
    </PeopleSection>
    )
}

const mapStateToProps = state => ({
    people: state.peopleReducer.people,
    loading: state.peopleReducer.loading,
})

export default connect(mapStateToProps)(People)