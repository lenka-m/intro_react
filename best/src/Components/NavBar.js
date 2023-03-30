import {Link} from 'react-router-dom'
import logo from '../img/white_logo.png'
function NavBar() {
  return (
    <div className='navbar'>
      <img src ={logo} style={{maxHeight:'50px'}} />
      <div className='navbarButtons'>
      <Link className='navbarButton' to='/'> Home</Link>
      <Link className='navbarButton' to='/teams'>My Teams</Link>
      </div>
    </div>
  )
}

export default NavBar