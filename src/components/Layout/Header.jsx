import { Link } from "react-router-dom";

function Header() {

    const handleLogout = () => {
        localStorage.removeItem("token");
        window.location.reload();
    }
  
    return (
        <header className="text-white shadow-md bg-primary">
            <nav className="container flex items-center justify-between px-4 py-4 mx-auto sm:px-6 lg:px-8">
                <div className="text-lg font-bold">
                    <Link to="/">Rentify</Link>
                </div>
                <div className="space-x-4">
                    <Link to="/" className="hover:underline">
                        Home
                    </Link>
                    <Link to="/login" className="hover:underline">
                        Login
                    </Link>
                    <Link to="/register" className="hover:underline">
                        Register
                    </Link>
                    <Link to="/dashboard" className="hover:underline">
                        Dashboard
                    </Link>
                    <button
                        onClick={handleLogout}
                        className="p-2 text-white rounded bg-secondary"
                    >
                        Logout
                    </button>
                </div>
            </nav>
        </header>
    );
}

export default Header;
