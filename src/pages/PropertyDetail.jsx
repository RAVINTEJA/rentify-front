import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import api from '../services/api';
function PropertyDetail() {
  const { id } = useParams();
  const [property, setProperty] = useState({});

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const res = await api.get(`/properties/${id}`);
        console.log(property)
        setProperty(res.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProperties();
  }, [id,property]);
  

  return (
    <div className="max-w-4xl p-8 mx-auto mt-8 bg-white rounded-lg shadow-lg">
      <h2 className="mb-4 text-2xl font-bold">Property Detail</h2>
      <p className="text-lg text-textSecondary">Details for property ID: {id}</p>
      {/* Add more property details here */}
      {property && (
        <div className="mt-4">
          <p className="text-lg font-semibold">Price: {property.rentPrice}</p>
          <p className="text-lg font-semibold">Location: {property.area}</p>
        </div>
      )}
      {console.log(property)}
      {
        property && property.images && property.images.map((image, index) => (
          <img key={index} src={image} alt={`Property ${index}`} className="object-cover w-full h-64 mt-4" />
        ))
      }
    </div>
  );
}

export default PropertyDetail;
