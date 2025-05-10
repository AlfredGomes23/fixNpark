import { FaMapLocationDot } from "react-icons/fa6";
import { MdOutlineContactMail, MdTimer } from "react-icons/md";


const RequestCard = ({ request }) => {

    return (
        <div className="card card-border bg-yellow-50 w-full">
            <div className="card-body">
                <h2 className="card-title"><FaMapLocationDot />{request?.area}</h2>
                <p className="flex gap-1"><MdOutlineContactMail className="text-2xl" /> {request?.requestedBy}</p>
                <p className="flex gap-1"><MdTimer className="text-2xl text-blue-950" /> {request?.needFrom}</p>
                <p className="text-sm text-gray-500">{request?.wheels}</p>
                <div className="card-actions justify-end">
                </div>
            </div>
        </div>
    );
};

export default RequestCard;
