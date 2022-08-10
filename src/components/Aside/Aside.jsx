import ListAside from '../List/ListAside'
import Logo from '../Logo/Logo'
import  {AsideBar}  from './Aside.styled.js'

const Aside = () => {
  return (
    <AsideBar>
        <div>
            <Logo/>   
            <small>DashBoard Kit</small>
        </div>   
        <ListAside/>
    </AsideBar>
  )
}
export default Aside