import React, { useEffect, useRef, useState } from "react";
import { Head } from "@inertiajs/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const JamUpdate = () => {
    const [currentTime, setCurrentTime] = useState(new Date());
    const [fadeIn, setFadeIn] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date());
            setFadeIn(true);
            setTimeout(() => setFadeIn(false), 1000);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div
            className={`mt-2 text-5xl justify-end text-yellow-300 ${
                fadeIn ? "fade-in" : ""
            }`}
            style={{
                fontFamily: "Roboto, sans-serif",
                fontWeight: "1000",
                letterSpacing: "1px",
            }}
        >
            {currentTime.toLocaleString()}
        </div>
    );
};

const settings = {
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
                    .then(() => {})
                    .catch((error) =>
                        console.log("Video autoplay failed:", error)
                    );
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
                                className="h-24 mr-8 ml-4"
                            />
                            <JamUpdate />
                        </div>
                        <div className="bg-green-800 flex-1 p-4 flex justify-end items-center">
                            <div className="text-white">
                                Rumbai Food Paradise merupakan pusat
                                perbelanjaan dan kuliner di kota Pekanbaru yang
                                mengedepankan perkembangan bisnis UMKM
                            </div>
                            <div className="w-full max-w-xs ml-12">
                                <Slider {...settings}>
                                    <div>
                                        <img
                                            src="http://127.0.0.1/bpfklp1/bpfklp1/storage/app/public/slideShow_login/1.jpg"
                                            alt="Slide 1"
                                            style={{
                                                width: "100%",
                                                height: "300px",
                                                objectFit: "contain",
                                            }}
                                        />
                                    </div>
                                    <div>
                                        <img
                                            src="http://127.0.0.1/bpfklp1/bpfklp1/storage/app/public/slideShow_login/2.jpg"
                                            alt="Slide 2"
                                            style={{
                                                width: "100%",
                                                height: "300px",
                                                objectFit: "contain",
                                            }}
                                        />
                                    </div>
                                    <div>
                                        <img
                                            src="http://127.0.0.1/bpfklp1/bpfklp1/storage/app/public/slideShow_login/3.png"
                                            alt="Slide 3"
                                            style={{
                                                width: "100%",
                                                height: "300px",
                                                objectFit: "contain",
                                            }}
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
                            style={{ width: "100%", height: "100%" }}
                            muted
                            autoPlay
                            loop
                        />
                    </div>
                </div>
                <div className="flex h-2/5">
                    <div className="bg-green-800 w-1/3 flex justify-center items-center">
                        <img
                            src="http://127.0.0.1/bpfklp1/bpfklp1/storage/app/public/gambar/1.jpg"
                            alt="Gambar 1"
                            style={{
                                width: "100%",
                                height: "300px",
                                objectFit: "contain",
                            }}
                        />
                    </div>
                    <div className="bg-green-800 w-1/3 flex justify-center items-center">
                        <img
                            src="http://127.0.0.1/bpfklp1/bpfklp1/storage/app/public/gambar/2.jpg"
                            alt="Gambar 2"
                            style={{
                                width: "100%",
                                height: "300px",
                                objectFit: "contain",
                            }}
                        />
                    </div>
                    <div className="bg-green-800 w-1/3 flex justify-center items-center">
                        <img
                            src="http://127.0.0.1/bpfklp1/bpfklp1/storage/app/public/gambar/3.jpg"
                            alt="Gambar 3"
                            style={{
                                width: "100%",
                                height: "300px",
                                objectFit: "contain",
                            }}
                        />
                    </div>
                </div>
                <div className="bg-yellow-500 h-64 flex items-center overflow-hidden">
                    <marquee
                        class="marquee text-sky-100-9xl whitespace-nowrap"
                        behavior="slide"
                        direction="left"
                    >
                        Instagram : @rumbaifoodparadise     Whatsapp : +62 821-1999-9946    Senin - Minggu = 16.00-24.00
                    </marquee>
                </div>
            </div>
        </>
    );
};

export default Layout;
