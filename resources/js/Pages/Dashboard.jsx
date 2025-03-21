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
            header={ 
                <div className={`text-xl font-semibold text-center leading-tight text-white transition-opacity duration-1000 delay-100 ${
                    loaded ? "opacity-100" : "opacity-0"
                  }`}>
                    <h1 className='text-2xl p-2'>Profile <span className='text-orange-600'>Datas:</span></h1> <br />
                    {user.name} <br />
                    {user.email} <br />
                    Thank you for using our service <span className='font-bold text-orange-700'>{}</span> times. <br />
                   
                 
                </div>
                
            }
        >
            <Head title="Dashboard" />

            <div className={`text-center p-60 transition-opacity duration-1000 delay-300 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}>
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-orange-600 shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            You're logged in!
                        </div>
                    </div>
                </div>
            </div>
            {auth.user.role === 'driver' && (
        <a href="/driver-dashboard" className="text-blue-500">
          Check Orders
        </a>
      )}
        </AuthenticatedLayout>
    );
}

