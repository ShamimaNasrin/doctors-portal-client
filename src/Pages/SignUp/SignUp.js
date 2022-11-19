import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/Authprovider';

const SignUp = () => {
    const { signUp, UpdateUser } = useContext(AuthContext);
    const [signUpError, setSignUpError] = useState('');
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

    //react-hook-form
    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleSignUp = (data) => {
        console.log(data);
        //console.log(errors);
        setSignUpError('');

        //create user
        signUp(data.email, data.password)
            .then(result => {
                const user = result.user;
                navigate(from, { replace: true });
                alert('signup successfull');

                const userInfo = {
                    displayName: data.name
                }
                UpdateUser(userInfo)
                    .then(() => { })
                    .catch(err => console.log(err));

            })
            .catch(e => {
                console.error(e.message);
                setSignUpError(e.message);
            })
    }



    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7 shadow-xl'>
                <h2 className='text-xl text-center'>Sign up</h2>
                <form onSubmit={handleSubmit(handleSignUp)}>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Name</span></label>
                        <input type="text" {...register("name", {
                            required: "Name is Required"
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.name && <p className='text-red-600 text-xs pt-1'>{errors.name.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Email</span></label>
                        <input type="email"
                            {...register("email", {
                                required: "Email Address is required"
                            })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-600 text-xs pt-1'>{errors.email?.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Password</span></label>
                        <input type="password"
                            {...register("password", {
                                required: "Password is required",
                                minLength: { value: 6, message: 'Password must be 6 characters or longer' },
                                // pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'password must have an Uppercase, number and special character' }
                            })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p className='text-red-600 text-xs pt-1'>{errors.password?.message}</p>}
                    </div>

                    <input className='btn btn-accent w-full text-white mt-5' value="Sign Up" type="submit" />
                    <div>
                        {signUpError && <p className='text-red-600'>{signUpError}</p>}
                    </div>
                </form>
                <p className='mt-2 text-center text-xs'>Already have an account <Link className='text-secondary' to="/login">Please Login</Link></p>

            </div>
        </div>
    );

};

export default SignUp;