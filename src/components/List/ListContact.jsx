import { Itens, List } from "./List.module"
import { FaTrashAlt, FaSyncAlt, } from "react-icons/fa";
import { connect } from "react-redux";
import {Button} from '../Button/Button'
import { deleteContact, navigateCreateContact, setContactToUpdate } from "../../store/actions/ContactAction";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../Loading/Loading";

const ListContact = ({contact, isLoading, dispatch}) => {

  const {idPessoa} = useParams()  
  const navigate = useNavigate()

  if(isLoading){
    return(
        <Loading/>
    )
  }
    
  return (
    <div>
        <Button 
        backgroundColor='green'
        onClick={() => navigateCreateContact(dispatch, idPessoa, navigate)}
        >
            Adicionar contato
        </Button>
        <List>
            <Itens>Número</Itens>
            <Itens>Tipo</Itens>
            <Itens>Descrição</Itens>
        </List>
        {contact.map(c => (
            <List key={c.idContato}>
                <Itens>{c.telefone}</Itens>
                <Itens>{c.tipoContato}</Itens>
                <Itens>{c.descricao}</Itens>
                <div>
                    <FaSyncAlt onClick={() => setContactToUpdate(dispatch, c.idContato, idPessoa, navigate, contact)}/>
                    <FaTrashAlt onClick={() => deleteContact(dispatch, c.idContato, idPessoa)} />
                </div>
            </List>
        ))}
    </div>
  )
}

const mapStateToProps = state => ({
    contact: state.contactReducer.contact,
    isLoading: state.contactReducer.isLoading
})

export default connect(mapStateToProps)(ListContact)