
'use client';
import { useState } from 'react';
import { useSearch } from '../context/SearchContext'; 

const SearchModal = ({ isOpen, onClose }) => {
    const [searchInput, setSearchInput] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const { updateSearchQuery, fetchProducts } = useSearch(); 

    const handleSearchChange = async (event) => {
        const query = event.target.value;
        setSearchInput(query);

        if (query) {
            try {
                const result = await axios.get(`/api/menu-flower?search=${query}`);
                setSearchResults(result.data);
            } catch (error) {
                console.error('Error fetching search results:', error);
                setSearchResults([]);
            }
        } else {
            setSearchResults([]);
        }
    };

    const handleSelectResult = (item) => {
        updateSearchQuery(item.name); 
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 bg-gray-800 bg-opacity-50 z-10"
            onClick={onClose} 
        >
            <div
                className="bg-rose-200 p-4 shadow-lg"
                onClick={(e) => e.stopPropagation()} 
            >
                <h2 className="text-xl mb-4">Search</h2>
                <input
                    type="text"
                    value={searchInput}
                    onChange={handleSearchChange}
                    className="border-4 focus:outline-none p-2 w-full bg-rose-200 placeholder:text-white"
                    placeholder="Enter search term"
                />
                {searchResults.length > 0 ? (
                    <ul className="absolute bg-rose-200 border border-rose-100 w-full mt-1 max-h-60 overflow-auto">
                        {searchResults.map((item) => (
                            <li
                                key={item.id}
                                className="p-2 hover:bg-gray-200 cursor-pointer text-rose-400"
                                onClick={() => handleSelectResult(item)}
                            >
                                {item.name}
                            </li>
                        ))}
                    </ul>
                ) : (searchInput && <p className="text-center text-red-500">Not found</p>)}
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-gray-500"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                    >
                        <path d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default SearchModal;
