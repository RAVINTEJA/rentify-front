import { useEffect } from 'react';
import PropTypes from 'prop-types';

const Modal = ({ isOpen, onClose, children }) => {
    useEffect(() => {
        const handleEscape = (event) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };
        document.addEventListener('keydown', handleEscape);
        return () => {
            document.removeEventListener('keydown', handleEscape);
        };
    }, [onClose]);

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
            onClick={onClose}
        >
            <div
                className="bg-white rounded-lg shadow-lg p-4 w-11/12 md:w-1/2 relative"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                >
                    &times;
                </button>
                {children}
            </div>
        </div>
    );
};

Modal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
};

export default Modal;
