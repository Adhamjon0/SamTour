import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import './Footer.css';
import {
    BiLogoInstagramAlt,
    BiLogoFacebook,
    BiLogoTelegram,
    BiLogoWhatsapp
} from 'react-icons/bi';

export default function Footer() {
    const { t } = useTranslation();

    return (
        <footer className="site-footer minimal-footer">
            <div className="footer-inner">
                <div className="footer-section">
                    <h4 className="footer-title">SamTour</h4>
                    <p className="footer-text">
                        {t("footer.description")}
                    </p>
                </div>

                <div className="footer-section">
                    <h4 className="footer-title">{t("footer.quick_links")}</h4>
                    <ul className="footer-links">
                        <li><Link to="/" className="footer-link">{t("nav.home")}</Link></li>
                        <li><Link to="/about" className="footer-link">{t("nav.about")}</Link></li>
                        <li><Link to="/services" className="footer-link">{t("nav.services")}</Link></li>
                        <li><Link to="/contact" className="footer-link">{t("nav.contact")}</Link></li>
                        <li><Link to="/gallery" className="footer-link">{t("nav.gallery")}</Link></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h4 className="footer-title">{t("footer.connect")}</h4>
                    <div className="socials icons-only">
                        <a href="https://instagram.com/adhamjon.tour.guide" className="social-icon" target="_blank" rel="noopener noreferrer">
                            <BiLogoInstagramAlt />
                        </a>
                        <a href="https://www.facebook.com/adhamjon.sodiqov.2025/" className="social-icon" target="_blank" rel="noopener noreferrer">
                            <BiLogoFacebook />
                        </a>
                        <a href="https://wa.me/998901012470" className="social-icon" target="_blank" rel="noopener noreferrer">
                            <BiLogoWhatsapp />
                        </a>
                        <a href="https://t.me/adhamjonsodiqov18" className="social-icon" target="_blank" rel="noopener noreferrer">
                            <BiLogoTelegram />
                        </a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="copyright">
                    © {new Date().getFullYear()} SamTour. {t("footer.rights")}
                </div>
            </div>
        </footer>
    );
}
