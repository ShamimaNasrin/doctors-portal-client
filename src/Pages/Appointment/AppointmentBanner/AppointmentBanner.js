import React from 'react';
import img1 from '../../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';


const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {
    // const [selectedDate, setSelectedDate] = useState(new Date());
    return (
        <div>
            <div className="hero banner-bg md:h-screen lg:min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse p-5 justify-around">
                    <img src={img1} className="lg:w-1/2 rounded-lg" alt='banner' />
                    <div className=''>
                        <DayPicker
                            mode="single"
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                        />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AppointmentBanner;