import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ treatment, selectedDate }) => {
    const { _id, name, slots } = treatment;
    const date = format(selectedDate, 'PP');

    const handleBooking = (e) => {
        e.preventDefault();
        const form = e.target;
        const slot = form.slot.value;
        const name = form.name.value;
        const phone = form.phone.value;
        const email = form.email.value;
        console.log(slot, name, phone, email);

    }
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
                                    slots.map(slot => <option value={slot}>{slot}</option>)
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