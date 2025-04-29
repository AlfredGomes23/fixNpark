import { FaStar, FaRegStar } from 'react-icons/fa'; // Import FontAwesome star icons

const Rating = ({ rating }) => {
    const stars = [];

    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            stars.push(<FaStar key={i} className="text-yellow-500 text-xs" />); // Full star
        } else {
            stars.push(<FaRegStar key={i} className="text-yellow-500 text-xs" />); // Empty star
        }
    }

    return (
        <div className="flex">
            {stars} {/* Render the stars */}
        </div>
    );
};

export default Rating;
