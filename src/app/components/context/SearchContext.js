"use client"
import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const updateSearchQuery = (query) => setSearchQuery(query);

    const fetchProducts = async (query = '') => {
        setLoading(true);
        try {
            const result = await axios.get(`/api/menu-flower?search=${query}`);
            setProducts(result.data);
            setLoading(false);
            setError(null);
        } catch (error) {
            console.error('Error fetching data:', error);
            setError('Failed to fetch products');
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProducts(searchQuery);
    }, [searchQuery]);

    return (
        <SearchContext.Provider value={{ searchQuery, updateSearchQuery, products, fetchProducts, setLoading, loading, error }}>
            {children}
        </SearchContext.Provider>
    );
};

const useSearch = () => useContext(SearchContext);

export { useSearch };
