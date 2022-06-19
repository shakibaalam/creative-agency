import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const Projects = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    const { register, formState: { errors }, handleSubmit } = useForm();

    const { data: projects, isLoading, refetch } = useQuery(['projects', user?.email], () => fetch(`https://gentle-savannah-01985.herokuapp.com/projects?email=${user?.email}`, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json())
    );
    console.log(projects);
    if (isLoading) {
        return <Loading></Loading>
    }

    const onSubmit = data => {
        console.log(data);
        if (!user) {
            navigate('/login');
        }
        else {
            fetch(`https://gentle-savannah-01985.herokuapp.com/projects`, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(data)
            })
                .then(res => res.json())
                .then(inserted => {
                    console.log(inserted);
                    if (inserted) {
                        toast.success('successfully inserted')
                        refetch()
                    }
                });
        }


    }

    return (
        <div className=' my-10'>
            <div>
                <h2 className='text-2xl font-bold text-center'>Add Projects</h2>
                <div className='mt-5'>
                    <form onSubmit={handleSubmit(onSubmit)} className=' grid grid-cols-1 gap-3 justify-items-center'>

                        <div className="form-control w-full max-w-xs text-center">
                            <input type="email" value={user?.email} readOnly className="input input-bordered w-full max-w-xs"
                                {...register("email")} />
                        </div>

                        <div className="form-control w-full max-w-xs text-center">
                            <input type="text" placeholder=" your project-name" className="input input-bordered w-full max-w-xs"
                                {...register("projectName")} />
                        </div>

                        <div className="form-control w-full max-w-xs text-center">
                            <input type="text" placeholder=" your description" className="input input-bordered w-full max-w-xs"
                                {...register("description")} />
                        </div>

                        <div className="form-control w-full max-w-xs text-center">
                            <input type="text" placeholder=" your category" className="input input-bordered w-full max-w-xs"
                                {...register("category")} />
                        </div>

                        <div className="form-control w-full max-w-xs text-center">
                            <input type="date" placeholder="start date" className="input input-bordered w-full max-w-xs"
                                {...register("start")} />
                        </div>

                        <div className="form-control w-full max-w-xs text-center">
                            <input type="date" placeholder="end date" className="input input-bordered w-full max-w-xs"
                                {...register("end")} />
                        </div>


                        <input className='btn  text-white uppercase font-bold  w-full max-w-xs' value='Add' type="submit" />

                    </form>
                </div>
            </div>
            <div className=' lg:mx-32 my-20'>
                {
                    user ? <div>
                        {
                            projects && <div className=''>
                                <div className=' grid lg:grid-cols-3 grid-cols-1 gap-4'>
                                    {
                                        projects?.map((project, index) => <div key={index} class="card lg:w-96 bg-base-100 shadow-xl">
                                            <div class="card-body">
                                                <h2 class="card-title">{project.projectName}</h2>
                                                <p>{project.desc}</p>
                                                <p>{project.category}</p>
                                                <p>{project.start}</p>
                                                <p>{project.end}</p>
                                            </div>
                                        </div>)
                                    }
                                </div>
                            </div>
                        }
                    </div>
                        :
                        <div>
                        </div>

                }
            </div>
        </div>
    );
};

export default Projects;