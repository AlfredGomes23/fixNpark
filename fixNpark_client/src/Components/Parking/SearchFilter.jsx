import React from 'react';
import { useForm } from 'react-hook-form';
import { FaSearch } from "react-icons/fa";
import { areas } from '../../../public/areas';
import { FcClearFilters } from "react-icons/fc";

const SearchFilter = ({ setSearch }) => {
    const { register: searchForm, handleSubmit: handleSearch, reset: resetSearch } = useForm();

    const onSearch = async (data) => {
        setSearch(data); // Update the search state in the parent component
        resetSearch();

        const params = new URLSearchParams(data).toString();

        try {
            const res = await fetch(`/search-parkings?${params}`);
            const result = await res.json();

            if (result.success) {
                console.log("Filtered data:", result.data);
            } else {
                console.warn("Fallback data used due to server error.");
            }
        } catch (err) {
            console.error("Error fetching parkings:", err);
        }
    };

    return (
        <form onSubmit={handleSearch(onSearch)} className="flex flex-col gap-1 shadow-xl mx-auto col-span-1 items-center">
            {/* Search by Area */}
            <legend className="fieldset-legend font-bold text-warning">Select Parking Location:</legend>
            <div className="join w-full">
                <select className="select select-bordered join-item w-full"{...searchForm("area")}>
                    <option value="All" selected> All Areas</option>
                    {areas.map((area, index) => (
                        <option key={index} value={area}> {area} </option>
                    ))}
                </select>
                <button className="btn w-fit bg-yellow-300 hover:bg-blue-950 btn-outline border-none text-blue-950 hover:text-yellow-300 join-item">
                    <FaSearch className=" text-xl" />
                </button>
            </div>
            {/* date */}
            <legend className="fieldset-legend font-bold text-warning">Select the date:</legend>
            <input
                type="date"
                className="input input-bordered px-2 w-full"
                // defaultValue={(() => {
                //     const date = new Date();
                //     date.setDate(date.getDate() + 1); // Add 1 day
                //     return date.toISOString().split('T')[0]; // YYYY-MM-DD
                // })()}
                min={(() => {
                    const now = new Date();
                    return now.toISOString().split('T')[0]; // today's date as min
                })()}
                {...searchForm("date")}
            />
            {/* Wheels */}
            <legend className="fieldset-legend font-bold text-warning">No. of wheels:</legend>
            <select className="select select-bordered w-full" {...searchForm("wheels")}>
                <option selected>Any</option>
                <option>Two Wheeler</option>
                <option>Three Wheeler</option>
                <option>Four Wheeler</option>
            </select>

            {/* Provider */}
            <legend className="fieldset-legend font-bold text-warning">Listed By:</legend>
            <select className="select select-bordered w-full" {...searchForm("provider")}>
                <option selected>All</option>
                <option>Member</option>
                <option>Non-Member</option>
            </select>

            {/* Reset Button */}
            <button
                type="button"
                className="btn btn-outline btn-warning hover:text-blue-950 mt-4"
                onClick={() => {
                    resetSearch();
                    setSearch({});
                }}
            >
                <FcClearFilters className='text-2xl' />Reset Filters
            </button>
        </form>
    );
};

export default SearchFilter;