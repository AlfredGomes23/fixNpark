import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Providers/AuthProvider';
import { areas } from '../../../public/areas';

const ListParking = ({ refresh, setRefresh }) => {

    const { user } = useContext(AuthContext);
    const { register: addParkingForm, handleSubmit: handleAddParking, reset: resetAddParking } = useForm();
    function addHours(hours) {
        const now = new Date();
        now.setHours(now.getHours() + hours);
        return now.toTimeString().split(' ')[0]; // returns HH:MM:SS
    }

    const onAdd = async data => {
        data.userEmail = user?.email;
        data.provider = "Non-Members";
        data.date = new Date();
        try {
            await fetch("http://localhost:5000/parking/add", {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(data)
            }).then(r => r.json())
                .then(d => {
                    if (d.insertedId) { //check inserted
                        resetAddParking();
                        document.getElementById('addParkingModal').close();
                        Swal.fire({
                            position: "center",
                            icon: "success",
                            title: "Your Parking Listed Successfully.",
                            showConfirmButton: false,
                            timer: 1500
                        });
                        setRefresh(refresh + 1);
                    }
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
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button className="btn text-blue-950 hover:text-yellow-300 border-none bg-yellow-400 hover:bg-blue-950" onClick={() => document.getElementById('addParkingModal').showModal()}>List Your <br /> Parking Space</button>

            {/* modal here */}
            <dialog id="addParkingModal" className="modal">
                <form className="modal-box text-center bg-yellow-50 " onSubmit={handleAddParking(onAdd)}>
                    <h3 className="font-bold text-2xl text-blue-950">List Your Parking, While it's not in Use.</h3>
                    {/* address */}
                    <legend className="fieldset-legend pt-6 font-bold text-info">Your Parking Location is:</legend>
                    <select
                        className="select select-bordered w-96"
                        {...addParkingForm("area")}
                        required
                    >
                        <option value="" disabled selected hidden>
                            Select Your Parking Area...
                        </option>
                        {areas.map((area, index) => (
                            <option key={index} value={area}>
                                {area}
                            </option>
                        ))}
                    </select>

                    {/* availableFrom */}
                    <legend className="fieldset-legend pt-6 font-bold text-info">Your Parking is Available From: <br /> (*at least 3h later time from listing)</legend>
                    <input
                        type="datetime-local"
                        className="input input-bordered px-2 w-96"
                        defaultValue={(() => {
                            const date = new Date();
                            date.setHours(date.getHours() + 3);
                            return date.toLocaleString('sv-SE').replace(' ', 'T').slice(0, 16); // YYYY-MM-DDTHH:MM
                        })()}
                        min={(() => {
                            const now = new Date();
                            now.setHours(now.getHours() + 3);
                            return now.toLocaleString('sv-SE').replace(' ', 'T').slice(0, 16);
                        })()}
                        {...addParkingForm("availableFrom")}
                    />

                    {/* availableTill */}
                    <legend className="fieldset-legend pt-6 font-bold text-info">And Available Till: (*ensure at least 6h from Available time)</legend>
                    <input
                        type="datetime-local"
                        className="input input-bordered px-2 w-96"
                        defaultValue={(() => {
                            const date = new Date();
                            date.setHours(date.getHours() + 9);
                            return date.toLocaleString('sv-SE').replace(' ', 'T').slice(0, 16); // YYYY-MM-DDTHH:MM
                        })()}
                        min={(() => {
                            const now = new Date();
                            now.setHours(now.getHours() + 9);
                            return now.toLocaleString('sv-SE').replace(' ', 'T').slice(0, 16);
                        })()}
                        {...addParkingForm("availableTill")}
                    />

                    {/* charge & wheels */}
                    <legend className="fieldset-legend pt-6 font-bold text-info">Charges: (*per 6h) and Parking Size: (No. of wheels)</legend>
                    <div className="join px-10 flex flex-row justify-center items-center card">
                        <input type="number" className="input input-bordered w-1/2 px-2 join-item " placeholder="৳ Charges" {...addParkingForm("charge")} />
                        <select className="select select-bordered join-item" {...addParkingForm("wheels")} required>
                            <option>Two Wheeler</option>
                            <option>Three Wheeler</option>
                            <option>Four Wheeler</option>
                        </select>
                    </div>
                    {/* photoUrl */}
                    <legend className="fieldset-legend pt-6 font-bold text-info">Photo url of Parking: </legend>
                    <input type="url" className="input input-bordered px-2  w-96" placeholder="Photo URL..." {...addParkingForm("photoUrl")} required />
                    {/* details */}
                    <legend className="fieldset-legend pt-6 font-bold text-info">Other details of parking: </legend>
                    <textarea className="input input-bordered w-96"placeholder="Parking Details..." {...addParkingForm("details")} required />
                    {/* add btn */}
                    <button className="btn bg-yellow-300 btn-outline mt-8">Add Parking in List</button>
                    {/* modal close btn */}
                    <div className="modal-action" onClick={() => resetAddParking()}>
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-error btn-outline">Cancel</button>
                        </form>
                    </div>
                </form>
            </dialog>
        </div>
    );
};

export default ListParking;