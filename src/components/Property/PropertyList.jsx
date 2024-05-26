import { useEffect, useState } from 'react';
import api from '../../services/api';
import PropertyItem from '../Property/PropertyItem';

const Properties = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const res = await api.get('/properties');
        setProperties(res.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProperties();
  }, []);

  return (
    <div className="min-h-screen p-8 bg-background">
      <h2 className="mb-6 text-2xl font-bold text-primary">Properties</h2>
      <ul className="grid grid-cols-1 gap-4 space-y-4 md:grid-cols-2 lg:grid-cols-4">
        {properties.map((property) => (
          <PropertyItem key={property.id} property={property} />
        ))}
      </ul>
    </div>
  );
};

export default Properties;
