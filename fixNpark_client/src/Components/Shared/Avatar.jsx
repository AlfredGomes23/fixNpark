import { useEffect, useState } from 'react';
import { FaMapLocationDot } from 'react-icons/fa6';
import { MdTimer } from 'react-icons/md';

const Avatar = ({ userData }) => {
    const [bookedParkings, setBookings] = useState([]);
    useEffect(() => {
        if (userData?.email) {
            fetch(`http://localhost:5000/booked/${userData.email}`)
                .then(res => res.json())
                .then(data => {
                    setBookings(data.data);
                })
                .catch(err => console.error(err));
        }
    }, [userData?.email]);
    return (
        <div>
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            <div className="tooltip" data-tip={userData?.name} onClick={() => document.getElementById('booked_parkings').showModal()}>
                <div className="avatar mr-4">
                    <div className="ring-primary ring-offset-base-100 w-12 rounded-full ring-2 ring-offset-2">
                        <img src={userData?.photoUrl} />
                    </div>
                </div>
            </div>
            <dialog id="booked_parkings" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    {/* booked parkings list */}
                    <p className="p-4 pb-2 text-xl font-bold text-blue-950 opacity-60 tracking-wide">Booked Parkings List</p>
                    <ul className="list bg-base-100 rounded-box shadow-md">
                    {bookedParkings.length > 0 ? bookedParkings.map((parking, index) => (
                        <li key={index} className="p-2 border-b border-gray-200 hover:bg-gray-100">
                            <div className="flex justify-between items-center">
                                <div className='flex gap-4 items-center'>
                                    <h3 className="text-sm font-semibold flex gap-2 items-center w-40"><FaMapLocationDot className='text-xl'/> {parking?.area}</h3>
                                    <p className="text-xs text-gray-500 flex gap-2 items-center"><MdTimer className="text-xl text-blue-950" />{new Date(parking?.bookedAt).toLocaleString()}</p>
                                </div>
                                <span className="text-xs text-blue-500">৳ {parking?.charge}</span>
                            </div>
                        </li>
                    )) : (
                        <li className="p-4 text-center">No bookings found</li>
                    )}
                    </ul>
                </div>
            </dialog>
        </div>
    );
};

export default Avatar;