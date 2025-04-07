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
import { router } from "@inertiajs/react";

export const OrderButton = () => {
    return (
        <div className=" pt-4 mx-auto">
           <AlertDialog>
            <AlertDialogTrigger>
                <button type="submit" className=" block mx-auto rounded-full bg-stone-900 hover:shadow-lg font-semibold text-white px-6 py-2">
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
