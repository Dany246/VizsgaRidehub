import Navbar from '@/Components/Navbar'
import { Head } from '@inertiajs/react'
import React from 'react'
import { SettlementsChoosing } from './settlementsChoosing'

const Orderspage = ({ auth, settlements }) => {
    return (
        <div>
            <Head title="RideHub" />
            <Navbar auth={auth} />
            <SettlementsChoosing settlements={settlements} />

        </div>
    )
}

export default Orderspage
