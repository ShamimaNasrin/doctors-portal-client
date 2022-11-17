import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import OptionCard from './OptionCard';
import BookingModal from '../BookingModal/BookingModal';

const AvailableAppointments = ({ selectedDate }) => {
    const [appointmentOptions, setAppointmentOptions] = useState([]);
    const [treatment, setTreatment] = useState(null);

    useEffect(() => {
        fetch('appointmentOptions.json')
            .then(res => res.json())
            .then(data => setAppointmentOptions(data))
    }, [])

    return (
        <div>
            <p className='text-semibold text-primary text-center lg:mt-9'>Available Appointments on {format(selectedDate, 'PP')}</p>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 justify-items-center mx-auto px-2 my-10 justify-center lg:w-4/5'>
                {
                    appointmentOptions.map(option => <OptionCard
                        key={option._id}
                        option={option}
                        setTreatment={setTreatment}>
                    </OptionCard>)
                }
            </div>
            {
                treatment && <BookingModal
                    selectedDate={selectedDate}
                    treatment={treatment}
                >
                </BookingModal>
            }
        </div>
    );
};

export default AvailableAppointments;