import React from "react";
import { Head, Link } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";
import Drivercard from "@/Pages/Drivers/Drivercard";

const Driverspage = ({ auth, drivers }) => {
    return (
        <div>
            <Head title="RideHub" />
            <Navbar auth={auth} />

            <h1 className="text-4xl font-bold p-12 text-center">Drivers</h1>
            <div className="flex flex-wrap justify-evenly">
                {drivers && drivers.length > 0 ? drivers.map((driver) => (
                    <Drivercard driver={driver} key={driver.id} />
                )) : (
                    <p>No Drivers found.</p>
                )}
            </div>
            <div className={`text-center pt-32`}>
                <p className="text-2xl font-bold text-white"><a className="duration-500 hover:text-3xl" href="/orders">⮚ Order a ride<span className="bg-orange-500 text-black p-1 rounded-lg">Here</span> ⮘</a></p>
            </div>
        </div>
    );
};

export default Driverspage