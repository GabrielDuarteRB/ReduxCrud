import { Itens, List } from "./List.module"
import { FaTrashAlt, FaSyncAlt } from "react-icons/fa";
import { connect } from "react-redux";
import {Button} from '../Button/Button'
import { deleteAddress, navigateCreateAddress, navigateUploadAddress } from "../../store/actions/AddressAction";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

const ListAddress = ({address, idPerson, dispatch}) => {

  const {idPessoa} = useParams()
  const navigate = useNavigate()

  return (
    <div>
        <Button
            backgroundColor='green'
            onClick={() => navigateCreateAddress(navigate, dispatch, idPessoa)}
        >
            Cadastrar endereço</Button>
        <List>
            <Itens>Logradouro</Itens>
            <Itens>Numero</Itens>
            <Itens>complemento</Itens>
        </List>
        {address.map((a) => (
            <List key={a.idEndereco}> 
                <Itens>{a.logradouro}</Itens>
                <Itens>{a.numero}</Itens>
                <Itens>{a.complemento}</Itens>
                <div>
                    <FaSyncAlt onClick={() => navigateUploadAddress(navigate, dispatch, idPerson, a.idEndereco)}/>
                    <FaTrashAlt onClick={() => deleteAddress(dispatch, idPerson, a.idEndereco, navigate)} />
                </div>
            </List >
        ))} 
    </div>
  )
}

const mapStateToProps = (state) => ({
    address: state.addressReducer.address,
    idPerson: state.addressReducer.idPerson
})

export default connect(mapStateToProps)(ListAddress)