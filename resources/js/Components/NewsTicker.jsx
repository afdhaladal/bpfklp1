// NewsTicker.js
import React from 'react';
import './NewsTicker.css';

const NewsTicker = ({ items }) => {
    return (
        <div className="news-ticker">
            <div className="ticker-content">
                {items.map((item, index) => (
                    <span key={index} className="ticker-item">
                        {item}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default NewsTicker;
