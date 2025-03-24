import Navbar from '@/Components/Navbar';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { usePage } from '@inertiajs/react';
import { useState, useEffect } from 'react';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  


  export default function Index({ orders, auth }) {
    console.log(orders);

    return (
        <>
            <div>
                <Navbar auth={auth} />
                {orders && orders.length > 0 ? (
                    <Table>
                        <TableCaption>A list of Orders.</TableCaption>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[100px]">Order ID</TableHead>
                                <TableHead>Driver</TableHead>
                                <TableHead>From</TableHead>
                                <TableHead>To</TableHead>
                                <TableHead>Car Type</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {orders.map(order => (
                                <TableRow key={order.id}>
                                    <TableCell className="font-medium">{order.id}</TableCell>
                                    <TableCell>{order.driver.name}</TableCell>
                                    <TableCell>{order.from}</TableCell>
                                    <TableCell>{order.to}</TableCell>
                                    <TableCell>{order.car.cartype}</TableCell>
                                
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                ) : (
                    <p>No orders found.</p>
                )}
            </div>
        </>
    );
}

