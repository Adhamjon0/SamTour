// Intro.jsx
import React, { useEffect, useState } from 'react';
import './Intro.css';
import bgImage from '../photos/registon.jpg';

const Intro = ({ onFinish }) => {
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setFadeOut(true);
            setTimeout(() => onFinish(), 1000); // Animatsiyadan so'ng home sahifaga o'tadi
        }, 0.5); // 3.5s ko‘rsatiladi

        return () => clearTimeout(timer);
    }, [onFinish]);

    return (
        <div className={`intro-wrapper ${fadeOut ? 'fade-out' : ''}`}>
            <div className="overlay"></div>
            <img src={bgImage} alt="Historic Background" className="intro-bg" />
            <div className="intro-content">
                <h1 className="logo-text">SamTour</h1>
                <p className="slogan">Discover the Timeless Beauty of Uzbekistan</p>
            </div>
        </div>
    );
};

export default Intro;
