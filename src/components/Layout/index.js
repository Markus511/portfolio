import { Outlet } from 'react-router-dom'
import LeftSide from '../LeftSide';
import './index.scss';


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