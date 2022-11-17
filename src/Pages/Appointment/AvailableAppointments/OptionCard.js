import React from 'react';
import PrimaryBtn from '../../../components/PrimaryBtn/PrimaryBtn';

const OptionCard = ({ option, setTreatment }) => {
    //console.log(option);
    const { name, slots } = option;
    return (
        <div>
            <div className="card shadow-xl px-6">
                <div className="card-body text-center justify-center">
                    <h2 className="card-title text-bold text-primary ">{name}</h2>
                    <p>{slots.length > 0 ? slots[0] : 'Select Another day'}</p>
                    <p className=''> {slots.length > 1 ? <span>{slots.length} spaces </span> : 'No space '}available</p>
                    <div className="card-actions justify-end">
                        {/* The button to open modal */}
                        <label
                            htmlFor="booking-modal"
                            className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white border-none"
                            onClick={() => setTreatment(option)}
                        >Book Appointment</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OptionCard;