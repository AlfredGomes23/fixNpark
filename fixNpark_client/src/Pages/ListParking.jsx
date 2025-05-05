

const ListParking = ({ plate = "Default Plate" }) => {
    return (
        <div className="col-span-1 flex flex-col px-5 items-center">

            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button className="btn btn-primary" onClick={() => document.getElementById('addParkingModal').showModal()}>List Parking Space</button>


            {/* modal here */}
            <dialog id="addParkingModal" className="modal">
                <form className="modal-box text-center bg-violet-200" onSubmit={handleAddParking(onAdd)}>
                    <h3 className="font-bold text-2xl text-primary">List Your Parking,<span className="text-sm text-secondary"> While, it's Unused.</span></h3>


                    <div className="join p-10 flex flex-row card">

                        <input className="input input-bordered join-item" placeholder="Your Parking Address..." {...addParkingForm("address")} />

                        <select className="select select-bordered join-item" {...addParkingForm("subscription")} required>
                            <option>for Hourly</option>
                            <option>for Monthly</option>
                        </select>
                    </div>

                    <div className="join p-10 flex flex-row card">

                        <select className="select select-bordered join-item" {...addParkingForm("parkingType")} required>
                            <option>Single Parking</option>
                            <option>Bulk Parking</option>
                        </select>

                        <select className="select select-bordered join-item" {...addParkingForm("wheels")} required>
                            <option>Two or Three Wheeler</option>
                            <option>Four or More Wheeler</option>
                        </select>

                    </div>
                    <button className="btn join-item btn-outline btn-primary">Add Parking in List</button>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn">Cancel</button>
                        </form>
                    </div>
                </form>
            </dialog>
        </div>  
    );
};

export default ListParking;