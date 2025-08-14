import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import './Home.css';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import img1 from '../photos/registon.jpg';
import img2 from '../photos/bb.jpg';
import img3 from '../photos/A_T.jpg';
import img4 from '../photos/pr.jpg';
import img5 from '../photos/city.jpg';
import img6 from '../photos/cyti2.jpg';
import img7 from '../photos/food.webp';

const IMAGES = [
    { src: img1, position: 'center center' },       // Registon
    { src: img2, position: 'center center' },       // Bibixonim
    { src: img3, position: 'center center' },       // Amir Temur
    { src: img4, position: '40% center' },          // Islom Karimov — chaproqqa surdik
    { src: img5, position: 'center center' },       // City
    { src: img6, position: 'center center' },       // Pearl East
    { src: img7, position: 'center center' }        // Food
];

const DEFAULT_SLIDES = [
    { title: 'Registan — Your Next Adventure', subtitle: 'Explore the heart of Samarkand at the magnificent Registan Square.' },
    { title: 'Bibikhonim — Royal Legacy', subtitle: 'Witness the grandeur of one of Central Asia’s largest historical mosques.' },
    { title: 'Amir Temur — Eternal Power', subtitle: 'Step into the glory of Amir Temur at his iconic mausoleum Gur-e-Amir.' },
    { title: 'Islom Karimov Memorial', subtitle: "Pay respects to Uzbekistan’s first president in a serene setting." },
    { title: 'Samarkand Cityscape', subtitle: 'Experience ancient streets blended with modern charm.' },
    { title: 'Pearl of the East', subtitle: 'Discover timeless elegance throughout the legendary city.' },
    { title: 'Taste Uzbekistan', subtitle: 'Savor traditional dishes from centuries of rich culinary culture.' }
];

const Home = () => {
    const { t } = useTranslation();
    const [currentSlide, setCurrentSlide] = useState(0);

    const tryKeys = (...keys) => {
        for (const k of keys) {
            const val = t(k);
            if (val && val !== k) return val;
        }
        return '';
    };

    let slidesFromI18n = t('home.slides', { returnObjects: true });
    if (typeof slidesFromI18n === 'string') slidesFromI18n = null;

    const EXPECTED_KEYS_ORDER = ['registan', 'bibixonim', 'amir_temur', 'islom_karimov', 'city', 'pearl_east', 'taste_uzbekistan'];
    let slidesData = [];

    if (Array.isArray(slidesFromI18n) && slidesFromI18n.length > 0) {
        slidesData = slidesFromI18n;
    } else if (slidesFromI18n && typeof slidesFromI18n === 'object') {
        const hasAllExpected = EXPECTED_KEYS_ORDER.every(k => slidesFromI18n[k]);
        if (hasAllExpected) {
            slidesData = EXPECTED_KEYS_ORDER.map(k => slidesFromI18n[k]);
        } else {
            slidesData = Object.values(slidesFromI18n);
        }
    } else {
        slidesData = DEFAULT_SLIDES;
    }

    const slides = slidesData.map((s, idx) => {
        if (typeof s === 'string') {
            return {
                image: IMAGES[idx]?.src || IMAGES[0].src,
                position: IMAGES[idx]?.position || 'center center',
                title: s,
                subtitle: ''
            };
        }
        return {
            image: IMAGES[idx]?.src || IMAGES[0].src,
            position: IMAGES[idx]?.position || 'center center',
            title: s.title || s.name || s[0] || '',
            subtitle: s.subtitle || s.desc || s.description || ''
        };
    });

    const contactLabel = tryKeys('home.buttons.contact', 'home.get_in_touch', 'contact.form.submit') || 'Contact';
    const learnMoreLabel = tryKeys('home.buttons.learn_more', 'home.learn_more') || 'Learn more';
    const prevLabel = tryKeys('home.slider.prev', 'home.previous') || '← Previous';
    const nextLabel = tryKeys('home.slider.next', 'home.next') || 'Next →';

    const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
    const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

    const safeSlide = slides[currentSlide] || slides[0] || DEFAULT_SLIDES[0];
    const { image, position, title, subtitle } = safeSlide;

    return (
        <main className="simple-hero">
            <Helmet>
                <title>SamTour — Explore Uzbekistan</title>
                <meta
                    name="description"
                    content="Discover the beauty of Uzbekistan with SamTour. Private tours, cultural immersion, and unforgettable travel experiences."
                />
            </Helmet>

            <div className="overlay" />
            <div
                className="bg-image"
                style={{
                    backgroundImage: `url(${image})`,
                    backgroundPosition: position
                }}
            />

            <div className="content">
                <h1 className="title">{title}</h1>
                <p className="subtitle">{subtitle}</p>

                <div className="actions">
                    <Link to="/contact" className="cta primary">{contactLabel}</Link>
                    <Link to="/services" className="cta secondary">{learnMoreLabel}</Link>
                </div>

                <div className="slider-controls">
                    <button onClick={prevSlide} className="slider-btn">{prevLabel}</button>
                    <button onClick={nextSlide} className="slider-btn">{nextLabel}</button>
                </div>
            </div>
        </main>
    );
};

export default Home;
