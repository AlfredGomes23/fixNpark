import React, { useState } from 'react';
import { Search, MapPin, Calendar, Truck, User } from 'lucide-react';
import { areas } from '../../../public/areas.js';
import { useForm } from 'react-hook-form';
import AddRequestModalDialog from './AddRequestModalDialog.jsx';

const FilterRequest = ({ addRequest,
  handleAddRequest,
  resetAddRequest,
  searchRequest,
  handleSearchRequest,
  resetSearchRequest,
  refreshRequested,
  setRefreshRequested,
  requestFilters,
  setRequestFilters }) => {

  const onRequestSearch = async (data) => {
    setRequestFilters(data); // Update the search state in the parent component
    resetSearchRequest();

    const params = new URLSearchParams(data).toString();
    console.log(params);
    // try {
    //   const res = await fetch(`/search-parkings?${params}`);
    //   const result = await res.json();

    //   if (result.success) {
    //     console.log("Filtered data:", result.data);
    //   } else {
    //     console.warn("Fallback data used due to server error.");
    //   }
    // } catch (err) {
    //   console.error("Error fetching parkings:", err);
    // }
  };

  return (
    <div className="bg-base-100 p-5 rounded-lg">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold text-gray-800">Request for Parking</h2>
        {/* You can open the modal using document.getElementById('ID').showModal() method */}
        <button onClick={() => document.getElementById('addRequestModal').showModal()} className="btn btn-soft btn-info text-white">Request</button>

        <AddRequestModalDialog addRequest={addRequest}
          handleAddRequest={handleAddRequest}
          resetAddRequest={resetAddRequest}
          refreshRequested={refreshRequested}
          setRefreshRequested={setRefreshRequested}
          setRequestFilters={setRequestFilters}></AddRequestModalDialog>
      </div>

      <form onSubmit={handleSearchRequest(onRequestSearch)} className="space-y-4">
        <div className="flex flex-row justify-around items-center">
          <div onClick={() => { resetSearchRequest(); }} className="btn btn-soft btn-warning">Reset</div>

          <div className="relative">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <MapPin className="h-5 w-5 text-gray-400" />
              </div>
              <select className="block w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"{...searchRequest("area")}>
                <option value="All" selected> All Areas</option>
                {areas.map((area, index) => (
                  <option key={index} value={area}> {area} </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Calendar className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="date" className="block w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                min={(() => {
                  const now = new Date();
                  return now.toISOString().split('T')[0]; // today's date as min
                })()}
                {...searchRequest("date")}
              />
            </div>
          </div>

          <div>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Truck className="h-5 w-5 text-gray-400" />
              </div>

              <select className="block w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" {...searchRequest("wheels")}>
                <option selected>Any</option>
                <option>Two Wheeler</option>
                <option>Three Wheeler</option>
                <option>Four Wheeler</option>
              </select>
            </div>
          </div>

          <button
            type="submit"
            className="inline-flex items-center px-6 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            <Search className="mr-2 h-4 w-4" />
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default FilterRequest;