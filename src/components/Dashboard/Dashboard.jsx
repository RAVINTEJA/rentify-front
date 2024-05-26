import PropertyList from "../Property/PropertyList";
import AddProperty from "../Property/AddProperty";
import PrivateRoute from "../PrivateRoute";

function Dashboard() {
    return (
        <div>
            <h2 className="mb-4 text-2xl font-bold">Dashboard</h2>
            <AddProperty />
            <PrivateRoute>
              <PropertyList />
            </PrivateRoute>
        </div>
    );
}

export default Dashboard;
