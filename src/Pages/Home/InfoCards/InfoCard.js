import React from 'react';

const InfoCard = ({ card }) => {
    const { title, description, icon, bgColor } = card;
    return (
        <div>
            <div className={`card md:card-side p-5 lg:h-5/6 ${bgColor}`}>
                <figure><img src={icon} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{description}</p>  
                </div>
            </div>
        </div>
    );
};

export default InfoCard;