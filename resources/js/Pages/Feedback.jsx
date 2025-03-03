import GuestLayout from "@/Layouts/GuestLayout";
import { Link } from "@inertiajs/react";
import React from "react";

const Feedback = ({ auth }) => {
    return (
        <div>
            {auth.user ? (
                <h1>banán</h1>
            ) : (
                <div
                    className="fixed top-0 left-0 w-full h-full bg-stone-950 bg-opacity-20 flex justify-center items-center"
                >
                    <div className="bg-stone-700 rounded-lg p-4 shadow-md">
                        <h1 className="text-center text-xl pt-2">
                            If you want to give us feedback, please log in
                        </h1>
                        <div className="flex justify-center py-3">
                            <Link href="/login">
                                <button className="px-6 py-2 text-black duration-300 bg-orange-500 rounded-lg text-md hover:text-lg">
                                    Login
                                </button>
                            </Link>
                        </div>
                        <h2 className="text-center text-xl pt-3">
                            If you don't have an account, register here
                        </h2>
                        <div className="flex justify-center py-3">
                            <Link href="/register">
                                <button className="px-6 py-2 text-black duration-300 bg-orange-500 rounded-lg text-md hover:text-lg">
                                    Register
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Feedback;
