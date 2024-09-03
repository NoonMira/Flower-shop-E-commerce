"use client"
import { useEffect, useState } from "react";
import Loading from "../components/layout/loading";
import axios from "axios";
import { useSearch } from "../components/context/SearchContext";
import { useCart } from "../components/context/cartContext";
import { CartIcon } from "../components/layout/icons";
import Toast from "../components/toast";

export default function FlowerMenu() {
    const { addToCart } = useCart();
    const { searchQuery, updateSearchQuery, error } = useSearch();
    const [sortedProducts, setSortedProducts] = useState([]);
    const [totalProducts, setTotalProducts] = useState(0);
    const [sortOption, setSortOption] = useState('Featured');
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showToast, setShowToast] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const result = await axios.get('/api/menu-flower');
                setProducts(result.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }  finally {
                setLoading(false); 
            }
        };
        fetchProducts();
    }, []);

    useEffect(() => {
        let sorted = [...products];

        if (sortOption === 'A-Z') {
            sorted.sort((a, b) => a.name.localeCompare(b.name));
        } else if (sortOption === 'Z-A') {
            sorted.sort((a, b) => b.name.localeCompare(a.name));
        } else if (sortOption === 'Price: Low to High') {
            sorted.sort((a, b) => (a.price || 0) - (b.price || 0));
        } else if (sortOption === 'Price: High to Low') {
            sorted.sort((a, b) => (b.price || 0) - (a.price || 0));
        } else {
            sorted.sort((a, b) => a.id - b.id);
        }

        setSortedProducts(sorted);
    }, [sortOption, products]);

    const handleAddToCart = (item) => {
        addToCart(item);
        setShowToast(item.id);
        setTimeout(() => setShowToast(null), 3000);
    };


    if (loading) return <Loading />;

    return (
        <div className="container mx-auto bg-orange-100 text-stone-900">
        <h1 className="my-8 text-2xl sm:text-2xl md:text-3xl font-bold text-center ">Daily Flower Menu</h1>
        <div className="sort-options grid justify-center max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3 mt-12">
            <label>
                Sort by
                <select onChange={(e) => setSortOption(e.target.value)} value={sortOption} className="bg-white">
                    <option value="Featured">Featured</option>
                    <option value="A-Z">A-Z</option>
                    <option value="Z-A">Z-A</option>
                    <option value="Price: Low to High">Price: Low to High</option>
                    <option value="Price: High to Low">Price: High to Low</option>
                </select>
            </label>
        </div>
        <div className="products mx-auto mb-[220px] grid justify-center max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3 mt-12 justify-items-center">
            {sortedProducts.map((item) => (
                <div key={item.id} className="product-item hover:underline">
                    <img src={item.image} alt={item.name} className="h-80 w-72 object-cover duration-500 hover:scale-105 hover:shadow-xl mb-2" />
                    <h3>{item.name}</h3>
                    <div className="flex flex-row justify-between content-end">
                    <p className="">${item.price}</p>
                    {showToast === item.id && (
                            <Toast
                                message="Item added to cart!"
                                onClose={() => setShowToast(null)}
                            />
                        )}
                    <button className="btn btn-outline btn-error" onClick={() => handleAddToCart(item)}>
                    <CartIcon />
                    </button>
                    </div>
                </div>
            ))}
        </div>
    </div>
    );
}
