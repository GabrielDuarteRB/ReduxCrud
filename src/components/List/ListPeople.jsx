import { connect } from "react-redux"
import { useNavigate } from "react-router-dom"
import { handleDeletePerson, navigateCreatePerson, navigateUpdatePerson } from "../../store/actions/PeopleActions"
import { Itens, List } from "./List.module"
import { FaTrashAlt, FaSyncAlt, FaAddressBook, FaHouseUser  } from "react-icons/fa";
import { navigateAddress } from "../../store/actions/AddressAction";
import { navigateContactPerson } from "../../store/actions/ContactAction";
import {Button} from '../Button/Button'

const ListPeople = ({people, dispatch}) => {

  const navigate = useNavigate()  

  return (
    <div>
        <Button
            onClick={() => navigateCreatePerson(dispatch, navigate)}
            backgroundColor='green'
        >Criar pessoa</Button>
        <List>
            <Itens>Nome</Itens>
            <Itens>Email</Itens>
            <Itens>Data</Itens>
        </List>
        {people.map((person) => (
            <List key={person.idPessoa}> 
                <Itens>{person.nome}</Itens>
                <Itens>{person.email}</Itens>
                <Itens>{person.dataNascimento}</Itens>
                <div>
                    <FaSyncAlt  onClick={() => navigateUpdatePerson(person.idPessoa ,navigate)}/>
                    <FaAddressBook onClick={() => navigateContactPerson(dispatch, person.idPessoa, navigate)} />
                    <FaHouseUser onClick={() => navigateAddress(navigate, dispatch, person.idPessoa)}/>
                    <FaTrashAlt  onClick={() => handleDeletePerson(person.idPessoa ,navigate, dispatch)}/>
                </div>
            </List >
        ))} 
    </div>
  )
}

const mapStateToProps = state => ({
    people: state.peopleReducer.people
})

export default connect(mapStateToProps)(ListPeople)