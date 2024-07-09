import React, { useEffect, useRef } from "react";

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
        <div className="flex flex-col h-screen">
            <header className="bg-gray-600 text-white p-4 text-center">
                Rumbai Food Paradise
            </header>
            <div className="flex flex-1">
                <div className="flex flex-col w-2/5">
                    <div className="bg-red-500 p-4 flex justify-center items-center">
                        Jam
                    </div>
                    <div className="bg-orange-500 flex-1 p-4 flex justify-center items-center">
                        ppt
                    </div>
                </div>
                <div className=" flex-1 p-4 flex justify-center items-center">
                    <video
                        ref={videoRef}
                        src="http://127.0.0.1/bpfklp1/bpfklp1/storage/app/public/profilrfp/profilrfp.mp4"
                        style={{
                            width: "100%",
                            height: "500px",
                            objectFit: "contain",
                        }}
                        muted
                        autoPlay
                        loop // Menambahkan properti loop di sini
                    />
                </div>
            </div>
            <div className="flex">
                <div className="bg-blue-500 w-1/3 h-40 p-4 text-center">
                    Gambar1
                </div>
                <div className="bg-green-500 w-1/3 p-4 h-40 text-center">
                    Gambar2
                </div>
                <div className="bg-orange-500 w-1/3 p-4 h-40 text-center">
                    Gambar3
                </div>
            </div>
        </div>
    );
};

export default Layout;
