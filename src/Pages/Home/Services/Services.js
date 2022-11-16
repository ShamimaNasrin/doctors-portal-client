import React from 'react';
import fluoride from '../../../assets/images/fluoride.png'
import cavity from '../../../assets/images/cavity.png'
import whitening from '../../../assets/images/whitening.png'
import treatment from '../../../assets/images/treatment.png'
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
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center mx-auto px-2 mt-10' >
                {
                    cardData.map(card => <ServiceCard
                        key={card.id}
                        card={card}></ServiceCard>)
                }
            </div>

            <section>
                <div className="hero mt-20">
                    <div className="hero-content flex-col lg:flex-row justify-between">
                        <div className='lg:w-1/2 md:w-1/2 '>
                            <img className='lg:w-8/12 md:w-8/12 rounded-xl mx-auto' src={treatment} alt='img' />
                        </div>
                        <div className='text-left py-4 lg:w-1/2 md:w-1/2'>
                            <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                            <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                            <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white border-none">Get Started</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;