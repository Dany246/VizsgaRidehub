import React from "react";
import { Head, Link } from "@inertiajs/react";

const Carspage = ({ auth, cars }) => {

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
                                    to="/login"
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
                            <Link href={route("cars.index")}>
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
                            <Link href={route("cars.index")}>
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

           
            <div className="grid grid-cols-1 gap-4 m-auto sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center">
                {cars ? cars.map((car) => (
                    <div key={car.id} className="bg-white border border-gray-200 max-w-[375px] rounded-lg dark:bg-stone-950 dark:border-stone-950">
                            <img className="rounded-t-lg w-full h-[280px]" src={car.img} alt="" />
                        <div className="p-5">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-yellow-700 dark:text-yellow-700">
                                    {car.cartype}
                                </h5>
                            <p className="mb-3 font-normal text-yellow-700 dark:text-yellow-700">
                                {car.price} <br /> {car.license_plate} <br /> {car.status} <br /> {car.color}
                            </p>
                            <a
                                href="#"
                                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-yellow-700 bg-yellow-700 rounded-lg hover:bg-stone-800 focus:ring-4 focus:outline-none focus:ring-stone-300 dark:bg-stone-700 dark:hover:bg-stone-700 dark:focus:ring-stone-800"
                            >
                                Ride
                                <svg
                                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 14 10"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M1 5h12m0 0L9 1m4 4L9 9"
                                    />
                                </svg>
                            </a>
                        </div>
                    </div>
                )) : (
                    <p>No cars available</p>
                )}
            </div>
        </>
    );
};

export default Carspage;
