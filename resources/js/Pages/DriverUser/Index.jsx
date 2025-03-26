import Navbar from "@/Components/Navbar";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, router } from "@inertiajs/react";
import { usePage } from "@inertiajs/react";
import { useState, useEffect } from "react";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

export default function Index({ orders, auth }) {
    
    const handleDelete = (id) => {
        router.delete(`/orders/${id}`);
    }

    return (
        <>
            <div>
                <Navbar auth={auth} />
                {orders && orders.length > 0 ? (
                    <Table className="w-5/6 mx-auto mt-5">
                        <TableCaption>A list of Orders.</TableCaption>
                        <TableHeader>
                            <TableRow>
                                
                                <TableHead>Driver</TableHead>
                                <TableHead>From</TableHead>
                                <TableHead>To</TableHead>
                                <TableHead>Car Type</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {orders.map((order) => (
                                <TableRow key={order.id}>
                                  
                                    <TableCell>{order.driver.name}</TableCell>
                                    <TableCell>{order.from}</TableCell>
                                    <TableCell>{order.to}</TableCell>
                                    <TableCell>{order.car.cartype}</TableCell>
                                    <AlertDialog>
                                        <TableCell>
                                            <AlertDialogTrigger>
                                                <button className="bg-orange-600 text-white p-2 rounded-lg">
                                                    Finish order
                                                </button>
                                            </AlertDialogTrigger>
                                        </TableCell>

                                        <AlertDialogContent className="bg-black">
                                            <AlertDialogHeader>
                                                <AlertDialogTitle className="text-white">
                                                Are you sure you want to finish the order?
                                                </AlertDialogTitle>
                                                <AlertDialogDescription>
                                                    This action cannot be
                                                    undone.
                                                </AlertDialogDescription>
                                            </AlertDialogHeader>
                                            <AlertDialogFooter>
                                                <AlertDialogCancel className="text-orange-600 bg-black hover:bg-stone-900 hover:text-orange-400">
                                                    Cancel
                                                </AlertDialogCancel>
                                                <AlertDialogAction   onClick={() =>
                                                            handleDelete(
                                                                order.id
                                                            )
                                                        } className="bg-orange-600 text-black hover:bg-orange-400 hover:text-stone-900">
                                                  
                                                       Finish
                                                    
                                                </AlertDialogAction>
                                            </AlertDialogFooter>
                                        </AlertDialogContent>
                                    </AlertDialog>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                ) : (
                    <p className="text-center mt-8 text-2xl">
                        No orders found.
                    </p>
                )}
            </div>
        </>
    );
}