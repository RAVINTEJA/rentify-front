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
        <div className="md:px-16 lg:px-32">
            <AddProperty />
            <PrivateRoute>
                <h2 className="mb-6 mt-8 text-2xl font-bold text-primary">
                    My Properties
                </h2>
                <PropertyList properties={properties} />
            </PrivateRoute>
        </div>
    );
}

export default Dashboard;
