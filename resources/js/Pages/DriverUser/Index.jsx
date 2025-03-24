import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { usePage } from '@inertiajs/react';
import { useState, useEffect } from 'react';


export default function Index({ orders }) {
    console.log(orders)

    return (
        <div>
            <h1>Driver Dashboard</h1>
            {orders && orders.length > 0 ? (
                <ul>
                    {orders.map(order => (
                        <li key={order.id}>Order ID: {order.id} {order.from} {order.to} {order.car_id} {order.driver_id}</li>
                    ))}
                </ul>
            ) : (
                <p>No orders found.</p>
            )}
        </div>
    );
}

