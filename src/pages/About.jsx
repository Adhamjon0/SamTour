import React from 'react';
import './About.css';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';

import img1 from '../photos/reg.jpg';
import img2 from '../photos/sh.jpg';
import img3 from '../photos/xiva.jpg';
import img4 from '../photos/buxoroArk.jpg';
import img5 from '../photos/A_T.jpg';
import img6 from '../photos/toshkent.jpg';
import img7 from '../photos/shahrisabz.jpg';

const About = () => {
    const { t } = useTranslation();

    return (
        <main className="about-page">
            <Helmet>
                <title>SamTour — About Us</title>
                <meta
                    name="description"
                    content="Learn more about SamTour, our mission, and how we create unique travel experiences across Uzbekistan."
                />
            </Helmet>

            {/* Intro */}
            <section className="intro">
                <div className="container">
                    <h1 className="title1">{t('about.title')}</h1>
                    <p className="lead">{t('about.lead')}</p>
                </div>
            </section>

            {/* Mission */}
            <section className="mission">
                <div className="container">
                    <h2 className="section-title1">{t('about.mission_title')}</h2>
                    <p className="section-desc">{t('about.mission_desc')}</p>
                </div>
            </section>

            {/* Values */}
            <section className="values">
                <div className="container">
                    <h2 className="section-title2">{t('about.why_title')}</h2>
                    <div className="cards">
                        <div className="card">
                            <img src={img2} alt="Shah-i-Zinda" className="card-img" />
                            <div className="card-body">
                                <h3 className="card-title">{t('about.expertise_title')}</h3>
                                <p className="card-text">{t('about.expertise_desc')}</p>
                            </div>
                        </div>
                        <div className="card">
                            <img src={img3} alt="Khiva Walls" className="card-img" />
                            <div className="card-body">
                                <h3 className="card-title">{t('about.personalized_title')}</h3>
                                <p className="card-text">{t('about.personalized_desc')}</p>
                            </div>
                        </div>
                        <div className="card">
                            <img src={img5} alt="Amir Temur Mausoleum" className="card-img" />
                            <div className="card-body">
                                <h3 className="card-title">{t('about.support_title')}</h3>
                                <p className="card-text">{t('about.support_desc')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Explore Regions */}
            <section className="explore">
                <div className="container">
                    <h2 className="section-title3">{t('about.explore_title')}</h2>
                    <div className="regions-grid">
                        {[
                            { img: img1, title: t('about.samarkand.title'), desc: t('about.samarkand.desc') },
                            { img: img6, title: t('about.tashkent.title'), desc: t('about.tashkent.desc') },
                            { img: img3, title: t('about.khiva.title'), desc: t('about.khiva.desc') },
                            { img: img4, title: t('about.bukhara.title'), desc: t('about.bukhara.desc') },
                            { img: img7, title: t('about.shahrisabz.title'), desc: t('about.shahrisabz.desc') }
                        ].map((region, index) => (
                            <div className="region-card" key={index}>
                                <img src={region.img} alt={region.title} className="region-img" />
                                <div className="region-body">
                                    <h3>{region.title}</h3>
                                    <p>{region.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="cta-section">
                <div className="container-section">
                    <h2 className="cta-title">{t('about.cta_title')}</h2>
                    <p className="cta-desc">{t('about.cta_desc')}</p>
                    <Link to="/contact" className="btn primary" aria-label="Contact">
                        {t('about.contact_button')}
                    </Link>
                </div>
            </section>
        </main>
    );
};
export default About;
