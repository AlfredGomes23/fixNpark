import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import Swal from 'sweetalert2'

const Navbar = () => {
    const { user, sign_out } = useContext(AuthContext);

    const handleSignOut = async () => {
        try {
            await sign_out();
            Swal.fire({
                position: "center",
                icon: "warning",
                title: "You are Signed Out.",
                showConfirmButton: false,
                timer: 1500
            });
        } catch (err) {
            Swal.fire({
                position: "center",
                icon: "error",
                title: err,
                showConfirmButton: false,
                timer: 1000
            });
        }
    };

    return (
        <div>
            <div className="bg-blue-950  py-4 ">
                <div className='w-11/12 mx-auto  flex flex-col lg:flex-row justify-between items-center text-white text-sm px-2'>
                    <span className="font-semibold">Welcome to Online Parking Service</span>
                    <div className="flex gap-8 mt-1 lg:mt-0">
                        <span>📌 95, South-Kamlapur, Motijheel, Dhaka, BD</span>
                        <span>✉️ support@fixNpark.com</span>
                    </div>
                </div>
            </div>
            <div className="navbar bg-base-100  w-11/12 mx-auto mt-2 mb-2">
                <div className="navbar-start">
                    <a className="text-3xl font-bold  text-blue-950">fix<span className='text-yellow-400'>N</span>park</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-base font-medium gap-4">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/parkings">Parking</NavLink></li>
                        {/* <li><NavLink to="/">ListParking</NavLink></li>
                        <li><NavLink to="/">Request</NavLink></li> */}
                        <li><NavLink to="/services">Services</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <p>{user?.email && user?.email}</p>
                    {
                        user?.email ?
                            <button onClick={handleSignOut} className="btn btn-primary bg-blue-950 text-white hover:bg-white hover:text-yellow-400 px-3 py-2">SignOut</button>
                            : <Link to="/signin-signup" className="btn btn-primary bg-blue-950 text-white hover:bg-white hover:text-yellow-400 px-3 py-2">Login</Link>}
                </div>
            </div>
        </div>
    );
};

export default Navbar;