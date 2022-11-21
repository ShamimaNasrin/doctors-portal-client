import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import OptionCard from './OptionCard';
import BookingModal from '../BookingModal/BookingModal';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../Shared/Loading/Loading';

const AvailableAppointments = ({ selectedDate }) => {
    // const [appointmentOptions, setAppointmentOptions] = useState([]);
    const [treatment, setTreatment] = useState(null);
    const date = format(selectedDate, 'PP');

    //fetching appointmentOptions data using react query
    const { data: appointmentOptions = [], refetch, isLoading } = useQuery({
        queryKey: ['appointmentOptions', date],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/appointmentOptions?date=${date}`);
            const data = await res.json();

            return data;
        }
    })

    if (isLoading) {
        return <Loading></Loading>
    }

    //fetching appointmentOptions data using useEffect
    // useEffect(() => {
    //     fetch('http://localhost:5000/appointmentOptions')
    //         .then(res => res.json())
    //         .then(data => setAppointmentOptions(data))
    // }, [])

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
                    setTreatment={setTreatment}
                    refetch={refetch}
                >
                </BookingModal>
            }
        </div>
    );
};

export default AvailableAppointments;