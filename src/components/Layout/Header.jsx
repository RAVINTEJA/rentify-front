import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setIsLoggedIn(true);
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('token');
        setIsLoggedIn(false);
        navigate('/'); // Redirect to home or login page
    };

    return (
        <header className="text-white shadow-md bg-primary">
            <nav className="container flex items-center justify-between px-4 py-4 mx-auto sm:px-6 lg:px-8">
                <div className="text-lg font-bold">
                    <Link to="/">Rentify</Link>
                </div>
                <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                        {isOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
                <div className="items-center hidden space-x-4 md:flex">
                    <Link to="/" className="px-4 py-2 hover:underline">
                        Home
                    </Link>
                    {!isLoggedIn && (
                        <Link to="/login" className="px-4 py-2 hover:underline">
                            Login
                        </Link>
                    )}
                    {!isLoggedIn && (
                        <Link to="/register" className="px-4 py-2 hover:underline">
                            Register
                        </Link>
                    )}
                    {isLoggedIn && (
                        <Link to="/dashboard" className="px-4 py-2 hover:underline">
                            Dashboard
                        </Link>
                    )}
                    {isLoggedIn && (
                        <button
                            onClick={handleLogout}
                            className="px-4 py-2 text-white rounded bg-secondary"
                        >
                            Logout
                        </button>
                    )}
                </div>
            </nav>
            {isOpen && (
                <div className="absolute right-0 w-full py-2 mt-2 bg-white rounded-lg shadow-xl md:hidden">
                    <Link to="/" className="block px-4 py-2 text-black hover:underline">
                        Home
                    </Link>
                    {!isLoggedIn && (
                        <Link to="/login" className="block px-4 py-2 text-black hover:underline">
                            Login
                        </Link>
                    )}
                    {!isLoggedIn && (
                        <Link to="/register" className="block px-4 py-2 text-black hover:underline">
                            Register
                        </Link>
                    )}
                    {isLoggedIn && (
                        <Link to="/dashboard" className="block px-4 py-2 text-black hover:underline">
                            Dashboard
                        </Link>
                    )}
                    {isLoggedIn && (
                        <button
                            onClick={handleLogout}
                            className="block w-full px-4 py-2 text-left text-white bg-secondary"
                        >
                            Logout
                        </button>
                    )}
                </div>
            )}
        </header>
    );
}

export default Header;
