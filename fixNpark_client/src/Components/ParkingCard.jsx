import { useContext } from "react";
import { FaMapLocationDot } from "react-icons/fa6";
import { MdAttachEmail } from "react-icons/md";
import { AuthContext } from "../Providers/AuthProvider";


const ParkingCard = ({ parking, onDelete }) => {

    const { user } = useContext(AuthContext);
    console.log(parking?.subscription);
    function formatDate(isoString) {
        const date = new Date(isoString);

        const hours24 = date.getHours();
        const minutes = date.getMinutes().toString().padStart(2, '0');
        const isPM = hours24 >= 12;
        const hours12 = hours24 % 12 || 12;
        const ampm = isPM ? 'PM' : 'AM';

        const day = date.getDate();
        const month = date.toLocaleString('en-US', { month: 'short' });
        const year = date.getFullYear().toString().slice(-2);

        return `${hours12}:${minutes}${ampm}, ${day} ${month}-${year}`;
    }
    return (
        <div>
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            <div className="" onClick={() => document.getElementById(`modal_card_${parking._id}`).showModal()}>
                <div className="card image-full w-80 border border-yellow-300">
                    <figure>
                        <img
                            src={`${parking?.photoUrl}`}
                            alt={`${parking?.photoUrl}`} />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            <FaMapLocationDot />{parking?.address}
                            <div className="badge badge-secondary badge-xs text-xs">{formatDate(parking?.date)}</div>
                        </h2>
                        <p>{parking?.details.length > 128 ? parking?.details.slice(0, 20) + '...' : parking?.details}</p>
                        <ul className="card-actions justify-end text-xs">
                            <li className="badge badge-primary badge-outline badge-xs">{parking?.subscription}</li>
                            <li className="badge badge-primary badge-outline badge-xs">{parking?.parkingQuantity}</li>
                            <li className="badge badge-primary badge-outline badge-xs">{parking?.wheels}</li>
                            <li className="badge badge-primary badge-outline badge-xs">{parking?.provider}</li>
                        </ul>
                    </div>
                </div>
            </div>

            <dialog id={`modal_card_${parking._id}`} className="modal">
                <div className="modal-box w-11/12 max-w-5xl h-[100vh]">
                    <div className="grid grid-cols-2">
                        <img className="grid-cols-1"
                            src={`${parking?.photoUrl}`}
                            alt={`${parking?.photoUrl}`} />
                        <div className="grid-cols-1 p-4 space-y-4">
                            <h1 className="card-title">{parking?.address}
                                <div className="badge badge-secondary badge-xs text-xs">{formatDate(parking?.date)}</div>
                            </h1>
                            <h2>Listed By: {parking?.userEmail}</h2>
                            <ul className="card-actions justify-end text-xs">
                                <li className="badge badge-primary badge-outline badge-xs">{parking?.subscription}</li>
                                <li className="badge badge-primary badge-outline badge-xs">{parking?.parkingQuantity}</li>
                                <li className="badge badge-primary badge-outline badge-xs">{parking?.wheels}</li>
                                <li className="badge badge-primary badge-outline badge-xs">{parking?.provider}</li>
                            </ul>
                            <p className="text-sm">{parking?.details}</p>
                        </div>
                    </div>
                    <div className="modal-action justify-between">
                        {user?.email === parking?.userEmail ? 
                        <button className="btn btn-error text-yellow-300" onClick={() => onDelete(parking._id)}>Delate</button>:<button></button>}
                        <form method="dialog">
                            {/* if there is a button, it will close the modal */}
                            <button className="btn btn-outline btn-error">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>

    );
};

export default ParkingCard;