
import SectionHeader from "../Components/SectionHeader";
import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FaSearch } from "react-icons/fa";
import Swal from 'sweetalert2'
import { AuthContext } from "../Providers/AuthProvider";
import { MdAttachEmail } from "react-icons/md";
import { FaMapLocationDot } from "react-icons/fa6";
import ParkingCard from "../Components/ParkingCard";


const Parking = () => {
    const [refresh, setRefresh] = useState(0);
    const { user } = useContext(AuthContext);
    const [parkings, setParkings] = useState([]);
    const [search, setSearch] = useState({
        "search": "All",

    });
    const { register: searchForm, handleSubmit: handleSearch, reset: resetSearch } = useForm();
    const { register: addParkingForm, handleSubmit: handleAddParking, reset: resetAddParking } = useForm();

    // getting parking data
    useEffect(() => {
        const queryParams = new URLSearchParams(search).toString();

        fetch(`http://localhost:5000/parkings?${queryParams}`)
            .then(r => r.json()).then(d => setParkings(d.data))

    }, [search, refresh]);

    const onSearch = async data => {
        console.log(data);
        await setSearch(data);
    };
    // console.log(parkings);

    const onAdd = async data => {
        data.userEmail = user?.email;
        data.provider = "Non-Members";
        data.date = new Date();
        console.log(data);
        try {
            await fetch("http://localhost:5000/parking/add", {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(data)
            }).then(r => r.json())
                .then(d => {
                    console.log(d);
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
            console.log(err);
            Swal.fire({
                position: "center",
                icon: "error",
                title: err,
                showConfirmButton: false,
                timer: 1000
            });
        }
    };
    const onDelete = async (id) => {
        try {
            const res = await fetch(`http://localhost:5000/parking/delete/${id}`, {
                method: "DELETE",
            });
            const data = await res.json();
            if (data.deletedCount > 0) {
                document.getElementById(`modal_card_${id}`).close(); // ✅ Close the modal
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Parking deleted successfully.",
                    showConfirmButton: false,
                    timer: 1500
                });
                setRefresh(refresh + 1); // Optional: trigger re-render
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



    return (
        <div className="bg-fixed bg-[url('../../public/images/parking.png')] bg-cover bg-center bg-no-repeat min-h-[75vh]">
            <section className="justify-center items-center h-fit bg-black/30 pb-10">

                {/* header */}
                <div className="flex flex-row text-center justify-center items-center px-10">
                    <SectionHeader title="Find Parking Space" subTitle="Search for parking space in your Area" color="white" />
                    {/* modal */}
                    <div>
                        {/* Open the modal using document.getElementById('ID').showModal() method */}
                        <button className="btn text-blue-950 border-none bg-yellow-400" onClick={() => document.getElementById('addParkingModal').showModal()}>List Your <br /> Parking Space</button>

                        {/* modal here */}
                        <dialog id="addParkingModal" className="modal"> 
                            <form className="modal-box text-center bg-yellow-50 " onSubmit={handleAddParking(onAdd)}>
                                <h3 className="font-bold text-2xl text-blue-950">List Your Parking, While it's not in Use.</h3>

                                <div className="join pt-6 flex flex-row justify-center items-center card">

                                    <input className="input input-bordered join-item" type="text" placeholder="Your Parking Address..." {...addParkingForm("address")} />

                                    <select className="select select-bordered join-item" {...addParkingForm("subscription")} required id="subscription">
                                        <option>for Hours</option>
                                        <option>for Days</option>
                                        <option>for Months</option>
                                    </select>
                                </div>

                                <div className="join p-10 flex flex-row justify-center items-center card">

                                    <input type="number" className="input input-bordered w-1/2 px-2 join-item " placeholder="Time Unit" {...addParkingForm("unit")} />

                                    <select className="select select-bordered join-item" {...addParkingForm("wheels")} required>
                                        <option>Two Wheeler</option>
                                        <option>Three Wheeler or More</option>
                                    </select>
                                </div>

                                <select className="select select-bordered px-2 mb-10 w-96"  {...addParkingForm("parkingQuantity")}  required >
                                    <option>Single Parking</option>
                                    <option disabled>Bulk Parking (Contact Admin to List Bulk Parking)</option>
                                </select>

                                <input type="url" className="input input-bordered px-2 mb-10 w-96" placeholder="Photo URL..." {...addParkingForm("photoUrl")} />

                                <textarea className="input input-bordered p-2 mb-10 w-96" placeholder="Parking Details..." {...addParkingForm("details")} />

                                <button className="btn bg-yellow-300 btn-outline ">Add Parking in List</button>
                                <div className="modal-action">
                                    <form method="dialog">
                                        {/* if there is a button in form, it will close the modal */}
                                        <button className="btn btn-error btn-outline">Cancel</button>
                                    </form>
                                </div>
                            </form>
                        </dialog>
                    </div>
                </div>

                <div className="grid grid-cols-3">
                    {/* filter */}
                    <form onSubmit={handleSearch(onSearch)} className=" flex flex-col gap-6 shadow-xl mx-auto col-span-1  items-center">

                        <div className="join w-full">
                            <input className="input input-bordered join-item" placeholder="Search by Keyword or Area" defaultValue="All" {...searchForm("search")} />

                            <button className="btn w-fit bg-yellow-300 border-none text-blue-950 join-item"><FaSearch className="text-blue-950 text-xl" /></button>
                        </div>

                        <select className="select select-bordered w-full" {...searchForm("subscription")} required>
                            <option>Subscription</option>
                            <option>for Hourly</option>
                            <option>for Monthly</option>
                        </select>

                        <select className="select select-bordered w-full" {...searchForm("parkingType")} required>
                            <option>Single and Bulk</option>
                            <option>Single Parking</option>
                            <option>Bulk Parking</option>
                        </select>

                        <select className="select select-bordered w-full" {...searchForm("wheels")} required>
                            <option>Any Number of Wheeler</option>
                            <option>Two Wheeler</option>
                            <option>Four Wheeler</option>
                        </select>

                        <select className="select select-bordered w-full" {...searchForm("provider")} required>
                            <option>All Provider</option>
                            <option>Member</option>
                            <option>Non-Member</option>
                        </select>
                    </form>
                    {/* search result */}
                    <div className="px-2 grid grid-cols-2 col-span-2 gap-6 card  shadow-xl mx-auto ">
                        {
                            !parkings.length ? <h1 className="text-yellow-300 text-center text-3xl col-span-2">No Parking Available now.</h1> :
                                parkings?.map(parking =>
                                    <ParkingCard parking={parking} refresh={refresh} onDelete={onDelete} setRefresh={setRefresh}></ParkingCard>)
                        }
                    </div>
                </div>

            </section>
        </div>
    );
};

export default Parking;