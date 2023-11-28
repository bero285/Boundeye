import './Navbar.css'
import 'w3-css/w3.css';
import { FcElectricalSensor } from "react-icons/fc";

const Navbar = () => {
  return (
    <nav>
        {/* logo and name */}
        <div className='nav-wrap'>
            <div className='logo'>
                <FcElectricalSensor className='w3-xxxlarge logo'></FcElectricalSensor>
                <h3 className='logo-name'>StartUp</h3>
            </div>

            {/* links to other pages */}
            <div className='links'>
                <ul className='list'>
                    <li className='list-item'><button className='btn'>ჩვენს შესახებ</button></li>
                    <li className='list-item'><button className='btn'>დარეგისტრირდი</button></li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar