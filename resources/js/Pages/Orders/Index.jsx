import Navbar from '@/Components/Navbar'
import { Head } from '@inertiajs/react'
import React from 'react'
import { SettlementsChoosing } from './settlementsChoosing'
import DriversChoosing from './driversChoosing'
import { OrderButton } from './OrderButton'

const Orderspage = ({ auth, settlements, drivers }) => {
    
    
    return (
        <>
            <div>
                <Head title="RideHub" />
                <Navbar auth={auth} />

            </div>
            <div className='flex flex-col justify-center'>
                <SettlementsChoosing settlements={settlements} />
                <DriversChoosing drivers={drivers} />
                <OrderButton driver={drivers}/>
                
            </div>


        </>)
}

export default Orderspage
