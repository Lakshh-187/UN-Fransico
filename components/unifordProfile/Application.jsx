import Image from 'next/image'
import React from 'react'


// const applicationData = {
//     sname: 'afd',
//     dob: 'adfasd',
//     email: 'asdfa',
//     number: '123123',
//     city: 'fadsf',
//     pastEducation: [
//         {
//             name: '10th',
//             board: 'afdf',
//             percentage: 'fasdf',
//         },
//         {
//             name: '10th',
//             board: 'afdf',
//             percentage: 'fasdf',
//         },
//     ]
// }

const ApplicationsData = [
    {
        name: 'Google',
        status: 'Pending',
        date: '12/12/2021',
        img: "/home/Home/scholar.jpg"
    },
    {
        name: 'facebook',
        status: 'Successfull',
        date: '12/12/2021',
        img: "/home/Home/scholar.jpg"
    },{
        name: 'Netflix',
        status: 'Pending',
        date: '12/12/2021',
        img: "/home/Home/scholar.jpg"
    },{
        name: 'Google',
        status: 'Successfull',
        date: '12/12/2021',
        img: "/home/Home/scholar.jpg"
    },{
        name: 'Google',
        status: 'Successfull',
        date: '12/12/2021',
        img: "/home/Home/scholar.jpg"
    },
]
function Application() {
    return (
        <div className='w-full shadow-xl rounded-xl bg-white lg:p-10 p-3'>
        <h3 className='lg:text-xl text-lg font-medium'>Applications</h3>
            <div className='w-full  rounded-xl mx-auto grid md:grid-cols-2 grid-cols-1 p-4 gap-5'>
                {
                    ApplicationsData.map((item, idx) => {
                        return <div key={idx} className='w-full shadow-xl rounded-xl p-5 flex gap-5'>
                            <div className=''>
                                <Image src={item.img} alt="..." height={100} width={100} className='w-full h-full object-cover rounded-xl aspect-[3/2]' />
                            </div>
                            <div className='lg:w-3/4 w-full'>
                                <h1 className='text-lg font-bold'>{item.name}</h1>
                                <h1 className={`text-base font-medium ${item.status === "Pending" ? "text-red-500": "text-green-500"}`}>Status: {item.status}</h1>
                                <h1 className='text-base font-medium'>Applied on: {item.date}</h1>
                            </div>
                        </div>
                    })
                }
               
            </div>
        </div>
    )
}

export default Application