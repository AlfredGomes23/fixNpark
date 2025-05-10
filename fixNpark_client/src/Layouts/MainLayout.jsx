import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Shared/Navbar';
import Footer from '../Components/Shared/Footer';

const MainLayout = () => {
    return (
        <div className="max-w-7xl mx-auto relative bg-base-100">
            <Navbar></Navbar>
            <div className='min-h-[50vh]'><Outlet></Outlet></div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;