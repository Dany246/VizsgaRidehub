import React from "react";
import { Head, Link } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";
import Drivercard from "@/Components/Drivercard";

const Driverspage = ({ auth, drivers }) => {
    return (
        <div>
            <Head title="Drivers" />
            <Navbar auth={auth} />

            <h1 className="text-4xl font-bold p-12 text-center">Drivers</h1>
            <div className="flex flex-wrap justify-evenly">
                {drivers && drivers.length > 0 ? drivers.map((driver) => (
                    <Drivercard driver={driver} key={driver.id} />
                )) : (
                    <p>No Drivers found.</p>
                )}
            </div>
        </div>
    );
};

export default Driverspage