import { useEffect, useState } from "react";
import PrivateRoute from "../../components/PrivateRoute";

import api from "../../services/api";

const PropertyItem = ({ property }) => {
    const [likes, setLikes] = useState(0);
    const [sellerDetails, setSellerDetails] = useState(null);

    const navigate = useNavigate();
    useEffect(() => {
        const fetchLikes = async () => {
            try {
                const res = await api.get(`/likes/${property.id}`);
                setLikes(res.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchLikes();
    }, [property.id, likes]);

    const likeProperty = async () => {
        try {
            console.log(property.id);
            await api.post(`/likes/${property.id}`);
            setLikes(likes + 1);
            console.log(likes);
        } catch (error) {
            console.error(error);
        }
    };

    const expressInterest = async () => {
        try {
            const res = await api.post(`/interests/${property.id}`);
            console.log(res.data);
            setSellerDetails(res.data);
            console.log(res.data);
        } catch (error) {
            if (error.response.status === 401) {
                window.alert("Please login to express interest");
                navigate("/register");
            }
            navigate("/register");
        }
    };

    return (
        <li className="p-6 bg-white rounded shadow-md">
            <h3 className="mb-2 text-xl font-bold text-primary">
                {property.title ? property.title : "Mansion"}
            </h3>
            <p className="mb-2 text-textSecondary">
                {property.description ? property.description : "Great Place"}
            </p>
            <p className="mb-2 text-textSecondary">
                Location: {property.place}
            </p>
            <p className="mb-2 text-textSecondary">Area: {property.area}</p>
            <p className="mb-2 text-textSecondary">
                Bedrooms: {property.bedrooms}
            </p>
            <p className="mb-2 text-textSecondary">
                Bathrooms: {property.bathrooms}
            </p>
            <p className="mb-2 text-textSecondary">
                Rent Price: {property.rentPrice}
            </p>
            <p className="mb-2 text-textSecondary">
                Nearby Hospitals: {property.nearbyHospitals}
            </p>
            <p className="mb-2 text-textSecondary">
                Nearby Colleges: {property.nearbyColleges}
            </p>

            <img
                src={property.images[0]}
                className="flex justify-between object-cover w-full h-48 mb-4 rounded"
            />
            <div className="flex justify-center gap-4">
            <button
                onClick={likeProperty}
                className="p-2 mb-2 text-white rounded bg-secondary"
            >
                Likes {likes}
            </button>
            <button
                onClick={expressInterest}
                className="p-2 mb-2 text-white rounded bg-accent"
            >
                I&apos;m Interested
            </button>
            </div>
            {sellerDetails && (
                <PrivateRoute>
                    <div className="p-4 mt-4 bg-gray-100 rounded">
                        <h4 className="mb-2 font-bold text-primary">
                            Seller Details
                        </h4>
                        <p className="text-textSecondary">
                            Name: {sellerDetails.name}
                        </p>
                        <p className="text-textSecondary">
                            Email: {sellerDetails.email}
                        </p>
                        <p className="text-textSecondary">
                            Phone: {sellerDetails.phone}
                        </p>
                    </div>
                </PrivateRoute>
            )}
        </li>
    );
};

export default PropertyItem;

import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

PropertyItem.propTypes = {
    property: PropTypes.shape({
        // ... other property validations
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        place: PropTypes.string.isRequired,
        area: PropTypes.number.isRequired,
        bedrooms: PropTypes.number.isRequired,
        bathrooms: PropTypes.number.isRequired,
        rentPrice: PropTypes.number.isRequired,
        nearbyHospitals: PropTypes.string.isRequired,
        nearbyColleges: PropTypes.string.isRequired,
        images: PropTypes.array.isRequired,
    }).isRequired,
};
