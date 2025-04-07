import React from "react";
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

export const OrderButton = ({ data }) => {
    const isDisabled = !data.car || !data.driver || !data.settlement_from || !data.settlement_to;

    return (
        <div className="pt-4 mx-auto text-center">
            <AlertDialog>
                {/* Reserve space regardless of message state to avoid layout shift */}
                <div className="h-5 mb-1">
                    {isDisabled && (
                        <p className="text-red-500 font-medium text-sm">
                            Please select a car, driver, and both settlements before finishing the order.
                        </p>
                    )}
                </div>

                <AlertDialogTrigger asChild>
                    <button
                        type="submit"
                        disabled={isDisabled}
                        className="block mx-auto rounded-full bg-stone-900 hover:shadow-lg font-semibold text-white px-6 py-2 disabled:bg-gray-400 disabled:cursor-not-allowed"
                    >
                        Finish order
                    </button>
                </AlertDialogTrigger>

                <AlertDialogContent className="bg-black">
                    <AlertDialogHeader>
                        <AlertDialogTitle className="text-white">
                            Your order is finished
                        </AlertDialogTitle>
                        <a className="text-center mx-auto" href="/">
                            <AlertDialogCancel className="text-orange-600 bg-black hover:bg-stone-900 hover:text-orange-400">
                                ok
                            </AlertDialogCancel>
                        </a>
                    </AlertDialogHeader>
                </AlertDialogContent>
            </AlertDialog>
        </div>
    );
};
