import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-blue-950 text-white pt-20 pb-6 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

                <div>
                    <h3 className="text-xl font-bold mb-3">fixNpark</h3>
                    <p className="text-sm text-gray-300">
                        Reliable, affordable, and convenient parking solutions tailored for your lifestyle and business needs.
                    </p>
                </div>


                <div>
                    <h4 className="font-semibold text-lg mb-3">Quick Links</h4>
                    <ul className="space-y-2 text-sm text-gray-300">
                        <li>
                            <a href="/about" className="hover:text-yellow-400">Home</a>
                        </li>
                        <li>
                            <a href="/parking" className="hover:text-yellow-400">Parking</a>
                        </li>
                        <li>
                            <a href="/services" className="hover:text-yellow-400">Services</a>
                        </li>
                        <li>
                            <a href="/contact" className="hover:text-yellow-400">About Us</a>
                        </li>
                    </ul>
                </div>


                <div className=''>
                    <h4 className="font-semibold text-lg mb-3 space-y-2">Contact Us</h4>
                    <p className="text-sm text-gray-300 ">
                        📌 95, South-Kamlapur, <br/> Motijheel, Dhaka-1217, BD<br />
                        📞 (+88)0 17 000 000 00<br />
                        ✉️ support@fixNpark.com
                    </p>
                </div>
                <div>
                    <h4 className="font-semibold text-lg mb-3">Follow Us</h4>
                    <div className="flex gap-4 mt-2 text-lg">
                        <Link to="https://www.facebook.com/"><FaFacebookF /></Link>
                        <Link to="https://x.com/?lang=en"><FaTwitter /></Link>
                        <Link to="https://www.linkedin.com/"><FaLinkedinIn /></Link>
                    </div>
                </div>
            </div>

            <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm text-gray-400">
                &copy; {new Date().getFullYear()-1} fixNpark. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
