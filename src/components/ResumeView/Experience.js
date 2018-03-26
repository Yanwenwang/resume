import React from 'react';

import './Experience.scss';

export const Experience = ({ time, title, location, position, paragraph }) => {

    const paragraphComponent = paragraph.map((paragraph, i) => {
        return (
            <p key={i} className="text-primary lh-15">{paragraph}</p>
        );
    });

    return (
        <div className="experience__container">
            <div className="experience__time">{time}</div>
            <div>
                <div>
                    <span className="experience__title">{title}</span>
                    <span className="text-primary">{location}</span>
                </div>
                <p className="experience__title experience__title--italic">{position}</p>
                <div>{paragraphComponent}</div>
            </div>
        </div>
    );
};

export default Experience;