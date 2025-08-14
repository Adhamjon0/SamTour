import React, { useState, useEffect, useMemo } from 'react';
import './Services.css';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';

const Services = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const servicesList = [
        {
            title: t('services.service_list.private_tours.title'),
            description: t('services.service_list.private_tours.desc'),
            icon: '🧭'
        },
        {
            title: t('services.service_list.historical_journeys.title'),
            description: t('services.service_list.historical_journeys.desc'),
            icon: '🏛️'
        },
        {
            title: t('services.service_list.photo_tours.title'),
            description: t('services.service_list.photo_tours.desc'),
            icon: '📸'
        },
        {
            title: t('services.service_list.custom_packages.title'),
            description: t('services.service_list.custom_packages.desc'),
            icon: '🛠️'
        },
        {
            title: t('services.service_list.nationwide_travel.title'),
            description: t('services.service_list.nationwide_travel.desc'),
            icon: '🌍'
        },
        {
            title: t('services.service_list.cultural_immersion.title'),
            description: t('services.service_list.cultural_immersion.desc'),
            icon: '🎭'
        }
    ];

    // ✅ 10 ta hudud: id + title + short_desc + img (public/images/regions/* joylashtiring)
    const regions = useMemo(() => ([
        {
            id: 'samarkand',
            title: t('about.samarkand.title'),
            desc: t('about.samarkand.short_desc', 'Ipak yo‘li durdonasi, Registon maydoni bilan mashhur.'),
            img: '/images/regions/samarkand.jpg'
        },
        {
            id: 'bukhara',
            title: t('about.bukhara.title'),
            desc: t('about.bukhara.short_desc', 'Me’moriy yodgorliklari va tarixiy madrasalari bilan mashhur.'),
            img: '/images/regions/bukhara.jpg'
        },
        {
            id: 'khiva',
            title: t('about.khiva.title'),
            desc: t('about.khiva.short_desc', 'Ichan-Qal’a — ochiq osmon ostidagi muzey.'),
            img: '/images/regions/khiva.jpg'
        },
        {
            id: 'shahrisabz',
            title: t('about.shahrisabz.title'),
            desc: t('about.shahrisabz.short_desc', 'Amir Temur vatani, Oqsaroy xarobalari bilan mashhur.'),
            img: '/images/regions/shahrisabz.jpg'
        },
        {
            id: 'tashkent',
            title: t('about.tashkent.title'),
            desc: t('about.tashkent.short_desc', 'Zamonaviy poytaxt: metro, muzeylar, parklar.'),
            img: '/images/regions/tashkent.jpg'
        },
        {
            id: 'fargona',
            title: 'Fargʻona',
            desc: 'Goʻzal vodiy — bogʻlar, hunarmandchilik, tabiiy manzaralar.',
            img: '/images/regions/fargona.jpg'
        },
        {
            id: 'qoqon',
            title: 'Qoʻqon',
            desc: 'Tarixiy xonlik markazi, muhtasham saroy va madrasalar.',
            img: '/images/regions/qoqon.jpg'
        },
        {
            id: 'nukus',
            title: 'Nukus',
            desc: 'Qoraqalpogʻiston markazi, Savitskiy san’at muzeyi bilan mashhur.',
            img: '/images/regions/nukus.jpg'
        },
        {
            id: 'termiz',
            title: 'Termiz',
            desc: 'Janubiy shahar — qadimiy Buddaviy yodgorliklar makoni.',
            img: '/images/regions/termiz.jpg'
        },
        {
            id: 'qarshi',
            title: 'Qarshi',
            desc: 'Janubi-gʻarbiy shahar — tarix va zamonaviylik uygʻunligi.',
            img: '/images/regions/qarshi.jpg'
        }
    ]), [t]);

    // ✅ Modal holati
    const [openId, setOpenId] = useState(null);
    const selectedRegion = useMemo(
        () => regions.find(r => r.id === openId) || null,
        [openId, regions]
    );

    // ESC bilan yopish
    useEffect(() => {
        const onKey = (e) => {
            if (e.key === 'Escape') setOpenId(null);
        };
        document.addEventListener('keydown', onKey);
        return () => document.removeEventListener('keydown', onKey);
    }, []);

    // Modal komponenti
    const RegionModal = ({ region, onClose }) => {
        if (!region) return null;

        const handleOverlayClick = (e) => {
            if (e.target.classList.contains('region-modal')) onClose();
        };

        return (
            <div
                className="region-modal"
                role="dialog"
                aria-modal="true"
                aria-labelledby="region-modal-title"
                onClick={handleOverlayClick}
            >
                <div className="region-modal__content">
                    <button
                        className="region-modal__close"
                        onClick={onClose}
                        aria-label={t('common.close') || 'Yopish'}
                    >
                        ×
                    </button>

                    <div className="region-modal__media">
                        <img
                            src={region.img}
                            alt={region.title}
                            loading="lazy"
                            className="region-modal__img"
                        />
                    </div>

                    <div className="region-modal__body">
                        <h3 id="region-modal-title" className="region-modal__title">
                            {region.title}
                        </h3>
                        <p className="region-modal__desc">{region.desc}</p>
                    </div>

                    <div className="region-modal__footer">
                        <Link
                            to={`/region/${region.id}`}
                            className="btn primary"
                            onClick={() => setOpenId(null)}
                        >
                            {t('common.read_more') || 'Batafsil'}
                        </Link>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <main className="services-page">
            <Helmet>
                <title>SamTour — Our Services</title>
                <meta
                    name="description"
                    content="Explore our tailored travel services in Uzbekistan — from historical journeys to cultural experiences."
                />
            </Helmet>

            {/* Intro */}
            <section className="intro">
                <div className="container">
                    <h1 className="title-ser">{t('services.title')}</h1>
                    <p className="lead">{t('services.lead')}</p>
                </div>
            </section>

            {/* Services List */}
            <section className="services-grid">
                <div className="container">
                    <div className="grid">
                        {servicesList.map((s) => (
                            <div className="service-card" key={s.title}>
                                <div className="icon">{s.icon}</div>
                                <h3 className="service-title">{s.title}</h3>
                                <p className="service-desc">{s.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Regions */}
            <section className="regions-section">
                <div className="container-reg">
                    <h2 className="section-title">{t('services.regions_title')}</h2>
                    <p className="section-desc">{t('services.regions_desc')}</p>

                    <div className="regions-grid">
                        {regions.map((r) => (
                            <button
                                key={r.id}
                                className="region-card"
                                onClick={() => setOpenId(r.id)}
                                aria-haspopup="dialog"
                                aria-controls="region-modal"
                            >
                                <div className="region-card__imgwrap">
                                    <img src={r.img} alt={r.title} loading="lazy" />
                                </div>
                                <div className="region-card__body">
                                    <h3 className="region-card__title">{r.title}</h3>
                                    <p className="region-card__snippet">{r.desc}</p>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="cta-section">
                <div className="containe">
                    <h2 className="cta-title">{t('services.cta_title')}</h2>
                    <p className="cta-desc">{t('services.cta_desc')}</p>
                    <Link to="/contact" className="btn primary" aria-label="Contact">
                        {t('services.contact_button')}
                    </Link>
                </div>
            </section>

            {/* Modal */}
            <RegionModal region={selectedRegion} onClose={() => setOpenId(null)} />
        </main>
    );
};

export default Services;
