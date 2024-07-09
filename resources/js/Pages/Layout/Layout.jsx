import React, { useEffect, useRef, useState } from "react";
import { Head } from '@inertiajs/react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const JamUpdate = () => {
    const [currentTime, setCurrentTime] = useState(new Date());
    const [fadeIn, setFadeIn] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date());
            setFadeIn(true); // Aktifkan animasi fade-in
            setTimeout(() => setFadeIn(false), 1000); // Matikan animasi setelah 1 detik
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <div className={`mt-2 text-5xl justify-end text-yellow-300 ${fadeIn ? 'fade-in' : ''}`} style={{ fontFamily: 'Roboto, sans-serif', fontWeight: '1000', letterSpacing: '1px' }}>
            {currentTime.toLocaleString()}
        </div>
    );
};

const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
};

const Layout = () => {
    const videoRef = useRef(null);

    useEffect(() => {
        const videoElement = videoRef.current;
        if (videoElement) {
            const playPromise = videoElement.play();
            if (playPromise !== undefined) {
                playPromise
                    .then(() => {
                        // Video started playing
                    })
                    .catch((error) => {
                        // Auto-play was prevented
                        console.log("Video autoplay failed:", error);
                    });
            }
        }
    }, []);

    return (
        <>
            <Head title="Content" />
            <div className="flex flex-col h-screen">

                <div className="flex flex-1">
                    <div className="flex flex-col w-2/5 h-full">
                        <div className="bg-green-800 p-0 flex items-center h-1/4">

                            <img
                                src="http://127.0.0.1/bpfklp1/bpfklp1/storage/app/public/assets_off/log_rfp.png"
                                alt="Logo"
                                className="h-24 mr-8 ml-4 justify-normal"
                            />

                            <JamUpdate /> {/* Memanggil komponen JamUpdate di sini */}

                        </div>
                        <div className="bg-green-800 flex-1 p-0 flex justify-end items-center">
                            <div className="p-4 text-white">
                                Rumbai Food Paradise merupakan pusat perbelanjaan dan kuliner di kota Pekanbaru yang mengedepankan perkembangan bisnis UMKM
                            </div>
                            <div className="w-full max-w-xs ml-12">
                                <Slider {...settings}>
                                    <div>
                                        <img
                                            src="http://127.0.0.1/bpfklp1/bpfklp1/storage/app/public/slideShow_login/1.jpg"
                                            alt="Slide 1"
                                            style={{ width: '100%', height: '300px', objectFit: 'contain' }}
                                        />
                                    </div>
                                    <div>
                                        <img
                                            src="http://127.0.0.1/bpfklp1/bpfklp1/storage/app/public/slideShow_login/2.jpg"
                                            alt="Slide 2"
                                            style={{ width: '100%', height: '300px', objectFit: 'contain' }}
                                        />
                                    </div>
                                    <div>
                                        <img
                                            src="http://127.0.0.1/bpfklp1/bpfklp1/storage/app/public/slideShow_login/3.png"
                                            alt="Slide 3"
                                            style={{ width: '100%', height: '300px', objectFit: 'contain' }}
                                        />
                                    </div>
                                </Slider>
                            </div>
                        </div>
                    </div>
                    <div className="bg-green-800 flex-1 flex justify-center items-center">
                        <video
                            ref={videoRef}
                            src="http://127.0.0.1/bpfklp1/bpfklp1/storage/app/public/profilrfp/profilrfp.mp4"
                            style={{
                                width: "100%",
                                height: "100%",
                            }}
                            muted
                            autoPlay
                            loop
                        />
                    </div>
                </div>
                <div className="flex h-2/5">
                    <div className="bg-blue-500 w-1/3 p-4 flex justify-center items-center">
                        Gambar1
                    </div>
                    <div className="bg-green-500 w-1/3 p-4 flex justify-center items-center">
                        Gambar2
                    </div>
                    <div className="bg-orange-500 w-1/3 p-4 flex justify-center items-center">
                        Gambar3
                    </div>
                </div>
            </div>
        </>
    );
};

export default Layout;
