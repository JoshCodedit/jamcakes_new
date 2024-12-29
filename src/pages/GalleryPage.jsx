import { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import backgroundImage from '../../public/images/background1.jpg';
import { HiChevronDown } from "react-icons/hi";
import { motion } from 'framer-motion';

export default function GalleryPage() {
    const [images, setImages] = useState({
        wedding: [],
        celebration: [],
        cupcakes: []
    });
    const [selectedFilters, setSelectedFilters] = useState({
        wedding: true,
        celebration: true,
        cupcakes: true
    });
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedFilter, setSelectedFilter] = useState('all');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);
    const [searchParams] = useSearchParams();

    useEffect(() => {
        const filterParam = searchParams.get('filter');
        if (filterParam && dropdownOptions.some(opt => opt.value === filterParam)) {
            setSelectedFilter(filterParam);
        }
    }, [searchParams]);

    useEffect(() => {
        const importImages = async () => {
            // Import all images from each directory
            const weddingImages = import.meta.glob('../../public/wedding-cakes/*.{jpg,jpeg,png}');
            const celebrationImages = import.meta.glob('../../public/celebration-cakes/*.{jpg,jpeg,png}');
            const cupcakeImages = import.meta.glob('../../public/cupcakes/*.{jpg,jpeg,png}');

            const loadImages = async (imageModules) => {
                const loadedImages = await Promise.all(
                    Object.keys(imageModules).map(async (path) => {
                        const module = await imageModules[path]();
                        return module.default;
                    })
                );
                return loadedImages;
            };

            const [wedding, celebration, cupcakes] = await Promise.all([
                loadImages(weddingImages),
                loadImages(celebrationImages),
                loadImages(cupcakeImages)
            ]);

            setImages({ wedding, celebration, cupcakes });
        };

        importImages();
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleFilterChange = (category) => {
        setSelectedFilters(prev => ({
            ...prev,
            [category]: !prev[category]
        }));
    };

    const getFilteredImages = () => {
        // Filter based on dropdown selection
        if (selectedFilter === 'all') {
            return [...images.wedding, ...images.celebration, ...images.cupcakes];
        }
        
        // Return specific category
        return images[selectedFilter] || [];
    };

    const dropdownOptions = [
        { value: 'all', label: 'All Cakes' },
        { value: 'wedding', label: 'Wedding Cakes' },
        { value: 'celebration', label: 'Celebration Cakes' },
        { value: 'cupcakes', label: 'Cupcakes' }
    ];

    const containerVariants = {
        initial: { opacity: 0 },
        animate: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        initial: { opacity: 0, y: 20 },
        animate: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.5 }
        }
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <div className='relative mx-auto max-w-screen-xl p-4 
                bg-cover bg-center bg-no-repeat' 
                style={{ 
                    backgroundImage: `url(${backgroundImage})`,
                    boxShadow: 'inset 0 0 25px 12px #FDEFF6'
                }}>
                <div className="absolute inset-0 bg-gradient-to-r from-[#FDEFF6]/2 via-transparent to-[#FDEFF6]/2" />
                
                <div className="relative z-10">
                    <motion.h1 
                        className="heading-text mb-8"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        Our Gallery
                    </motion.h1>
                    <motion.p 
                        className='text-center mb-4'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        Filter by:
                    </motion.p> 

                    {/* Dropdown Filter */}
                    <motion.div 
                        className="flex justify-center mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.9 }}
                    >
                        <div className="relative w-full max-w-[200px]" ref={dropdownRef}>
                            <button
                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                className="w-full px-4 py-3 rounded-lg bg-white/80 text-gray-700 
                                    text-center text-base flex items-center justify-between"
                            >
                                <span>{dropdownOptions.find(opt => opt.value === selectedFilter)?.label}</span>
                                <HiChevronDown className={`ml-2 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                            </button>
                            
                            {isDropdownOpen && (
                                <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-lg 
                                    shadow-lg overflow-hidden z-50">
                                    {dropdownOptions.map((option) => (
                                        <button
                                            key={option.value}
                                            onClick={() => {
                                                setSelectedFilter(option.value);
                                                setIsDropdownOpen(false);
                                            }}
                                            className="w-full px-4 py-3 text-left hover:bg-gray-100 
                                                text-base text-gray-700"
                                        >
                                            {option.label}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    </motion.div>

                    {/* Image Grid */}
                    <motion.div 
                        className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4"
                        variants={containerVariants}
                        initial="initial"
                        animate="animate"
                    >
                        {getFilteredImages().map((image, index) => (
                            <motion.div 
                                key={index}
                                className="cursor-pointer"
                                variants={itemVariants}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => setSelectedImage(image)}
                            >
                                <img
                                    src={image}
                                    alt={`Gallery image ${index + 1}`}
                                    className="w-full h-64 object-cover rounded-lg"
                                />
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* Modal for enlarged image */}
            {selectedImage && (
                <motion.div 
                    className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
                    onClick={() => setSelectedImage(null)}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <motion.div 
                        className="relative max-w-3xl max-h-[80vh] w-full"
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.3 }}
                    >
                        <img
                            src={selectedImage}
                            alt="Enlarged view"
                            className="w-full h-full object-contain max-h-[75vh]"
                        />
                        <button
                            className="absolute top-4 right-4 text-white text-xl bg-black bg-opacity-50 w-8 h-8 rounded-full"
                            onClick={() => setSelectedImage(null)}
                        >
                            ×
                        </button>
                    </motion.div>
                </motion.div>
            )}
        </div>
    );
}