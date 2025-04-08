import React from "react";
import { Head } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";

const Carspage = ({ auth, cars }) => {
    return (
        <>
            <Head title="RideHub" />
            <Navbar auth={auth} />

            <h1 className="text-4xl font-bold pt-6 text-center">Cars</h1>
            <p className="text-center pb-6">(The images are illustrations)</p>

            <div className="grid grid-cols-1 gap-4 mb-5 m-auto md:grid-cols-2 lg:grid-cols-3 place-items-center">
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
                                <p className="pl-1 font-normal text-yellow-700 dark:text-yellow-700">
                                    {car.price}/h {(car.price/60).toFixed(2)}/min<br /> 
                                    {car.license_plate} <br /> 
                                    {car.color}
                                </p>
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
