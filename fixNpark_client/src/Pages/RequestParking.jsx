import { useEffect, useState } from "react";

import FilterRequest from "../Components/Request/FilterRequest";
import { useForm } from "react-hook-form";
import RequestList from "../Components/Request/RequestList";


const RequestParking = () => {
    const [refreshRequested, setRefreshRequested] = useState(0);
    const [requestFilters, setRequestFilters] = useState({
        area: 'All',
        date: '',
        wheels: 'Any'
    });
    const { register: searchRequest, handleSubmit: handleSearchRequest, reset: resetSearchRequest } = useForm();
    const { register: addRequest, handleSubmit: handleAddRequest, reset: resetAddRequest } = useForm();
    
    return (
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative ">
            <div className="rounded-xl shadow-xl overflow-hidden bg-blue-50">
                <div className="p-6">
                    <FilterRequest
                        addRequest={addRequest}
                        handleAddRequest={handleAddRequest}
                        resetAddRequest={resetAddRequest}

                        searchRequest={searchRequest}
                        handleSearchRequest={handleSearchRequest}
                        resetSearchRequest={resetSearchRequest}

                        refreshRequested={refreshRequested}
                        setRefreshRequested={setRefreshRequested}

                        requestFilters={requestFilters}
                        setRequestFilters={setRequestFilters}
                    />

                    <div className="mt-8">
                        <RequestList
                            resetSearchRequest={resetSearchRequest}
                            requestFilters={requestFilters}
                        />
                    </div>
                </div>
            </div>
        </main>
    );
};

export default RequestParking;