import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ treatment, selectedDate, setTreatment }) => {
    const { _id, name, slots } = treatment;
    const date = format(selectedDate, 'PP');

    const handleBooking = (e) => {
        e.preventDefault();
        const form = e.target;
        const slot = form.slot.value;
        const patientName = form.name.value;
        const phone = form.phone.value;
        const email = form.email.value;
        console.log(slot, patientName, phone, email);

        const booking = {
            appointmentDate: date,
            treatment: name,
            patient: patientName,
            slot,
            email,
            phone,
        }

        console.log(booking);
        setTreatment(null);
        
    }

    // [3, 4, 5].map((value, i) => console.log(value))
    return (
        <div>
            {/* Put this part before </body> tag */}
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm bg-secondary border-none btn-circle absolute right-2 top-2 text-white hover:bg-primary">✕</label>
                    <h3 className="text-lg font-bold mb-9">{name}</h3>

                    <form onSubmit={handleBooking}>
                        <div className="form-control mt-4">
                            <input type="text" readOnly value={date} className="input w-full bg-info" />
                        </div>
                        <div className="form-control mt-4">
                            <select name='slot' className="select w-full bg-info">
                                {
                                    slots.map((slot, i) => <option
                                        value={slot}
                                        key={i}
                                    >{slot}</option>)
                                }
                            </select>
                        </div>

                        <div className="form-control mt-4">
                            <input type="text" name='name' placeholder="Full Name" className="input input-bordered" />
                        </div>
                        <div className="form-control mt-4">
                            <input type="number" name='phone' placeholder="Phone Number" className="input input-bordered" />
                        </div>
                        <div className="form-control mt-4">
                            <input type="email" name='email' placeholder="email" className="input input-bordered" />
                        </div>

                        <div className="form-control mt-4">
                            <button className="btn btn-primary text-white">Submit</button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default BookingModal;