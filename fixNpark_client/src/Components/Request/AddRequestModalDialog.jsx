import { areas } from "../../../public/areas";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const AddRequestModalDialog = ({ addRequest,
    handleAddRequest,
    resetAddRequest,
    refreshRequested,
    setRefreshRequested,
    setRequestFilters
}) => {
    const { user } = useContext(AuthContext);

    const onAddRequest = async (data) => {
        const requestData = {
            ...data,
            requestedBy: user?.email
        };
        
        try {
            const params = new URLSearchParams(requestData).toString();
            console.log('Request Params:', params);

            const response = await fetch("http://localhost:5000/requested-parkings/add", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(requestData)
            });

            const result = await response.json();

            if (result.insertedId) {
                resetAddRequest();
                document.getElementById('addRequestModal').close();
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Your Parking Request listed Successfully.",
                    showConfirmButton: false,
                    timer: 1500
                });
                setRefreshRequested(refreshRequested + 1);
            } else {
                throw new Error('Request failed to insert.');
            }

        } catch (err) {
            console.error('Error:', err);
            document.getElementById('addRequestModal').close();
            Swal.fire({
                position: "center",
                icon: "error",
                title: err.message || "Something went wrong",
                showConfirmButton: false,
                timer: 1000
            });
        }
    };

    return (
        <dialog id="addRequestModal" className="modal">
            <div className="modal-box">
                <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
                <h3 className="font-bold text-lg">Request for Available Parking Space</h3>

                <form onSubmit={handleAddRequest(onAddRequest)} className="flex flex-col gap-1 shadow-xl mx-auto col-span-1 items-center pb-4">
                    {/* Search by Area */}
                    <legend className="fieldset-legend font-bold text-warning">Select Parking Location:</legend>
                    <select className="select select-bordered w-full" {...addRequest("area")} required>
                        <option value="" selected hidden> All Areas</option>
                        {areas.map((area, index) => (
                            <option key={index} value={area}> {area} </option>
                        ))}
                    </select>
                    {/* date */}
                    <legend className="fieldset-legend font-bold text-warning">Select the date:</legend>
                    <input
                        type="date"
                        className="input input-bordered px-2 w-full"
                        defaultValue={(() => {
                            const date = new Date();
                            date.setDate(date.getDate() + 1); // Add 1 day
                            return date.toISOString().split('T')[0]; // YYYY-MM-DD
                        })()}
                        min={(() => {
                            const now = new Date();
                            return now.toISOString().split('T')[0]; // today's date as min
                        })()}
                        {...addRequest("needFrom")}
                    />
                    {/* Wheels */}
                    <legend className="fieldset-legend font-bold text-warning">No. of wheels:</legend>
                    <select className="select select-bordered w-full" {...addRequest("wheels")} required>
                        <option value={""} selected hidden>Any</option>
                        <option>Two Wheeler</option>
                        <option>Three Wheeler</option>
                        <option>Four Wheeler</option>
                    </select>
                    <button className="btn w-fit bg-yellow-300 hover:bg-blue-950 btn-outline border-none text-blue-950 hover:text-yellow-300 join-item">
                        Make A Request
                    </button>
                </form>
            </div>
        </dialog>
    );
};

export default AddRequestModalDialog;