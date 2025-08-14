import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FiPhone, FiMenu, FiX } from "react-icons/fi";
import { useTranslation } from "react-i18next";
import i18n from "../i18n";
import Logo from "./Logo";
import "./Header.css";

const LANGUAGES = [
    { code: "en", label: "English" },
    { code: "fr", label: "Français" },
    { code: "ru", label: "Русский" },
    { code: "uz", label: "O‘zbek" },
    { code: "ja", label: "日本語" },
    { code: "zh", label: "中文" },
    { code: "ko", label: "한국어" },
    { code: "de", label: "Deutsch" },
];

export default function Header() {
    const { t } = useTranslation();
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef(null);

    const handleLangChange = (e) => {
        const selectedLang = e.target.value;
        i18n.changeLanguage(selectedLang);
        localStorage.setItem("i18nextLng", selectedLang);
    };

    const closeMenu = () => setMenuOpen(false);

    // Sahifaning boshqa joyini bosganda menyu yopiladi
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                setMenuOpen(false);
            }
        };
        if (menuOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [menuOpen]);

    return (
        <header className="site-header">
            <div className="container">
                <NavLink to="/" className="logo" onClick={closeMenu}>
                    <Logo />
                </NavLink>

                <nav className="nav-desktop">
                    <NavLink to="/" end className="nav-link">{t("nav.home")}</NavLink>
                    <NavLink to="/about" className="nav-link">{t("nav.about")}</NavLink>
                    <NavLink to="/services" className="nav-link">{t("nav.services")}</NavLink>
                    <NavLink to="/gallery" className="nav-link">{t("nav.gallery")}</NavLink>
                </nav>

                <div className="controls-desktop">
                    <select
                        onChange={handleLangChange}
                        value={localStorage.getItem("i18nextLng") || "en"}
                    >
                        {LANGUAGES.map((l) => (
                            <option key={l.code} value={l.code}>{l.label}</option>
                        ))}
                    </select>
                    <NavLink to="/contact" className="btn-contact">
                        <FiPhone /> {t("nav.contact")}
                    </NavLink>
                </div>

                <button
                    className="hamburger"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Menu"
                >
                    {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                </button>
            </div>

            {/* Overlay butun sahifaga */}
            {menuOpen && <div className="overlay"></div>}

            {/* Mobile menu */}
            <div ref={menuRef} className={`mobile-menu ${menuOpen ? "open" : ""}`}>
                <NavLink to="/" end onClick={closeMenu}>{t("nav.home")}</NavLink>
                <NavLink to="/about" onClick={closeMenu}>{t("nav.about")}</NavLink>
                <NavLink to="/services" onClick={closeMenu}>{t("nav.services")}</NavLink>
                <NavLink to="/gallery" onClick={closeMenu}>{t("nav.gallery")}</NavLink>
                <NavLink to="/contact" onClick={closeMenu} className="btn-contact">
                    <FiPhone /> {t("nav.contact")}
                </NavLink>
                <select
                    onChange={handleLangChange}
                    value={localStorage.getItem("i18nextLng") || "en"}
                >
                    {LANGUAGES.map((l) => (
                        <option key={l.code} value={l.code}>{l.label}</option>
                    ))}
                </select>
            </div>
        </header>
    );
}
