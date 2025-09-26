import React, { useState } from "react";
import "./About.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";

import img1 from "../photos/reg.jpg";
import img2 from "../photos/sh.jpg";
import img3 from "../photos/xiva.jpg";
import img4 from "../photos/buxoroArk.jpg";
import img5 from "../photos/A_T.jpg";
import img6 from "../photos/toshkent.jpg";
import img7 from "../photos/shahrisabz.jpg";

const About = () => {
    const { t } = useTranslation();
    const [selected, setSelected] = useState(null);

    const regions = [
        { img: img1, title: t("about.samarkand.title"), desc: t("about.samarkand.desc") },
        { img: img6, title: t("about.tashkent.title"), desc: t("about.tashkent.desc") },
        { img: img3, title: t("about.khiva.title"), desc: t("about.khiva.desc") },
        { img: img4, title: t("about.bukhara.title"), desc: t("about.bukhara.desc") },
        { img: img7, title: t("about.shahrisabz.title"), desc: t("about.shahrisabz.desc") }
    ];

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
            <section className="about-intro">
                <div className="about-container">
                    <h1 className="about-title">{t("about.title")}</h1>
                    <p className="about-lead">{t("about.lead")}</p>
                </div>
            </section>

            {/* Mission */}
            <section className="about-mission">
                <div className="about-container">
                    <h2 className="about-section-title">{t("about.mission_title")}</h2>
                    <p className="about-section-desc">{t("about.mission_desc")}</p>
                </div>
            </section>

            {/* Values */}
            <section className="about-values">
                <div className="about-container">
                    <h2 className="about-section-title">{t("about.why_title")}</h2>
                    <div className="about-cards">
                        <div className="about-card">
                            <img src={img2} alt="Shah-i-Zinda" className="about-card-img" />
                            <div className="about-card-body">
                                <h3>{t("about.expertise_title")}</h3>
                                <p>{t("about.expertise_desc")}</p>
                            </div>
                        </div>
                        <div className="about-card">
                            <img src={img3} alt="Khiva Walls" className="about-card-img" />
                            <div className="about-card-body">
                                <h3>{t("about.personalized_title")}</h3>
                                <p>{t("about.personalized_desc")}</p>
                            </div>
                        </div>
                        <div className="about-card">
                            <img src={img5} alt="Amir Temur Mausoleum" className="about-card-img" />
                            <div className="about-card-body">
                                <h3>{t("about.support_title")}</h3>
                                <p>{t("about.support_desc")}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Explore Regions */}
            <section className="about-explore">
                <div className="about-container">
                    <h2 className="about-section-title">{t("about.explore_title")}</h2>
                    <div className="about-regions-grid">
                        {regions.map((region, i) => (
                            <div
                                className="about-region-card"
                                key={i}
                                onClick={() => setSelected(region)}
                            >
                                <img src={region.img} alt={region.title} className="about-region-img" />
                                <div className="about-region-body">
                                    <h3>{region.title}</h3>
                                    <p>{region.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Modal */}
            {selected && (
                <div className="about-modal" onClick={() => setSelected(null)}>
                    <div
                        className="about-modal-content"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button className="about-modal-close" onClick={() => setSelected(null)}>
                            ✕
                        </button>
                        <img src={selected.img} alt={selected.title} className="about-modal-img" />
                        <h3>{selected.title}</h3>
                        <p>{selected.desc}</p>
                    </div>
                </div>
            )}

            {/* Call to Action */}
            <section className="about-cta">
                <div className="about-container">
                    <h2 className="about-cta-title">{t("about.cta_title")}</h2>
                    <p className="about-cta-desc">{t("about.cta_desc")}</p>
                    <Link to="/contact" className="about-btn">
                        {t("about.contact_button")}
                    </Link>
                </div>
            </section>
        </main>
    );
};

export default About;
