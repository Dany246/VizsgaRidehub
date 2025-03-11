import React from "react";
import { Head } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";

const Carspage = ({ auth, cars }) => {
    return (
        <>
            <Head title="Cars" />

            <Navbar auth={auth} />

            <h1 className="text-4xl font-bold p-12 text-center">Cars</h1>

            <div className="grid grid-cols-1 gap-4 m-auto sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center">
                {cars ? (
                    cars.map((car) => (
                        <div
                            key={car.id}
                            className="bg-stone-950 border border-stone-950 max-w-[375px] rounded-lg dark:bg-stone-950 dark:border-stone-950"
                        >
                            <img
                                className="rounded-t-lg w-full h-[280px]"
                                src={car.img}
                                alt=""
                            />
                            <div className="p-5">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-yellow-700 dark:text-yellow-700">
                                    {car.cartype}
                                </h5>
                                <p className="mb-3 font-normal text-yellow-700 dark:text-yellow-700">
                                    {car.price} <br /> {car.license_plate}{" "}
                                    <br /> {car.status} <br /> {car.color}
                                </p>
                                <a
                                    href="#"
                                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center  text-yellow-700 bg-stone-700 rounded-lg hover:bg-stone-800 focus:ring-4 focus:outline-none focus:ring-stone-800 dark:bg-stone-700 dark:hover:bg-stone-700 dark:focus:ring-stone-800"
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
                    ))
                ) : (
                    <p>No cars available</p>
                )}
            </div>
        </>
    );
};

export default Carspage;
