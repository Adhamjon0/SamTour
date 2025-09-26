import React, { useState, useEffect } from "react";
import "./Services.css";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

import sam_ser from "../photos/sam-ser.jpeg";
import tosh_ser from "../photos/tosh-ser.jpg";
import xv_ser from "../photos/xv-ser.jpg";
import bux_ser from "../photos/bux_ser.webp";
import shax_ser from "../photos/shax_ser.jpg";
import anj_ser from "../photos/anj_ser.jpg";
import nam_ser from "../photos/nam_ser.jpg";
import far_ser from "../photos/far_ser.jpg";
import nav_ser from "../photos/nav_ser.jpg";
import nuk_ser from "../photos/nuk_ser.jpg";

// Viloyatlar uchun rasm mapping (faqat ID ishlatiladi)
const regionImages = {
    samarkand: sam_ser,
    bukhara: bux_ser,
    khiva: xv_ser,
    tashkent: tosh_ser,
    shahrisabz: shax_ser,
    andijan: anj_ser,
    namangan: nam_ser,
    fergana: far_ser,
    navoi: nav_ser,
    nukus: nuk_ser
};

const Service = () => {
    const { t } = useTranslation();
    const [selectedRegion, setSelectedRegion] = useState(null);
    const [showMore, setShowMore] = useState(false);

    // Esc bosilganda modalni yopish
    useEffect(() => {
        const onKey = (e) => e.key === "Escape" && setSelectedRegion(null);
        document.addEventListener("keydown", onKey);
        return () => document.removeEventListener("keydown", onKey);
    }, []);

    const services = t("service.services", { returnObjects: true });
    const regions = t("service.regions", { returnObjects: true });

    return (
        <main className="service-page">
            <Helmet>
                <title>{t("service.intro.title")}</title>
                <meta
                    name="description"
                    content={t("service.intro.description")}
                />
            </Helmet>

            {/* Intro */}
            <section className="service-intro">
                <div className="service-container">
                    <h1 className="service-title">{t("service.intro.title")}</h1>
                    <p className="service-lead">{t("service.intro.lead")}</p>
                </div>
            </section>

            {/* Services */}
            <section className="services">
                <div className="service-container">
                    <h2 className="section-title">{t("service.section_title")}</h2>
                    <div className="service-cards">
                        {services.map((s, idx) => (
                            <article key={idx} className="service-card">
                                <h3 className="service-card__title">{s.title}</h3>
                                <p className="service-card__desc">{s.desc}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Regions */}
            <section className="regions">
                <div className="service-container">
                    <h2 className="section-title">{t("service.regions_title")}</h2>
                    <div className="region-grid">
                        {regions.map((r, idx) => (
                            <button
                                key={idx}
                                className="region-card"
                                onClick={() => {
                                    setSelectedRegion({ ...r, img: regionImages[r.id] });
                                    setShowMore(false);
                                }}
                                aria-haspopup="dialog"
                                aria-controls="region-modal"
                            >
                                <div className="region-thumb">
                                    {regionImages[r.id] && (
                                        <img src={regionImages[r.id]} alt={r.title} />
                                    )}
                                </div>
                                <div className="region-meta">
                                    <h3 className="region-title">{r.title}</h3>
                                    <p className="region-desc">{r.desc}</p>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Modal */}
            {selectedRegion && (
                <div
                    className="modal-overlay"
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="region-modal-title"
                    onClick={() => setSelectedRegion(null)}
                >
                    <div
                        className="modal fullscreen"
                        onClick={(e) => e.stopPropagation()}
                        style={{
                            backgroundImage: selectedRegion.img
                                ? `linear-gradient(rgba(0,0,0,.55), rgba(0,0,0,.8)), url(${selectedRegion.img})`
                                : "linear-gradient(180deg, #1b1b1b, #000)"
                        }}
                    >
                        <button
                            className="modal-close"
                            onClick={() => setSelectedRegion(null)}
                            aria-label={t("service.buttons.close")}
                        >
                            ✕
                        </button>

                        <div className="modal-content">
                            <h2 id="region-modal-title" className="modal-title">
                                {selectedRegion.title}
                            </h2>
                            <p className="modal-sub">{selectedRegion.desc}</p>

                            {showMore && <p className="modal-more">{selectedRegion.more}</p>}

                            {!showMore && (
                                <button
                                    className="btn modal-btn"
                                    onClick={() => setShowMore(true)}
                                >
                                    {t("service.buttons.more")}
                                </button>
                            )}

                            <button
                                className="btn modal-btn outline"
                                onClick={() => setSelectedRegion(null)}
                            >
                                {t("service.buttons.close")}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </main>
    );
};

            export default Service;
