import Navbar from '@/Components/Navbar'
import { Head } from '@inertiajs/react'
import React from 'react'
import { SettlementsChoosing } from './settlementsChoosing'
import DriversChoosing from './driversChoosing'

const Orderspage = ({ auth, settlements, drivers }) => {
    return (
        <>
            <div>
                <Head title="RideHub" />
                <Navbar auth={auth} />

            </div>
            <div className='flex flex-wrap justify-center'>
                <SettlementsChoosing settlements={settlements} />
                <DriversChoosing drivers={drivers} />
            </div>
        </>)
}

export default Orderspage
