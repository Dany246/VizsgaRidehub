import Navbar from "@/Components/Navbar";
import { router } from "@inertiajs/react";
import { useState } from "react";
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
    const [openDialogId, setOpenDialogId] = useState(null);

    const handleStartOrder = (id) => {
        router.patch(`/orders/${id}`, { status: 1 });
    };
    const handleFinishOrder = (id) => {
        router.patch(`/orders/${id}`, { status: 2 });
    };

    return (
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
                            <TableHead>Status</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {orders.map((order) => (
                            <TableRow key={order.id}>
                                <TableCell>
                                    {order.driver?.name || "N/A"}
                                </TableCell>
                                <TableCell>{order.from}</TableCell>

                                <TableCell>{order.to}</TableCell>
                                <TableCell>
                                    {order.car?.cartype || "N/A"}
                                </TableCell>
                                <TableCell>
                                    <AlertDialog
                                        open={openDialogId === order.id}
                                        onOpenChange={(isOpen) =>
                                            setOpenDialogId(
                                                isOpen ? order.id : null
                                            )
                                        }
                                    >
                                        <AlertDialogTrigger asChild>
                                            
                                            <button className="bg-orange-600 text-white p-2 rounded-lg">
                                                {
                                                    [
                                                        "Start",
                                                        "On Going",
                                                        "Finished",
                                                    ][order.status]
                                                }
                                            </button>
                                        </AlertDialogTrigger>
                                        <AlertDialogContent className="bg-black">
                                            <AlertDialogHeader>
                                                <AlertDialogTitle className="text-white">
                                                {
                                                    [
                                                        " Are you sure you want to start the order?",
                                                        "Are you sure you want to finish the order?",
                                                        "This order is already Finished",
                                                    ][order.status]
                                                }
                                                </AlertDialogTitle>
                                                <AlertDialogDescription>
                                                {
                                                    [
                                                        " This action cannot be undone",
                                                        "This action cannot be undone",
                                                        "",
                                                    ][order.status]
                                                }
                                                </AlertDialogDescription>
                                            </AlertDialogHeader>
                                            <AlertDialogFooter>
                                                <AlertDialogCancel className="text-orange-600 bg-black hover:bg-stone-900 hover:text-orange-400">
                                                    Cancel
                                                </AlertDialogCancel>
                                                {order.status === 0 && (
                                                    <AlertDialogAction
                                                        onClick={() =>
                                                            handleStartOrder(
                                                                order.id
                                                            )
                                                        }
                                                        className="bg-green-600 text-black hover:bg-green-400 hover:text-stone-900"
                                                    >
                                                        Start
                                                    </AlertDialogAction>
                                                )}
                                                {order.status === 1 && (
                                                    <AlertDialogAction
                                                        onClick={() =>
                                                            handleFinishOrder(
                                                                order.id
                                                            )
                                                        }
                                                        className="bg-orange-600 text-black hover:bg-orange-400 hover:text-stone-900"
                                                    >
                                                        Finish
                                                    </AlertDialogAction>
                                                )}
                                                {order.status === 2 && (
                                                    <AlertDialogAction
                                                        onClick={() =>
                                                            handleFinishOrder(
                                                                order.id
                                                            )
                                                        }
                                                        className="bg-gray-600 text-black hover:bg-gray-400 hover:text-stone-900"
                                                    >
                                                        Finished
                                                    </AlertDialogAction>
                                                )}
                                            </AlertDialogFooter>
                                        </AlertDialogContent>
                                    </AlertDialog>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            ) : (
                <p className="text-center mt-8 text-2xl">No orders found.</p>
            )}
        </div>
    );
}
