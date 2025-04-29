import { FaMapLocationDot } from "react-icons/fa6";
import { MdAttachEmail } from "react-icons/md";


const ParkingCard = ({ parking}) => {
    const amount = parking?.subscription == "for Hourly" ? 1500 : 2500;
    console.log(parking?.subscription);

    return (
        <div key={parking._id} className="card bg-slate-200 w-72 outline outline-accent mx-auto">
            <div className="card-body">
                <h2 className="card-title text-primary">
                    <FaMapLocationDot />{parking?.address}
                </h2>
                <h4 className="text-accent flex flex-row items-center gap-3">
                    <MdAttachEmail /><span>{parking?.userEmail}</span>
                </h4>
                <p className="text-xl text-secondary">Tags:</p>
                <ul className="font-semibold space-x-1 space-y-1">
                    <li className="badge badge-primary badge-outline">{parking?.subscription}</li>
                    <li className="badge badge-primary badge-outline">{parking?.parkingType}</li>
                    <li className="badge badge-primary badge-outline">{parking?.wheels}</li>
                    <li className="badge badge-primary badge-outline">{parking?.provider}</li>
                </ul>
                <div className="card-actions justify-end">

                    {/* You can open the modal using document.getElementById('ID').showModal() method */}
                    <button className="btn btn-outline btn-secondary" onClick={() => document.getElementById('parkingBookingModal').showModal()}>Book Parking</button>

                    <dialog id="parkingBookingModal" className="modal">
                        <div className="modal-box flex flex-col justify-center items-center">
                            <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-error text-xl">✕</button>
                            </form>
                            <h3 className="font-bold text-lg">Book:  <span className="text-secondary">{parking?.address}</span></h3>
                            <p className="text-xl text-secondary">Tags:</p>
                            <ul className="font-semibold space-x-1 space-y-1">
                                <li className="badge badge-primary badge-outline">{parking?.subscription}</li>
                                <li className="badge badge-primary badge-outline">{parking?.parkingType}</li>
                                <li className="badge badge-primary badge-outline">{parking?.wheels}</li>
                                <li className="badge badge-primary badge-outline">{parking?.provider}</li>
                            </ul>
                            <button className="btn btn-outline btn-warning ">Confirm Booking</button>
                        </div>
                    </dialog>
                </div>
            </div>
        </div>
    );
};

export default ParkingCard;