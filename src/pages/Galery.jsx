import React, { useState } from 'react';
import './Galery.css';
import { Helmet } from 'react-helmet';


import bibixonim from '../photos/bibixonim.jpg';
import buxoroArk from '../photos/buxoroArk.jpg';
import city from '../photos/city.jpg';
import Temur from '../photos/A_T.jpg';
import osh from '../photos/osh.jpg';
import tosh from '../photos/toshkent.jpg';
import tosh2 from '../photos/tosh.jpeg';
import tosh3 from '../photos/tosh2.webp';
import shohizinda from '../photos/shoh.jpg';
import somsa from '../photos/somsa.jpg';
import norn from '../photos/norn.jpg';
import minoraiKalon from '../photos/minorai kalon2.jpeg';
import xiva from '../photos/xiva.jpg';
import qogoz from '../photos/qogoz.webp';
import observatoria from '../photos/observatoria.jpg';

const images = [
    { id: 1, name: 'Bibixonim', image: bibixonim },
    { id: 2, name: 'Ark of Bukhara', image: buxoroArk },
    { id: 3, name: 'Samarcand city ', image: city },
    { id: 4, name: 'Amir Temur', image: Temur },
    { id: 5, name: 'Osh palov', image: osh },
    { id: 6, name: 'Tashkent', image: tosh },
    { id: 7, name: 'Tashkent', image: tosh2 },
    { id: 8, name: 'Tashkent', image: tosh3 },
    { id: 9, name: 'Shohizinda', image: shohizinda },
    { id: 10, name: 'Somsa', image: somsa },
    { id: 11, name: 'Norn', image: norn },
    { id: 12, name: 'Minorai Kalon', image: minoraiKalon },
    { id: 13, name: 'Xiva', image: xiva },
    { id: 14, name: 'Ulugbek Observatory', image: observatoria },
    { id: 15, name: 'Samarcand paper', image: qogoz }
];

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const openModal = (image) => setSelectedImage(image);
    const closeModal = () => setSelectedImage(null);

    return (
        <section className="gallery-section">
            <Helmet>
                <title>SamTour — Travel Gallery</title>
                <meta
                    name="description"
                    content="Browse our gallery of stunning Uzbekistan destinations and unforgettable travel moments."
                />
            </Helmet>
            <h2 className="gallery-title">Historical Destinations</h2>
            <div className="gallery-grid">
                {images.map((place) => (
                    <div
                        className="gallery-card"
                        key={place.id}
                        onClick={() => openModal(place.image)}
                    >
                        <img src={place.image} alt={place.name} />
                        <div className="gallery-overlay">
                            <h3>{place.name}</h3>
                        </div>
                    </div>
                ))}
            </div>

            {selectedImage && (
                <div className="modal" onClick={closeModal}>
                    <span className="close">&times;</span>
                    <img src={selectedImage} alt="Selected" className="modal-content" />
                </div>
            )}
        </section>
    );
};

export default Gallery;
