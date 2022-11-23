import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/Authprovider';
import useToken from '../../hooks/useToken';

const Login = () => {
    const { signIn } = useContext(AuthContext);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [loginError, setLoginError] = useState('');
    const [loginUserEmail, setLoginUserEmail] = useState('');
    const [token] = useToken(loginUserEmail);

    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

    if (token) {
        navigate(from, { replace: true });
    }

    const handleLogin = data => {
        console.log(data);
        setLoginError('');
        //Login
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setLoginUserEmail(data.email);
                alert('Login successfull');

            })
            .catch(e => {
                console.error(e.message);
                setLoginError(e.message);
            })
    }

    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7 shadow-xl'>
                <h2 className='text-xl text-center'>Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>
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
                                minLength: { value: 6, message: 'Password must be 6 characters or longer' }
                            })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p className='text-red-600 text-xs pt-1'>{errors.password?.message}</p>}

                        <label className="label pt-0"> <span className="label-text mb-2 text-xs">Forget Password?</span></label>

                    </div>


                    <input className='btn btn-accent w-full text-white' value="Login" type="submit" />
                    <div>
                        {loginError && <p className='text-red-600'>{loginError}</p>}
                    </div>
                </form>
                <p className='mt-2 text-center text-xs'>New to Doctors Portal <Link className='text-secondary' to="/signup">Create new Account</Link></p>
                <div className="divider">OR</div>
                <button className='btn btn-outline w-full mt-3'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Login;