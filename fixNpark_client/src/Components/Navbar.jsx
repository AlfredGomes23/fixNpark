import { Link, NavLink } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import Swal from 'sweetalert2'

const Navbar = () => {
    const { user, sign_out } = useContext(AuthContext);
    const [userData, setUserData] = useState(null);
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
    useEffect(() => {
        if (user?.email) {
            fetch(`http://localhost:5000/users/${user.email}`)
                .then(res => res.json())
                .then(data => setUserData(data))
                .catch(err => console.error(err));
        }
    }, [user?.email]);
    console.log(user, userData);

    return (
        <div className="z-0">
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
                        <li><NavLink to="/request-parking">Request</NavLink></li>
                        <li><NavLink to="/services">Services</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                    </ul>
                </div>

                {
                    user?.email ?
                        <div>
                            <div className="tooltip" data-tip={userData?.name}>
                                <div className="avatar mr-4">
                                    <div className="ring-primary ring-offset-base-100 w-12 rounded-full ring-2 ring-offset-2">
                                        <img src={userData?.photoUrl} />
                                    </div>
                                </div>
                            </div>

                            <button onClick={handleSignOut} className="btn btn-primary bg-blue-950 text-white hover:bg-white hover:text-yellow-400 px-3 py-2">SignOut</button></div>
                        : <Link to="/signin-signup" className="btn btn-primary bg-blue-950 text-white hover:bg-white hover:text-yellow-400 px-3 py-2">Login</Link>}
            </div>
        </div>
    );
};

export default Navbar;