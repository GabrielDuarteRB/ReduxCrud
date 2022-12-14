import { useEffect } from "react";
import { connect } from "react-redux";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Login from "./pages/login/Login";
import People from "./pages/people/People";
import PeopleForm from "./pages/people/PeopleForm";
import PeopleAddress from "./pages/people/PeopleAddress";
import { isAuth } from "./store/actions/AuthAction";
import AddressForm from "./pages/Address/AddressForm";
import PeopleContact from "./pages/people/PeopleContact";
import ContactForm from "./pages/Contact/ContactForm";
import Register from "./pages/register/Register";
import NotFound from "./pages/notFound/NotFound";
import Loading from "./components/Loading/Loading";

const Routers = ({auth, dispatch}) => {

  useEffect(() => {
    isAuth(dispatch);
  }, [])

  if(auth.isLoading && auth.isLogged) {
    return(
      <Loading/>
    )
  }

  return (
    <div>
        <BrowserRouter>
            <Routes>
                {auth.isLogged ? (
                    <>
                        <Route path="/" element={<People/>}/>
                        <Route path="/pessoa" element={<People/>}/>
                        <Route path="/atualizar-pessoa/:idPessoa" element={<PeopleForm/>}/>
                        <Route path="/criar-pessoa" element={<PeopleForm/>}/>
                        <Route path="/endereco-pessoa/:idPessoa" element={<PeopleAddress/>}/>
                        <Route path="/criar-endereco/:idPessoa/" element={<AddressForm/>}/>
                        <Route path="/atualizar-endereco/:idPessoa/:idEndereco" element={<AddressForm/>}/>
                        <Route path="/contato-pessoa/:idPessoa" element={<PeopleContact/>}/>
                        <Route path="/criar-contato/:idPessoa" element={<ContactForm/>}/>
                        <Route path="/atualizar-contato/:idPessoa/:idContato" element={<ContactForm/>}/>
                    </>
                    )
                    :
                    (
                    <>
                        <Route path="/" element={<Login/>}/>
                        <Route path="/cadastro" element={<Register/>}/>
                    </>
                    )
                }
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  )
}

const mapStateToProps = state => ({
    auth: state.authReducer.auth
})
  
export default connect(mapStateToProps)(Routers)