import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import {  usePage } from '@inertiajs/react';
import { useState, useEffect } from 'react';


export default function Dashboard({auth}) {
    const user = usePage().props.auth.user;

        const [loaded, setLoaded] = useState(false);
    
        useEffect(() => {
          setLoaded(true);
        }, []);
   
    return (
        <AuthenticatedLayout
            header={auth.user.role !== 'driver' && (
                <div className={`text-xl my-20 font-semibold text-center leading-tight text-white transition-opacity duration-1000 delay-100 ${
                    loaded ? "opacity-100" : "opacity-0"
                  }`}>
                    <h1 className='text-2xl p-2 my-20'>Profile<span className='bg-orange-500 font-bold text-black px-2 rounded-lg'>Datas:</span></h1> <br />
                    {user.name} <br />
                    {user.email} <br />
                    <p>Thank you for using our service.</p>
                </div>
            )}

           
        >
            <Head title="Dashboard" />

            {auth.user.role === 'driver' && (
                <div className={`text-xl my-20 font-semibold text-center leading-tight text-white transition-opacity duration-1000 delay-100 ${
                  loaded ? "opacity-100" : "opacity-0"
                }`}>
                  <h1 className='text-2xl p-2 my-20'>Profile<span className='bg-orange-500 font-bold text-black px-2 rounded-lg'>Datas:</span></h1> <br />
                  {user.name} <br />
                  Driver <br />
                </div>
            )}
            
            {auth.user.role !== 'driver' && (
        <a href="/userorder" className="flex justify-center text-black font-bold mt-32 text-center w-2/12 mx-auto bg-orange-600 py-2 px-4 rounded">
          Check Orders
        </a>
      )}
           
            {auth.user.role === 'driver' && (
        <a href="/driver-dashboard" className="flex justify-center text-black font-bold mt-32 text-center w-2/12 mx-auto bg-orange-600 py-2 px-4 rounded">
          Check Orders
        </a>
      )}
        </AuthenticatedLayout>
    );
}

