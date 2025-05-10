import React, { useState, useEffect } from 'react';
import { MapPin } from 'lucide-react';
import RequestCard from './RequestCard';

const RequestList = ({ requestFilters, resetSearchRequest, refreshRequested }) => {
    const [requests, setRequests] = useState([]);

    useEffect(() => {
        const requestedParkings = async () => {
            try {
                const queryParams = new URLSearchParams(requestFilters).toString();
                const res = await fetch(`http://localhost:5000/requested-parkings?${queryParams}`);
                const result = await res.json();
                console.log(result.data);

                if (result.success) {
                    setRequests(result.data); // Populate with filtered data
                } else {
                    console.warn("Fallback data loaded due to server error.");
                    setRequests(result.data); // Still use fallback data
                }
            } catch (err) {
                console.error("Failed to fetch requested parkings:", err);
            }
        };
        requestedParkings();
    }, [requestFilters, refreshRequested]);

    console.log(requests);

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {requests.length <= 0 ? (
                    <div className="text-center py-12 mx-auto col-span-3">
                        <div className="inline-flex justify-center items-center w-24 h-24 rounded-full bg-yellow-100 mb-6">
                            <MapPin className="h-12 w-12 text-yellow-500" />
                        </div>
                        <h3 className="text-lg font-medium text-gray-900">No parking Request found</h3>
                        <p className="mt-2 text-sm text-gray-500">Try adjusting your filters or search criteria</p>
                        <button onClick={() => resetSearchRequest()} className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700">Reset Filters</button>
                    </div>
                ) :

                    requests.map(request => (
                        <RequestCard key={request._id} request={request} />
                    ))}
            </div>
        </div>
    );
};

export default RequestList;
