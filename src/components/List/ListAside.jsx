import { FaSignOutAlt, FaAddressCard, FaUserFriends } from "react-icons/fa"
import { connect } from "react-redux"
import { useNavigate } from "react-router-dom"
import { logOut } from "../../store/actions/AuthAction"
import { navigateCreatePerson } from "../../store/actions/PeopleActions"
import { AsideList, ListAsideItens, TextAside } from "./List.module"

const ListAside = ({dispatch, people}) => {

  const navigate = useNavigate()

  return (
    <AsideList>
        <ListAsideItens onClick={() => navigate('/pessoa')}>
            <FaUserFriends/>
            Pessoas
        </ListAsideItens>
        
        <ListAsideItens onClick={() => navigateCreatePerson(dispatch, navigate)}>
            <FaAddressCard/>
            Criar Pessoa
        </ListAsideItens>

        <ListAsideItens onClick={() => logOut(dispatch, navigate)}>
            <TextAside>Sair</TextAside>
            <FaSignOutAlt/>
        </ListAsideItens>
    </AsideList>
  )
}

const mapStateToProps = state => ({
    people: state.peopleReducer.people
})

export default connect(mapStateToProps)(ListAside)
