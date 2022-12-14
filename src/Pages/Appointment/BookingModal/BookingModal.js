import { format } from 'date-fns';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../contexts/Authprovider';

const BookingModal = ({ treatment, selectedDate, setTreatment, refetch }) => {
    const { user } = useContext(AuthContext);
    const { _id, name, slots, price } = treatment;
    const date = format(selectedDate, 'PP');

    const handleBooking = (e) => {
        e.preventDefault();
        const form = e.target;
        const slot = form.slot.value;
        const patientName = form.name.value;
        const phone = form.phone.value;
        const email = form.email.value;
        //console.log(slot, patientName, phone, email);

        const booking = {
            appointmentDate: date,
            treatment: name,
            patient: patientName,
            slot,
            email,
            phone,
            price 
        }

        //send booking data to server
        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                //console.log(data);
                if (data.acknowledged) {
                    setTreatment(null);
                    toast.success('Booking confirmed');
                    refetch();
                }
                //if appointment not create
                else{
                    toast.error(data.message);
                }
            })

    }

    // [3, 4, 5].map((value, i) => console.log(value))
    return (
        <div>
            {/* Put this part before </body> tag */}
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm bg-secondary border-none btn-circle absolute right-2 top-2 text-white hover:bg-primary">???</label>
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
                            <input type="text" name='name' defaultValue={user?.displayName} disabled placeholder="Full Name" className="input input-bordered" />
                        </div>
                        <div className="form-control mt-4">
                            <input type="email" name='email' defaultValue={user?.email} readOnly placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control mt-4">
                            <input type="number" name='phone' placeholder="Phone Number" className="input input-bordered" />
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