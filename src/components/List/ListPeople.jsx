import { connect } from "react-redux"
import { useNavigate } from "react-router-dom"
import { handleDeletePerson, navigateUpdatePerson } from "../../store/actions/PeopleActions"
import { Itens, List } from "./List.module"
import { FaTrashAlt, FaSyncAlt, FaAddressBook, FaHouseUser  } from "react-icons/fa";

const ListPeople = ({people, dispatch}) => {

  const navigate = useNavigate()  

  return (
    <div>
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
                    <FaAddressBook/>
                    <FaHouseUser />
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