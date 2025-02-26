import React from "react";
import { Head, Link } from "@inertiajs/react";
import { useState } from "react";

const Carspage = ({ auth }) => {

    const [cars, setCars] = useState([]);

    return (
        <>
            <Head title="RideHub" />

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
                                <Link to="/signup">
                                    <li className="duration-300 text-md hover:text-lg">
                                        Sign up
                                    </li>
                                </Link>
                                <Link
                                    to="
                  /login"
                                >
                                    <li className="px-4 text-black duration-300 bg-orange-500 rounded-lg text-md hover:text-lg">
                                        Login
                                    </li>
                                </Link>
                            </div>
                            <Link to="/drivers">
                                <li className="duration-700 text-md hover:ml-2">
                                    Drivers
                                </li>
                            </Link>
                            <Link href={route("carspage")}>
                                <li className="duration-700 text-md hover:ml-2">
                                    Cars
                                </li>
                            </Link>
                            <Link to="/feedback">
                                <li className="duration-700 text-md hover:ml-2">
                                    Feedback
                                </li>
                            </Link>
                        </ul>
                    </div>
                    <div className="hidden list-none lg:flex lg:items-center lg:justify-between lg:space-x-10 lg:mr-10">
                        <div className="flex gap-8 mr-10">
                            <Link to="/drivers">
                                <li> Drivers</li>
                            </Link>
                            <Link href={route("carspage")}>
                                <li>Cars</li>
                            </Link>
                            <Link to="/feedback">
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
                                    className="px-4 text-white  bg-black rounded-lg"
                                >
                                    Register
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </nav>

            <h1 className="text-4xl font-bold p-12 text-center">Cars</h1>

            <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-stone-950 dark:border-stone-950">
                <a href="#">
                    <img class="rounded-t-lg" src="img/cars/Sil1.webp" alt="" />
                </a>
                <div class="p-5">
                    <a href="#">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-yellow-600 dark:text-yellow-600">
                            Noteworthy technology acquisitions 2021
                        </h5>
                    </a>
                    <p class="mb-3 font-normal text-yellow-700 dark:text-yellow-700">
                        Here are the biggest enterprise technology acquisitions
                        of 2021 so far, in reverse chronological order.
                    </p>
                    <a
                        href="#"
                        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-yellow-600 bg-yellow-700 rounded-lg hover:bg-stone-800 focus:ring-4 focus:outline-none focus:ring-stone-300 dark:bg-stone-600 dark:hover:bg-stone-700 dark:focus:ring-stone-800"
                    >
                        Ride
                        <svg
                            class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 14 10"
                        >
                            <path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M1 5h12m0 0L9 1m4 4L9 9"
                            />
                        </svg>
                    </a>
                </div>
            </div>
        </>
    );
};

export default Carspage;
