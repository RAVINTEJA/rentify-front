import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
function EditProperty() {
  const { id } = useParams();
  const [property, setProperty] = useState({});
  // const navigate = useNavigate();

  useEffect(() => {
    // Fetch property details by ID
    // Example:
    // fetch(`/api/properties/${id}`)
    //   .then(response => response.json())
    //   .then(data => setProperty(data));
  }, [id]);

  const handleEditProperty = async (e) => {
    e.preventDefault();
    // Add your property editing logic here
    // Example:
    // const response = await fetch(`/api/properties/${id}`, { method: 'PUT', body: JSON.stringify(property), headers: { 'Content-Type': 'application/json' } });
    // if (response.ok) {
    //   navigate('/dashboard');
    // }
  };

  return (
    <div className="max-w-lg mx-auto bg-white rounded-lg shadow-lg p-8 mt-8">
      <h2 className="text-2xl font-bold text-center mb-6">Edit Property</h2>
      <form onSubmit={handleEditProperty}>
        <div className="mb-4">
          <label className="block text-textPrimary mb-2">Place:</label>
          <input type="text" value={property.place || ''} onChange={(e) => setProperty({ ...property, place: e.target.value })} className="w-full px-3 py-2 border rounded-lg" />
        </div>
        <div className="mb-4">
          <label className="block text-textPrimary mb-2">Area:</label>
          <input type="text" value={property.area || ''} onChange={(e) => setProperty({ ...property, area: e.target.value })} className="w-full px-3 py-2 border rounded-lg" />
        </div>
        <div className="mb-4">
          <label className="block text-textPrimary mb-2">Bedrooms:</label>
          <input type="number" value={property.bedrooms || ''} onChange={(e) => setProperty({ ...property, bedrooms: e.target.value })} className="w-full px-3 py-2 border rounded-lg" />
        </div>
        <div className="mb-4">
          <label className="block text-textPrimary mb-2">Bathrooms:</label>
          <input type="number" value={property.bathrooms || ''} onChange={(e) => setProperty({ ...property, bathrooms: e.target.value })} className="w-full px-3 py-2 border rounded-lg" />
        </div>
        <div className="mb-4">
          <label className="block text-textPrimary mb-2">Nearby Hospitals:</label>
          <input type="text" value={property.nearbyHospitals || ''} onChange={(e) => setProperty({ ...property, nearbyHospitals: e.target.value })} className="w-full px-3 py-2 border rounded-lg" />
        </div>
        <div className="mb-4">
          <label className="block text-textPrimary mb-2">Nearby Colleges:</label>
          <input type="text" value={property.nearbyColleges || ''} onChange={(e) => setProperty({ ...property, nearbyColleges: e.target.value })} className="w-full px-3 py-2 border rounded-lg" />
        </div>
        <div className="mb-4">
          <label className="block text-textPrimary mb-2">Rent Price:</label>
          <input type="number" value={property.rentPrice || ''} onChange={(e) => setProperty({ ...property, rentPrice: e.target.value })} className="w-full px-3 py-2 border rounded-lg" />
        </div>
        <div className="mb-4">
          <label className="block text-textPrimary mb-2">Images:</label>
          <input type="text" value={(property.images || []).join(', ')} onChange={(e) => setProperty({ ...property, images: e.target.value.split(', ') })} className="w-full px-3 py-2 border rounded-lg" />
        </div>
        <button type="submit" className="w-full bg-primary text-white py-2 rounded-lg hover:bg-secondary transition duration-300">Save Changes</button>
      </form>
    </div>
  );
}

export default EditProperty;
