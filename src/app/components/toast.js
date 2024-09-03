import React from 'react';
import PropTypes from 'prop-types';

const Toast = ({ message, onClose }) => {
    return (
        <div className="toast fixed top-4 right-4 flex items-center p-4 mb-4">
            <div className="alert alert-info flex items-center bg-pink-100 text-pink-800 rounded-lg shadow-md p-4">
                <span>{message}</span>
                <button
                    type="button"
                    className="ml-4 p-1.5 bg-pink-200 text-pink-800 rounded-lg hover:bg-pink-300"
                    onClick={onClose}
                >
                    <span className="sr-only">Close</span>
                    <svg
                        className="w-4 h-4"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 14">
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

Toast.propTypes = {
    message: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default Toast;
