import { useEffect } from "react";
import { connect } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login";
import People from "./pages/people/People";
import PeopleForm from "./pages/people/PeopleForm";
import { isAuth } from "./store/actions/AuthAction";

const Routers = ({auth, dispatch}) => {

  useEffect(() => {
    isAuth(dispatch);
  }, [])

  if(auth.isLoading && auth.isLogged) {
    return(<h1>Loading</h1>)
  }

  return (
    <div>
        <BrowserRouter>
            <Routes>
                {auth.isLogged ? (
                    <>
                        <Route path="/pessoa" element={<People/>}/>
                        <Route path="/atualizar-pessoa/:idPessoa" element={<PeopleForm/>}/>
                        <Route path="/criar-pessoa" element={<PeopleForm/>}/>
                    </>
                    )
                    :
                    (
                    <>
                        <Route path="/" element={<Login/>}/>
                    </>
                    )
                }
                {/* <Route path="*" element={NotFound/>}/> */}
            </Routes>
        </BrowserRouter>
    </div>
  )
}

const mapStateToProps = state => ({
    auth: state.authReducer.auth
})
  
export default connect(mapStateToProps)(Routers)