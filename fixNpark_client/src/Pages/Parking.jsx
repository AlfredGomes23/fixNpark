
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

    return (
        <div className="mb-6">
            {/* header */}
            <SectionHeader title={"Find Your Perfect Parking Spot"} subTitle={"Easily search and filter through nearby parking options to match your needs and preferences."} color={"primary"}></SectionHeader>

            <section className="grid grid-cols-5">
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

                <div className="col-span-4 space-y-8">
                    {/* Search and Filter  */}
                    <form onSubmit={handleSearch(onSearch)} className="join p-6 flex flex-row card w-full shadow-xl mx-auto bg-violet-300">

                        <input className="input input-bordered join-item" placeholder="Search by Keyword or Area" defaultValue="All" {...searchForm("search")} />

                        <select className="select select-bordered join-item" {...searchForm("subscription")} required>
                            <option>Any Subscription</option>
                            <option>for Hourly</option>
                            <option>for Monthly</option>
                        </select>

                        <select className="select select-bordered join-item" {...searchForm("parkingType")} required>
                            <option>Single and Bulk</option>
                            <option>Single Parking</option>
                            <option>Bulk Parking</option>
                        </select>

                        <select className="select select-bordered join-item" {...searchForm("wheels")} required>
                            <option>Any Number of Wheeler</option>
                            <option>Two Wheeler</option>
                            <option>Four Wheeler</option>
                        </select>

                        <select className="select select-bordered join-item" {...searchForm("provider")} required>
                            <option>All Provider</option>
                            <option>Member</option>
                            <option>Non-Member</option>
                        </select>

                        <button className="btn join-item"><FaSearch className="text-primary text-xl" /></button>
                    </form>

                    {/* search result */}
                    <div className="p-10 grid grid-cols-3 gap-6 card w-full shadow-xl mx-auto bg-violet-200 ">
                        {
                            !parkings.length ? <h1 className="text-error text-center text-3xl col-span-2">No Parking Available now For Your Search Filters. Change Search Filter to Get Available Parkings.</h1> :
                                parkings?.map(parking =>
                                    <ParkingCard parking={parking} refresh={refresh} setRefresh={setRefresh}></ParkingCard>)
                        }
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Parking;