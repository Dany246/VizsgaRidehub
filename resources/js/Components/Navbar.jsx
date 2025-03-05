import React from "react";
import { Link } from "@inertiajs/react";

const Navbar = ({ auth }) => {
    return (
        <div>
            <nav className="bg-[#1e1613e5]">
                <div className="flex items-center justify-between py-6 px-[10%] lg:justify-between">
                    <div className="flex items-center justify-center">
                        <a href="/">
                            <h1 className="text-3xl font-bold text-white ">
                                Ride
                                <span className="px-2 text-black font-extrabold bg-orange-500 rounded-lg">
                                    Hub
                                </span>
                            </h1>
                        </a>
                    </div>
                    <div className="relative lg:hidden">
                        <button
                            className="flex items-center justify-center w-10 h-10 text-black bg-orange-500 rounded-full"
                            onClick={() =>
                                document
                                    .querySelector("#nav-items")
                                    ?.classList.toggle("hidden")
                            }
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-6 h-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4 6h16M4 12h16m-7 6h7"
                                />
                            </svg>
                        </button>
                        <ul
                            className="hidden absolute top-10 right-0 space-y-2 bg-[#1e1613e5] p-4 rounded-lg min-w-[125px] font-medium"
                            id="nav-items"
                        >
                            <div className="flex flex-col mb-4 text-center gap-[6px] min-h-[40%]">
                                <Link href="/signup">
                                    <li className="duration-300 text-md bg-amber-950 bg-opacity-25 rounded-lg">
                                        Sign up
                                    </li>
                                </Link>
                                <Link href="/login">
                                    <li className="px-4 text-black duration-300 bg-orange-500 rounded-lg text-md">
                                        Login
                                    </li>
                                </Link>
                            </div>
                            <Link href="/drivers">
                                <li className="duration-700 text-md hover:ml-2">
                                    Drivers
                                </li>
                            </Link>
                            <Link href={route("cars.index")}>
                                <li className="duration-700 text-md hover:ml-2">
                                    Cars
                                </li>
                            </Link>
                            <Link href="/feedback">
                                <li className="duration-700 text-md hover:ml-2">
                                    Feedback
                                </li>
                            </Link>
                        </ul>
                    </div>
                    <div className="hidden list-none lg:flex lg:items-center lg:justify-between lg:space-x-10 lg:mr-10">
                        <div className="flex gap-8 mr-10">
                            <Link href="/drivers">
                                <li> Drivers</li>
                            </Link>
                            <Link href={route("cars.index")}>
                                <li>Cars</li>
                            </Link>
                            <Link href="/feedback">
                                <li> Feedback </li>
                            </Link>
                        </div>

                        {auth.user ? (
                            <Link
                                href={route("dashboard")}
                                className="text-black"
                            >
                                <li className="px-4 text-black  bg-orange-500 rounded-lg">
                                    Profile
                                </li>
                            </Link>
                            
                        ) : (
                            <>
                                <Link href={route("login")}>
                                    <li className="px-4 text-black  bg-orange-500 rounded-lg">
                                        Log in
                                    </li>
                                </Link>
                                <Link
                                    href={route("register")}
                                    className="px-4 text-white  bg-amber-950 bg-opacity-25 rounded-lg"
                                >
                                    Sign up
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
