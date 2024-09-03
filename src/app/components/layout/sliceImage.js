"use client"; 
import React, { useState } from 'react';

export default function SliceImage() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [
        { url: 'https://i.pinimg.com/564x/08/cf/c1/08cfc11b52219ca75e28540e27c89831.jpg' },
        { url: 'https://i.pinimg.com/474x/39/9e/c3/399ec3bc2f59c98763eaea28f49adab8.jpg' },
        { url: 'https://i.pinimg.com/736x/fb/05/c3/fb05c33fb8c49aed2da675558b205344.jpg' },
        { url: 'https://i.pinimg.com/474x/a7/f8/83/a7f883dbe1464ed054d61acf5e4ab9c9.jpg' },
        { url: 'https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp' },
        { url: 'https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp' },
        { url: 'https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp' },
    ];


    const goBack = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const goForward = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className="relative m-auto w-full h-96 flex justify-center">
            <div
                style={{ backgroundImage: `url(${images[currentIndex].url})` }}
                className='w-[280px] h-[320px] rounded-md bg-center bg-cover duration-500'
            ></div>
            <div className="absolute top-1/1 left-5 transform -translate-y-1/2 flex justify-center w-full px-2">
                <button onClick={goBack} className="btn btn-circle bg-white">❮</button>
                <button onClick={goForward} className="btn btn-circle bg-white">❯</button>
            </div>
        </div>
    );
}
