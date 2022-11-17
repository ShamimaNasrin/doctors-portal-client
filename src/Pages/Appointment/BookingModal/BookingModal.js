import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ treatment, selectedDate }) => {
    const { _id, name, slots } = treatment;
    const date = format(selectedDate, 'PP');
    return (
        <div>
            {/* Put this part before </body> tag */}
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm bg-secondary border-none btn-circle absolute right-2 top-2 text-white hover:bg-primary">✕</label>
                    <h3 className="text-lg font-bold mb-9">{name}</h3>

                    <form >
                        <div className="form-control mt-4">
                            <input type="text" disabled value={date} className="input w-full input-bordered" />
                        </div>
                        <div className="form-control mt-4">
                            <select className="select select-bordered w-full">
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