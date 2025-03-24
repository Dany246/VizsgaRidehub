import Navbar from '@/Components/Navbar';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { usePage } from '@inertiajs/react';
import { useState, useEffect } from 'react';


export default function Index({ orders, auth }) {
    console.log(orders)

    return (
        <div>
            <Navbar auth={auth} />
            {orders && orders.length > 0 ? (
                <ul>
                    {orders.map(order => (
                        <li key={order.id}>{order.id} {order.driver.name} {order.from} {order.to} {order.car.cartype} {order.driver_id}</li>
                    ))}
                </ul>
            ) : (
                <p>No orders found.</p>
            )}
        </div>
    );
}

