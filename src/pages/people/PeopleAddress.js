import { useEffect } from "react"
import { connect } from "react-redux"
import { useParams } from "react-router-dom"
import Aside from "../../components/Aside/Aside"
import ListAddress from "../../components/List/ListAddress"
import { getAddress } from "../../store/actions/AddressAction"
import { PeopleSection } from "./People.module"

const PeopleAddress = ({address, dispatch}) => {

  const {idPessoa} = useParams()

  const setup = async () => {
    await getAddress(dispatch, idPessoa)
  } 

  useEffect(() => {
      setup() 
  }, [])

  return (
    <PeopleSection>
      <Aside/>
      <ListAddress/>
    </PeopleSection>
  )
}

const mapStateToProps = state => ({
  address: state.addressReducer.address
})

export default connect(mapStateToProps)(PeopleAddress)
