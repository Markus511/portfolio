import './index.scss';
import { Link, NavLink } from 'react-router-dom';
import kuva from '../../assets/images/Profiilikuva.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faFile, faEnvelope } from '@fortawesome/free-solid-svg-icons'

const LeftSide = () => {
    return(
        <div className='navbar'>
            <Link className='logo' to='/'>
                <img src={kuva} alt='logo' />
            </Link>
            <nav>
                <NavLink exact="true" activeclassname="active" to='/'>
                    <FontAwesomeIcon icon={faUser} color='#4d4d4e' />
                </NavLink>
                <NavLink exact="true" activeclassname="active" className='projects' to='/projects'>
                    <FontAwesomeIcon icon={faFile} color='#4d4d4e' />
                </NavLink>
                <NavLink exact="true" activeclassname="active" className='contact' to='/contact'>
                    <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e' />
                </NavLink>
            </nav>
        </div>

    );
}

export default LeftSide;