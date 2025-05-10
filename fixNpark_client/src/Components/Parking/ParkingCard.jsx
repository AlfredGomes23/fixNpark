import { useContext } from "react";
import { FaMapLocationDot } from "react-icons/fa6";
import {  MdOutlineContactMail, MdTimer } from "react-icons/md";
import { AuthContext } from "../../Providers/AuthProvider";
import { FcViewDetails } from "react-icons/fc";
import Swal from "sweetalert2";


const ParkingCard = ({ parking, refresh, setRefresh }) => {

    const { user } = useContext(AuthContext);

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
    };

    const onDelete = async (id) => {
        try {
            const res = await fetch(`http://localhost:5000/parking/delete/${id}`, {
                method: "DELETE",
            });
            const data = await res.json();
            if (data.deletedCount > 0) {
                document.getElementById(`modal_card_${id}`).close();
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Parking deleted successfully.",
                    showConfirmButton: false,
                    timer: 1500
                });
                setRefresh(refresh + 1);
            }
        } catch (err) {
            console.error(err);
            Swal.fire({
                icon: "error",
                title: "Delete failed",
                text: err.message || "Something went wrong.",
            });
        }
    };
    const onBook = async (id) => {
        try {
            const res = await fetch(`http://localhost:5000/book-parking/${id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ bookedBy: user?.email }),
            });
            const data = await res.json();
            if (data.success == true) {
                document.getElementById(`modal_card_${id}`).close();
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Parking booked successfully.",
                    showConfirmButton: false,
                    timer: 1500
                });
                setRefresh(refresh + 1);
            }
        } catch (err) {
            console.error(err);
            Swal.fire({
                icon: "error",
                title: "Booking failed",
                text: err.message || "Something went wrong.",
            });
        }
    }
    return (
        <div>
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            <div className="" onClick={() => document.getElementById(`modal_card_${parking._id}`).showModal()}>
                {/* card */}
                <div className="card image-full w-80 border border-yellow-300 h-52">
                    <figure>
                        <img
                            src={`${parking?.photoUrl}`}
                            alt={`${parking?.photoUrl}`} />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title indicator">
                            <FaMapLocationDot />{parking?.area}
                            <div className="badge indicator-item indicator-start text-info badge-outline badge-xs text-xs">৳ {parking?.charge}</div>
                        </h2>
                        <h4 className="flex"><MdTimer className="text-2xl text-yellow-300" /> <span className="text-yellow-300">{formatDate(parking?.availableFrom)}</span></h4>
                        <p className="text-sm flex"><FcViewDetails className="text-2xl" />{parking?.details.length > 45 ? parking?.details.slice(0, 45) + '...' : parking?.details}</p>
                        <ul className="card-actions justify-end text-xs">
                            <li className="badge badge-outline badge-xs">{parking?.wheels}</li>
                            <li className="badge badge-outline badge-xs">{parking?.provider}</li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* card details */}
            <dialog id={`modal_card_${parking._id}`} className="modal">
                <div className="modal-box w-11/12 max-w-5xl h-fit">
                    <div className="grid grid-cols-2 gap-4">
                        <img className="grid-cols-1 w-full rounded-lg"
                            src={`${parking?.photoUrl}`}
                            alt={`${parking?.photoUrl}`} />
                        <div className="grid-cols-1 p-4 space-y-4 text-center">
                            <h1 className="card-title text-3xl indicator"><FaMapLocationDot />{parking?.area}
                                <div className="badge badge-secondary badge-xs indicator-item indicator-start text-xs">৳ {parking?.charge} per 6h</div>

                            </h1>
                            <h2 className="flex gap-2"><MdOutlineContactMail className="text-2xl" /> {parking?.userEmail}</h2>

                            <div className="flex flex-row gap-2 items-center">
                                <MdTimer className="text-2xl text-blue-950" />
                                <h1 className="bg-blue-950 p-1 rounded-full text-yellow-300 font-bold">{formatDate(parking?.availableFrom)}</h1> to
                                <h1 className="bg-blue-950 p-1 rounded-full text-yellow-300 font-bold">{formatDate(parking?.availableTill)}</h1></div>

                            <ul className="text-xs card-actions justify-end">
                                <li className="badge badge-info badge-outline badge-xs">{parking?.wheels}</li>
                                <li className="badge badge-info badge-outline badge-xs">{parking?.provider}</li>
                            </ul>
                            <p className="text-sm flex"><FcViewDetails className="text-2xl" />{parking?.details}</p>

                            <div className="modal-action justify-between">
                                {user?.email === parking?.userEmail ?
                                    <button className="btn btn-error text-yellow-300" onClick={() => onDelete(parking._id)}>Delate</button> : <button button className="px-4 py-2 rounded text-black bg-yellow-100 hover:bg-yellow-400 btn btn-outline border-yellow-300 hover:border-none transition " onClick={() => onBook(parking._id)}>
                                        Book This Parking
                                    </button>}
                                <form method="dialog">
                                    {/* if there is a button, it will close the modal */}
                                    <button className="btn btn-outline btn-error">Close</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </dialog >
        </div >

    );
};

export default ParkingCard;