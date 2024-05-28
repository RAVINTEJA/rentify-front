import PropertyList from "../Property/PropertyList";
import AddProperty from "../Property/AddProperty";
import PrivateRoute from "../PrivateRoute";
import api from "../../services/api";
import { useEffect, useState } from "react";

function Dashboard() {
    const [properties, setProperties] = useState([]);

    useEffect(() => {
        const fetchProperties = async () => {
            try {
                const res = await api.get("/properties/my-properties");
                setProperties(res.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchProperties();
    }, []);
    
    return (
        <div>
            <h2 className="mb-4 text-2xl font-bold">Dashboard</h2>
            <AddProperty />
            <PrivateRoute>
              <PropertyList properties={properties} />
            </PrivateRoute>
        </div>
    );
}

export default Dashboard;
