import { useState } from 'react';
import api from '../../services/api';

const PostProperty = () => {
  const [formData, setFormData] = useState({
    place: '',
    area: '',
    bedrooms: '',
    bathrooms: '',
    rentPrice: '',
    nearbyHospitals: '',
    nearbyColleges: '',
    images: [],
  });

  const { place, area, bedrooms, bathrooms, rentPrice, nearbyHospitals, nearbyColleges, images } = formData;

  const onChange = (e) => {
    let value = e.target.value;

    if (e.target.name === 'images') {
      value = e.target.value.split(',').map(img => img.trim());
    } else if (['area', 'bedrooms', 'bathrooms', 'rentPrice'].includes(e.target.name)) {
      value = parseFloat(e.target.value) || '';
    }

    setFormData({ ...formData, [e.target.name]: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(formData);
      await api.post('/properties', formData);
      // Redirect or clear form after successful submission
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container flex flex-col items-center justify-center md:px-16 lg:px-32 ">
      <h2 className="py-4  text-3xl font-bold text-center text-primary">Post Property</h2>
      <form className="w-full  p-8  grid gap-4 md:grid-cols-2 bg-white rounded-lg shadow-lg" onSubmit={onSubmit}>
        

        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-700">Place</label>
          <input
            type="text"
            name="place"
            value={place}
            onChange={onChange}
            placeholder="Enter the place"
            className="block w-full p-3 transition duration-300 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-700">Area</label>
          <input
            type="number"
            name="area"
            value={area}
            onChange={onChange}
            placeholder="Enter the area"
            className="block w-full p-3 transition duration-300 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-700">Bedrooms</label>
          <input
            type="number"
            name="bedrooms"
            value={bedrooms}
            onChange={onChange}
            placeholder="Enter the number of bedrooms"
            className="block w-full p-3 transition duration-300 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-700">Bathrooms</label>
          <input
            type="number"
            name="bathrooms"
            value={bathrooms}
            onChange={onChange}
            placeholder="Enter the number of bathrooms"
            className="block w-full p-3 transition duration-300 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-700">Rent Price</label>
          <input
            type="number"
            name="rentPrice"
            value={rentPrice}
            onChange={onChange}
            placeholder="Enter the rent price"
            className="block w-full p-3 transition duration-300 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-700">Nearby Hospitals</label>
          <input
            type="text"
            name="nearbyHospitals"
            value={nearbyHospitals}
            onChange={onChange}
            placeholder="Enter nearby hospitals"
            className="block w-full p-3 transition duration-300 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-700">Nearby Colleges</label>
          <input
            type="text"
            name="nearbyColleges"
            value={nearbyColleges}
            onChange={onChange}
            placeholder="Enter nearby colleges"
            className="block w-full p-3 transition duration-300 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-700">Image URLs (comma-separated)</label>
          <input
            type="text"
            name="images"
            value={images.join(', ')}
            onChange={onChange}
            placeholder="Enter image URLs"
            className="block w-full p-3 transition duration-300 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
        </div>

        <button type="submit" className="w-full p-3 text-white transition duration-300 bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">Post Property</button>
      </form>
    </div>
  );
};

export default PostProperty;
