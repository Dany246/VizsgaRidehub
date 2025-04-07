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

    const handleFinishOrder = (id) => {
        router.delete(`/orders/${id}`, {
            onSuccess: () => {
                router.patch(`/car/${id}`, {
                    onSuccess: () => setOpenDialogId(null)
                });
            }
        });
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
                            <TableHead>Action</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {orders.map((order) => (
                            <TableRow key={order.id}>
                                <TableCell>{order.driver?.name || 'N/A'}</TableCell>
                                <TableCell>{order.from}</TableCell>
                                <TableCell>{order.to}</TableCell>
                                <TableCell>{order.car?.cartype || 'N/A'}</TableCell>
                                <TableCell>
                                    <AlertDialog
                                        open={openDialogId === order.id}
                                        onOpenChange={(isOpen) =>
                                            setOpenDialogId(isOpen ? order.id : null)
                                        }
                                    >
                                        <AlertDialogTrigger asChild>
                                            <button className="bg-orange-600 text-white p-2 rounded-lg">
                                                Finish order
                                            </button>
                                        </AlertDialogTrigger>
                                        <AlertDialogContent className="bg-black">
                                            <AlertDialogHeader>
                                                <AlertDialogTitle className="text-white">
                                                    Are you sure you want to finish the order?
                                                </AlertDialogTitle>
                                                <AlertDialogDescription>
                                                    This action cannot be undone.
                                                </AlertDialogDescription>
                                            </AlertDialogHeader>
                                            <AlertDialogFooter>
                                                <AlertDialogCancel className="text-orange-600 bg-black hover:bg-stone-900 hover:text-orange-400">
                                                    Cancel
                                                </AlertDialogCancel>
                                                <AlertDialogAction
                                                    onClick={() => handleFinishOrder(order.id)}
                                                    className="bg-orange-600 text-black hover:bg-orange-400 hover:text-stone-900"
                                                >
                                                    Finish
                                                </AlertDialogAction>
                                            </AlertDialogFooter>
                                        </AlertDialogContent>
                                    </AlertDialog>
                                </TableCell>
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
    );
}
