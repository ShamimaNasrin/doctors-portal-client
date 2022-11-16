import React from 'react';
import fluoride from '../../../assets/images/fluoride.png'
import cavity from '../../../assets/images/cavity.png'
import whitening from '../../../assets/images/whitening.png'
import ServiceCard from './ServiceCard';

const Services = () => {
    const cardData = [
        {
            id: 1,
            title: 'Fluoride Treatment',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            icon: fluoride,

        },
        {
            id: 2,
            title: 'Cavity Filling',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            icon: cavity,

        },
        {
            id: 3,
            title: 'Teeth Whitening',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            icon: whitening,

        },
    ]
    return (
        <div className='mx-auto text-center mt-16'>
            <h2 className='font-bold text-primary'>OUR SERVICES</h2>
            <h2 className='text-3xl'>Services We Provide</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 justify-items-center mx-auto px-2 mt-10' >
                {
                    cardData.map(card => <ServiceCard
                        key={card.id}
                        card={card}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;