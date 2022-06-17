
import { FcGoogle } from 'react-icons/fc';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import useToken from '../../hook/useToken';

const Signup = () => {
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const [token] = useToken(googleUser || user)
    const navigate = useNavigate();

    if (googleLoading || loading || updating) {
        return <Loading></Loading>
    }
    let signUpError;
    if (googleError || error || updateError) {
        signUpError = <p className='text-red-600'>{googleError?.message || error?.message || updateError?.message}</p>
    }

    if (token) {
        navigate('/profile');
    }

    const onSubmit = async data => {
        // console.log(data);
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.name });
        console.log('update done');

    };
    return (
        <div className="card w-1/2 mx-auto my-auto bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title justify-center text-secondary text-3xl font-bold pb-5">Sign Up</h2>

                <form onSubmit={handleSubmit(onSubmit)} className=' grid grid-cols-1 gap-3 justify-items-center'>

                    <div className="form-control w-full max-w-xs text-center">
                        <input type="text" placeholder="Enter your name" className="input input-bordered w-full max-w-xs"
                            {...register("name", {
                                required: {
                                    value: true,
                                    message: 'Name is required'
                                }
                            })} />

                        <label className="label">
                            {errors.name?.type === 'required' && <span className="label-text-alt text-red-600">{errors.name.message}</span>}
                        </label>

                    </div>

                    <div className="form-control w-full max-w-xs text-center">
                        <input type="email" placeholder="Enter your email" className="input input-bordered w-full max-w-xs"
                            {...register("email", {
                                required: {
                                    value: true,
                                    message: 'Email is required'
                                },
                                pattern: {
                                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                    message: 'Provide a valid pattern'
                                }
                            })} />

                        <label className="label">
                            {errors.email?.type === 'required' && <span className="label-text-alt text-red-600">{errors.email.message}</span>}

                            {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-600">{errors.email.message}</span>}
                        </label>

                    </div>

                    <div className="form-control w-full max-w-xs">
                        <input type="password" placeholder="Enter your password" className="input input-bordered w-full max-w-xs"
                            {...register("password", {
                                required: {
                                    value: true,
                                    message: 'Password is required'
                                },
                                minLength: {
                                    value: 6,
                                    message: 'Password should be 6 characters'
                                }
                            })} />

                        <label className="label">
                            {errors.password?.type === 'required' && <span className="label-text-alt text-red-600">{errors.password.message}</span>}

                            {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-600">{errors.password.message}</span>}
                        </label>
                    </div>

                    <input className='btn  text-white uppercase font-bold  w-full max-w-xs' type="submit" />

                    <p>Already have an account? <Link className='text-accent' to='/login'>SignIn</Link> </p>

                    {signUpError}
                </form>

                <div className="flex flex-col w-full border-opacity-50">
                    <div className="divider">OR</div>
                </div>

                <button onClick={() => signInWithGoogle()} className="btn btn-outline lg:w-1/2 mx-auto text-secondary"><FcGoogle className='mr-2 text-xl' /> Continue with Google</button>
            </div>
        </div>
    );

};

export default Signup;