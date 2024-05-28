import Properties from '../components/Property/PropertyList';
import { useState, useEffect } from 'react';
import api from '../services/api';

function Home() {

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
    console.log("Hi")

    fetchProperties();
  }, []);
  return (
    <div className="text-center">
      <Properties properties={properties}/>
    </div>
  );
}

export default Home;
