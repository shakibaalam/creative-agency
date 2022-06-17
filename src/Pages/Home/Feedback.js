import React from 'react';
import customer1 from '../../images/customer-1.png';
import customer2 from '../../images/customer-2.png';
import customer3 from '../../images/customer-3.png';

const Feedback = () => {
    const clients = [
        {
            id: 1,
            name: "Nash Patrik",
            position: "CEO, Manpol",
            img: customer2,
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat "
        },
        {
            id: 2,
            name: "Miriam Barron",
            position: "CEO, Manpol",
            img: customer1,
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat "
        },
        {
            id: 3,
            name: "Bria Malone",
            position: "CEO, Manpol",
            img: customer3,
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat "
        },
    ]
    return (
        <div className=' lg:mx-32 py-32 px-5'>
            <div className=' grid lg:grid-cols-3 grid-cols-1 gap-4'>
                {
                    clients.map((client, index) => <div key={index}>
                        <div class="card card-compact lg:w-96 bg-base-100 mx-auto">
                            <div className=' flex'>
                                <div class="avatar">
                                    <div class="w-16 rounded-xl">
                                        <img src={client.img} alt='' />
                                    </div>
                                </div>
                                <div className=' ml-5'>
                                    <h2 class=" font-serif font-bold">{client.name}</h2>
                                    <p>{client.position}</p>
                                </div>
                            </div>
                            <div class="card-body">
                                <p>{client.desc}</p>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Feedback;