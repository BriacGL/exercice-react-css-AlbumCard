import { useState } from 'react';
import EauDeSourceImage from '../../assets/EauDeSource.jpg';
import './AlbumCard.scss';

const AlbumCard = () => {
const [rating, setRating] = useState(0);

const handleRatingChange = (value) => {
    setRating(value);
};

return (
    <div className="card">
    <div
        className="album-cover"
        style={{
        backgroundImage: `url(${EauDeSourceImage})`,
        backgroundSize: 'cover',
        width: '100px',
        height: '100px',
        }}
    ></div>
    <div className="info">
        <h2 className="artist-name">Souffrance</h2>
        <p className="album-title">Eau de Source</p>
        <p className="release-year">2023</p>
        <div className="rating">
        {[...Array(5)].map((_, index) => (
            <label key={index}>
            <input
                type="checkbox"
                value={index + 1}
                checked={index < rating}
                onChange={() => handleRatingChange(index + 1)}
            />
            <span className="star">&#9733;</span>
            </label>
        ))}
        </div>
    </div>
    </div>
);
};

export default AlbumCard;