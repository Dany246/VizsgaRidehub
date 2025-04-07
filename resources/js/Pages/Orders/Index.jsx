import Navbar from '@/Components/Navbar'
import { Head, useForm } from '@inertiajs/react'
import React from 'react'
import { SettlementsChoosing } from './settlementsChoosing'
import DriversChoosing from './driversChoosing'
import CarChoosing from './carChoosing'
import { OrderButton } from './OrderButton'

const Orderspage = ({ auth, settlements, drivers, cars }) => {
    
    const { data, setData, processing, error, post } = useForm({
        settlement_from: '',
        settlement_to: '',
        driver: '',
        car: '',
    });
    
    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('orders.store'));
    };
    
    return (
        <>
            <div>
                <Head title="RideHub" />
                <Navbar auth={auth} />

            </div>
            <form onSubmit={handleSubmit} className='flex flex-col justify-center'>
                <SettlementsChoosing settlements={settlements} settlementFromValue={data.settlement_from} setSettlementFromValue={setData} settlementToValue={data.settlement_to} setSettlementToValue={setData} />
                <DriversChoosing drivers={drivers} data={data.driver} setData={setData} />
                <CarChoosing  cars={cars} data={data.car} setData={setData} />
                <OrderButton />
            </form>


        </>)
}

export default Orderspage
