import React from 'react';

const OptionCard = ({ option, setTreatment }) => {
    //console.log(option);
    const { name,price, slots } = option;
    return (
        <div>
            <div className="card shadow-xl px-6">
                <div className="card-body text-center justify-center">
                    <h2 className="card-title text-bold text-primary ">{name}</h2>
                    <p>{slots.length > 0 ? slots[0] : 'Select Another day'}</p>
                    <p className=''> {slots.length > 1 ? <span>{slots.length} spaces </span> : 'No space '}available</p>
                    <p><small>Price: ${price}</small></p>
                    <div className="card-actions justify-end">
                        {/* The button to open modal */}
                        <label
                            disabled={slots.length === 0}
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