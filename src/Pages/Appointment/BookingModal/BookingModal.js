import React from 'react';

const BookingModal = ({ treatment }) => {
    const { _id, name, slots } = treatment;
    return (
        <div>
            {/* Put this part before </body> tag */}
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm bg-secondary border-none btn-circle absolute right-2 top-2 text-white hover:bg-primary">✕</label>
                    <h3 className="text-lg font-bold mb-9">{name}</h3>

                    <form >
                        <div className="form-control mt-4 bg-info rounded-lg">
                            <p className='text-justify px-4 py-3 rounded-lg'>date</p>
                        </div>
                        <div className="form-control mt-4 bg-info rounded-lg">
                            <p className='text-justify px-4 py-3 rounded-lg'>Time</p>
                        </div>

                        <div className="form-control mt-4">
                            <input type="text" value='name' placeholder="Full Name" className="input input-bordered" />
                        </div>
                        <div className="form-control mt-4">
                            <input type="number" value='password' placeholder="Phone Number" className="input input-bordered" />
                        </div>
                        <div className="form-control mt-4">
                            <input type="email" value='email' placeholder="email" className="input input-bordered" />
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