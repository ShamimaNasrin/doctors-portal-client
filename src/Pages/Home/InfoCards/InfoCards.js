import React from 'react';
import clock from '../../../assets/icons/clock.svg';
import marker from '../../../assets/icons/marker.svg';
import phone from '../../../assets/icons/phone.svg';
import InfoCard from './InfoCard';

const InfoCards = () => {

    const cardData = [
        {
            id: 1,
            title: 'Opening Hours',
            description: 'Lorem Ipsum is simply dummy text of the pri',
            icon: clock,
            bgColor: 'bg-gradient-to-r from-primary to-secondary text-white'
        },
        {
            id: 2,
            title: 'Visit our location',
            description: 'Brooklyn, NY 10036, United States',
            icon: marker,
            bgColor: 'bg-neutral text-white'
        },
        {
            id: 3,
            title: 'Contact us now',
            description: '+000 123 456789',
            icon: phone,
            bgColor: 'bg-gradient-to-r from-primary to-secondary text-white'
        },
    ]
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mx-auto px-7' >
            {
                cardData.map(card =><InfoCard
                key={card.id}
                card={card}></InfoCard>)
            }
        </div>
    );
};

export default InfoCards;