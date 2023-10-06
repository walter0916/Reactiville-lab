// Components & Assets
import Logo from '../../assets/react-logo.png'
import { NavLink } from 'react-router-dom'
import Clock from './Clock'
import Wallet from './Wallet'

const Nav = (props) => {
  return (
    <nav className="navigation-bar">
      <NavLink id='logo' to='/'><img src={Logo} alt="" /></NavLink>
      <NavLink to='/burgers'>BURGER SHOP</NavLink>
      <NavLink to='/supermarket'>SUPER MARKET</NavLink>
      <Wallet cash={props.cash}/>
      <Clock setDayTimeHandler={props.setDayTimeHandler}/>
    </nav>
  )
}

export default Nav