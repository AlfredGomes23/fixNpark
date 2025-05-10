import SectionHeader from "../Components/Shared/SectionHeader";
import { useContext, useEffect, useState } from "react";
import Swal from 'sweetalert2'
import ParkingCard from "../Components/Parking/ParkingCard";
import ListParking from "../Components/Parking/ListParking";
import SearchFilter from "../Components/Parking/SearchFilter";


const Parking = () => {
    const [refresh, setRefresh] = useState(0);
    const [parkings, setParkings] = useState([]);
    const [search, setSearch] = useState({
        area: 'All',
        date: "All",
        wheels: 'Any',
        provider: 'All'
    });

    // getting parking data
    useEffect(() => {
        const fetchData = async () => {
            try {
                const queryParams = new URLSearchParams(search).toString();
                const res = await fetch(`http://localhost:5000/search-parkings?${queryParams}`);
                const result = await res.json();

                if (result.success) {
                    setParkings(result.data); // Update state with fetched data
                } else {
                    console.warn("Fallback data loaded due to server error.");
                    setParkings(result.data); // Still set data even in error fallback
                }
            } catch (err) {
                console.error("Failed to fetch parking data:", err);
            }
        };

        fetchData();
    }, [search, refresh]);

    return (
        <div className="bg-fixed bg-[url('../../public/images/parking.png')] bg-cover bg-center bg-no-repeat min-h-[75vh]">
            <section className="justify-center items-center h-fit bg-black/30 pb-10">

                {/* header */}
                <div className="flex flex-row text-center justify-center items-center px-10">
                    <SectionHeader title="Find Parking Space" subTitle="Search for parking space in your Area" color="white" />
                    {/* modal */}
                    <ListParking setRefresh={setRefresh} refresh={refresh}></ListParking>
                </div>

                <div className="grid grid-cols-3">
                    {/* filter */}
                    <SearchFilter setSearch={setSearch} setRefresh={setRefresh} refresh={refresh}></SearchFilter>
                    {/* search result */}
                    <div className="px-2 grid grid-cols-2 col-span-2 gap-6 card  shadow-xl mx-auto ">
                        {
                            !parkings.length ? <h1 className="text-yellow-300 text-center text-3xl col-span-2">No Parking Available now.</h1> :
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