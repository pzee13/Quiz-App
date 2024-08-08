import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { useNavigate } from 'react-router-dom';

import quizimage from '../assets/images/quizimage.png';
import quizImage2 from '../assets/images/quizImage2.png';

const LandingPage: React.FC = () => {
    const [flipped, setFlipped] = useState(false);


    const navigate = useNavigate();
  
    const handlePlay = () => {
     
      navigate('/quiz');
    };
  
 

    useEffect(() => {
        const interval = setInterval(() => {
            setFlipped(prev => !prev);
        }, 3000); 

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative h-screen flex flex-col justify-center items-center bg-gradient-to-r from-black via-black to-primaryBlack">
            <div className="absolute inset-0 lg:hidden">
                <img className="object-cover object-start w-full h-full opacity-60 shadow-lg" src={quizimage} alt="Quiz Background Mobile" />
            </div>

            <div className="relative z-10">
                <div className="px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl">
                    <div className="grid items-center grid-cols-1 lg:grid-cols-2 gap-12">
                        <div className="text-center lg:text-left">
                            <h1 className="font-sans text-2xl lg:text-4xl font-bold tracking-tight text-white">
                                Test Your Knowledge and Flex Your Brain Power
                            </h1>
                            <p className="mt-6 text-lg lg:text-2xl text-white">
                                <span className="font-sans font-medium text-4xl lg:text-6xl">Unleash Your</span><br />
                                <span className="font-serif italic text-5xl lg:text-8xl">Quiz Mastery</span>
                            </p>
                            <p className="mt-12 mb-10 font-sans text-base leading-7 text-white">
                                Challenge yourself with intriguing questions across various topics and see how well you can test your knowledge. Ready to become a quiz champion?
                            </p>
                            <button
                               onClick={handlePlay}
                                className="
                                    inline-flex
                                    items-center
                                    justify-center
                                    px-6
                                    py-3
                                    font-sans
                                    text-lg
                                    font-semibold
                                    leading-6
                                    transition-all
                                    duration-200
                                    bg-transparent
                                    border-2
                                    rounded-full
                                    text-white
                                    border-yellow-500
                                    hover:bg-yellow-500
                                    hover:text-black
                                    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500
                                    sm:text-xl
                                "
                                role="button"
                            >
                                <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M8.0416 4.9192C7.37507 4.51928 6.5271 4.99939 6.5271 5.77669L6.5271 18.2232C6.5271 19.0005 7.37507 19.4806 8.0416 19.0807L18.4137 12.8574C19.061 12.469 19.061 11.5308 18.4137 11.1424L8.0416 4.9192Z" />
                                </svg>
                                Start Quiz
                            </button>
                        </div>

                        <div className="hidden lg:block">
                            <motion.div
                                className="w-full mx-auto"
                                initial={{ rotateY: 0 }}
                                animate={{ rotateY: flipped ? 180 : 0 }}
                                transition={{ type: 'keyframes', values: [0, 100, 200], duration: 1 }}



                            >
                                <motion.img
                                    className="w-full mx-auto hover:drop-shadow-white-xl"
                                    src={flipped ? quizImage2 : quizimage}
                                    alt="Quiz Background Desktop"
                                    style={{ transformStyle: 'preserve-3d', backfaceVisibility: 'hidden' }}
                                />
                            </motion.div>
                        </div>
                    </div>
                </div>
            
            </div>

           
        </div>
        
    );
}

export default LandingPage;
