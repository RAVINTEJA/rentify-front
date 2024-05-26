import { useState } from 'react';
import api from '../../services/api';

const PostProperty = () => {
  const [formData, setFormData] = useState({
    // title: '',
    // description: '',
    place: '',
    area: 0,
    bedrooms: 0,
    bathrooms: 0,
    rentPrice: 0,
    nearbyHospitals: '',
    nearbyColleges: '',
    images: [],
  });

  const { place, area, bedrooms, bathrooms, rentPrice, nearbyHospitals, nearbyColleges, images } = formData;

  const onChange = (e) => {
    let value = e.target.value;
  
    if (e.target.name === 'images') {
      value = e.target.value.split(',');
    } else if (['area', 'bedrooms', 'bathrooms', 'rentPrice'].includes(e.target.name)) {
      value = parseFloat(e.target.value);
    }
  
    setFormData({ ...formData, [e.target.name]: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(formData)
      await api.post('/properties', formData);
      // Redirect or clear form after successful submission
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-background">
      <form className="w-full max-w-md p-8 bg-white rounded shadow-md" onSubmit={onSubmit}>
        <h2 className="mb-6 text-2xl font-bold text-primary">Post Property</h2>
        {/* <input
          type="text"
          name="title"
          value={title}
          onChange={onChange}
          placeholder="Title"
          className="block w-full p-3 mb-4 border border-gray-300 rounded"
          required
        />
        <textarea
          name="description"
          value={description}
          onChange={onChange}
          placeholder="Description"
          className="block w-full p-3 mb-4 border border-gray-300 rounded"
          required
        ></textarea> */}
        <input
          type="text"
          name="place"
          value={place}
          onChange={onChange}
          placeholder="Place"
          className="block w-full p-3 mb-4 border border-gray-300 rounded"
          required
        />
        <input
          type="number"
          name="area"
          value={area}
          onChange={onChange}
          placeholder="Area"
          className="block w-full p-3 mb-4 border border-gray-300 rounded"
          required
        />
        <input
          type="number"
          name="bedrooms"
          value={bedrooms}
          onChange={onChange}
          placeholder="Bedrooms"
          className="block w-full p-3 mb-4 border border-gray-300 rounded"
          required
        />
        <input
          type="number"
          name="bathrooms"
          value={bathrooms}
          onChange={onChange}
          placeholder="Bathrooms"
          className="block w-full p-3 mb-4 border border-gray-300 rounded"
          required
        />
        <input
          type="number"
          name="rentPrice"
          value={rentPrice}
          onChange={onChange}
          placeholder="Rent Price"
          className="block w-full p-3 mb-4 border border-gray-300 rounded"
          required
        />
        <input
          type="text"
          name="nearbyHospitals"
          value={nearbyHospitals}
          onChange={onChange}
          placeholder="Nearby Hospitals"
          className="block w-full p-3 mb-4 border border-gray-300 rounded"
          required
        />
        <input
          type="text"
          name="nearbyColleges"
          value={nearbyColleges}
          onChange={onChange}
          placeholder="Nearby Colleges"
          className="block w-full p-3 mb-4 border border-gray-300 rounded"
          required
        />
        <input
          type="text"
          name="images"
          value={images}
          onChange={onChange}
          placeholder="Image URLs (comma-separated)"
          className="block w-full p-3 mb-4 border border-gray-300 rounded"
          required
        />
        <button type="submit" className="w-full p-3 text-white rounded bg-primary">Post Property</button>
      </form>
    </div>
  );
};

export default PostProperty;
