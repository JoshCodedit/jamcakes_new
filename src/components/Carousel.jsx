import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function Carousel() {
    const [images, setImages] = useState([]);

    useEffect(() => {
        const importImages = async () => {
            const imageModules = import.meta.glob('../../public/carousel/*.jpg');
            const imagePaths = await Promise.all(
                Object.keys(imageModules).map(async (path) => {
                    const module = await imageModules[path]();
                    return module.default;
                })
            );
            setImages(imagePaths);
        };

        importImages();
    }, []);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        swipeToSlide: true,
        draggable: true,
        touchThreshold: 10,
        scroll: true,
        responsive: [
            {
                breakpoint: 768,  // mobile breakpoint
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <>
            <style>
                {`
                    .slick-prev:before,
                    .slick-next:before {
                        color: #000;  /* Change to your desired colour */
                        font-size: 24px;  /* Optional: adjust size */
                    }

                    /* Optional: change colour on hover */
                    .slick-prev:hover:before,
                    .slick-next:hover:before {
                        color: #666;
                    }
                `}
            </style>
            <Slider className='w-[80%] mx-auto ' {...settings}>
                {images.map((image, index) => (
                    <div key={index} className="flex justify-center items-center mx-auto">
                        <img
                            src={image}
                            alt={`Carousel ${index}`}
                            className="object-cover w-[70%] h-[70%] mx-auto"
                            style={{ aspectRatio: '1 / 1' }}
                        />
                    </div>
                ))}
            </Slider>
            <button className="mx-auto block w-[10%] mt-8 bg-pink-200 hover:bg-pink-300 text-gray-800 font-semibold py-2 px-4 rounded-lg shadow">View All</button>
        </>
    );
}