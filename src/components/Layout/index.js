import { Outlet } from 'react-router-dom'
import LeftSide from '../LeftSide';
import './index.scss';
import bg from '../../assets/images/background.jpg';


const Layout = () => {
    return(
        <div className='App'>
            <LeftSide />
            <div className='content'>
            <Outlet />
            </div>
        </div>
        
    );
}

export default Layout;