import Navbar from '@/Components/Navbar'
import { Head } from '@inertiajs/react'
import React from 'react'

const Orderspage = ({ auth }) => {
    return (
        <div>
            <Head title="RideHub" />
            <Navbar auth={auth} />


        </div>
    )
}

export default Orderspage
