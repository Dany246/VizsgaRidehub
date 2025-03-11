import React from "react";
import { Head, Link } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";
import Drivercard from "@/Components/Drivercard";
import DrivercardK from "@/Components/DrivercardK";

const Driverspage = ( {auth}) => {
    return (
        <div>
            <Head title="Drivers" />
            <Navbar auth={auth}/>
      
        <h1 className="text-4xl font-bold p-12 text-center">Drivers</h1> 
        <div className="flex flex-wrap gap-4 justify-center">
        <Drivercard/>
        <DrivercardK/>
        </div>
        





         </div>
    );
};

export default Driverspage