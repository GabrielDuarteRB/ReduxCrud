import { useEffect } from "react"
import { connect } from "react-redux"
import FormAddress from "../../components/Formulario/FormAddress"
import Loading from "../../components/Loading/Loading"
import { getAddressById } from "../../store/actions/AddressAction"

const AddressForm = ({idAddress, loading, dispatch, addressToUpdate}) => {

  const api = async () => {
    await getAddressById(dispatch, idAddress)
  }

  useEffect(() => {
    api()
  }, [])

  if(loading) {
    return(
        <Loading/>
    )
  }

  return (
    <FormAddress/>
  )
}

const mapStateToProps = (state) => ({
  idAddress: state.addressReducer.idAddress,
  addressToUpdate: state.addressReducer.addressToUpdate,
  loading: state.addressReducer.loading
})

export default connect(mapStateToProps)(AddressForm)