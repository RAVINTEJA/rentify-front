import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import api from "../../services/api";
import Modal from "../Utils/Modal";

const PropertyItem = ({ property }) => {
    const [likes, setLikes] = useState(property._count ? property._count.likes : 0);
    const [isLiked, setIsLiked] = useState(false);
    const [isInterested, setIsInterested] = useState(false);
    const [sellerDetails, setSellerDetails] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const navigate = useNavigate();

    const likeProperty = async () => {
        try {
            if (!isLiked) {
                await api.post(`/likes/${property.id}`);
                setLikes(likes + 1);
                setIsLiked(true);
            } else {
                await api.delete(`/likes/${property.id}`);
                setLikes(likes - 1);
                setIsLiked(false);
            }
        } catch (error) {
            console.error(error);
        }
    };

    const expressInterest = async () => {
        try {
            const res = await api.post(`/interests/${property.id}`);
            console.log(res.data);
            setSellerDetails(res.data);
            setIsInterested(true);
            setIsModalOpen(true); // Open the modal when interest is expressed
        } catch (error) {
            if (error.response && error.response.status === 401) {
                window.alert("Please login to express interest");
                navigate("/register");
            } else {
                console.error(error);
            }
        }
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <li className="p-6 bg-white rounded-lg shadow-lg border border-gray-300 flex flex-col md:flex-row">
            <div className="relative w-full md:w-1/3">
                <img
                    src={property.images[0]}
                    className="object-cover w-full h-48 mb-4 rounded-lg md:h-full"
                />
                <div className="absolute top-4 left-4 bg-amber-400 text-white px-2 py-1 rounded-md">
                    Preferred By Bachelors
                </div>
                <div className="absolute bottom-4 left-4 bg-gray-800 text-white px-2 py-1 rounded-md">
                    5 People Viewing Now
                </div>
            </div>
            <div className="flex-1 p-4">
                <div className="flex justify-between items-start mb-2">
                    <div>
                        <h3 className="mb-1 text-2xl font-bold text-primary">
                            {property.title ? property.title : "Mansion"}
                        </h3>
                        <p className="text-sm text-gray-500">{property.place}</p>
                    </div>
                    <div className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full">
                        Male
                    </div>
                </div>
                <div className="flex gap-2 mb-2">
                    <span className="bg-teal-100 text-teal-700 px-2 py-1 rounded-full">Attached Balcony</span>
                    <span className="bg-teal-100 text-teal-700 px-2 py-1 rounded-full">Attached Washroom</span>
                </div>
                <div className="flex gap-2 mb-4">
                    <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full">Single</span>
                    <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full">Double</span>
                    <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full">Triple</span>
                    <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full">+2</span>
                </div>
                <p className="mb-2 text-textSecondary">Area: {property.area}</p>
                <p className="mb-2 text-textSecondary">Bedrooms: {property.bedrooms}</p>
                <p className="mb-2 text-textSecondary">Bathrooms: {property.bathrooms}</p>
                <p className="mb-2 text-textSecondary">Nearby Hospitals: {property.nearbyHospitals}</p>
                <p className="mb-2 text-textSecondary">Nearby Colleges: {property.nearbyColleges}</p>
                <div className="mt-4">
                    <p className="text-xl font-bold text-primary">
                        Starts from ₹{property.rentPrice}/mo*
                    </p>
                </div>
                <div className="flex justify-between mt-4">
                    <button
                        onClick={likeProperty}
                        className={`px-4 py-2 rounded-lg border border-primary transition ${
                            isLiked ? 'bg-secondary text-white' : 'bg-white text-secondary'
                        } hover:bg-secondary hover:text-white`}
                    >
                        Likes {likes}
                    </button>
                    <button
                        onClick={expressInterest}
                        className={`px-4 py-2 rounded-lg border border-primary transition ${
                            isInterested ? 'bg-accent text-white' : 'bg-white text-accent'
                        } hover:bg-accent hover:text-white`}
                    >
                        I&apos;m Interested
                    </button>
                </div>
                <Modal isOpen={isModalOpen} onClose={closeModal}>
                    <div className="p-4">
                        <h4 className="mb-2 font-bold text-primary">Seller Details</h4>
                        {sellerDetails ? (
                            <>
                                <p className="text-textSecondary">Name: {sellerDetails.name}</p>
                                <p className="text-textSecondary">Email: {sellerDetails.email}</p>
                                <p className="text-textSecondary">Phone: {sellerDetails.phone}</p>
                            </>
                        ) : (
                            <p className="text-textSecondary">Loading...</p>
                        )}
                    </div>
                </Modal>
            </div>
        </li>
    );
};

PropertyItem.propTypes = {
    property: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string,
        place: PropTypes.string.isRequired,
        area: PropTypes.number.isRequired,
        bedrooms: PropTypes.number.isRequired,
        bathrooms: PropTypes.number.isRequired,
        rentPrice: PropTypes.number.isRequired,
        nearbyHospitals: PropTypes.string.isRequired,
        nearbyColleges: PropTypes.string.isRequired,
        images: PropTypes.array.isRequired,
        _count: PropTypes.shape({
            likes: PropTypes.number,
        }),
    }).isRequired,
};

export default PropertyItem;
