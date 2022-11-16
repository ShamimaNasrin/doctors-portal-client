import React from 'react';
import { format } from 'date-fns';

const AvailableAppointments = ({ selectedDate }) => {
    return (
        <div>
            <p className='text-semibold text-primary text-center lg:mt-9'>Available Appointments on {format(selectedDate, 'PP')}</p>
        </div>
    );
};

export default AvailableAppointments;