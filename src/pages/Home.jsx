import React from 'react';
import myVideo from '../assets/videos/5447276-uhd_3840_2160_24fps.mp4';
import SocialLinks from '../components/SocialLinks';

function Home() {
    return (
        <div className="bg-dark-black min-h-[100dvh] w-[100dvw] flex flex-col pt-12 sm:pt-16 md:pt-20">
            <div className="mx-auto px-2 sm:px-4 md:px-6 max-w-7xl flex-1 flex flex-col">
                <div className="px-2 sm:px-4 md:px-6 h-[40dvh] rounded-4xl overflow-hidden">
                    <video
                        src={myVideo}
                        className="h-full w-full object-cover rounded-xl"
                        autoPlay
                        muted
                        loop
                        playsInline
                    ></video>
                </div>
            </div>
            <div className=" brand-name flex-1 flex items-center justify-between">
                <h1 className="text-3xl sm:text-4xl md:text-7xl text-white font-anak-paud pl-10">
                    Ahmed
                    <br />
                    <span className="text-xl sm:text-2xl md:text-3xl text-amber-300 pl-3">.</span>digital
                </h1>
                <div className="location-card pr-20 mb-24">
                    <div className="location">
                        <small className="text-sm sm:text-[0.55rem] md:text-xs text-gray-500">Current Location</small>
                        <p className="text-md sm:text-xs md:text-base text-white italic">Dhaka <span className='md:text-lg'>,</span>Bangladesh</p>
                    </div>
                    <div className="social-icon">
                        <SocialLinks/>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Home;