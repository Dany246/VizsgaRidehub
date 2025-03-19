import { router } from "@inertiajs/react";
import React, { useState } from "react";

const Drivercard = ({ driver }) => {
    const [selected, setSelected] = useState(false);

    const handleStatusChange = () => {
        router.patch(`/drivers/${driver.id}`, { status: driver.status === 1 ? 0 : 1 });
    };

    const toggleSelection = () => {
        setSelected(!selected);
    };

    return (
        <div className="flex flex-col-1 m-auto gap-3">
            <div
                key={driver.id}
                className={`max-w-2xl m-auto mt-8 px-8 shadow-xl rounded-lg text-gray-900 
                ${selected ? "bg-orange-500" : "bg-orange-600"}`}
            >
                <div className="rounded-t-lg h-32 overflow-hidden">
                    <img className="object-cover object-top w-full" src={driver.picture} alt="" />
                </div>
                <div className="mx-auto w-32 h-32 relative -mt-16 border-4 border-orange-900 rounded-full overflow-hidden">
                    <img className="object-cover object-center h-32" src={driver.pictureP} alt="Driver Image" />
                </div>
                <div className="text-center mt-2">
                    <h2 className="font-bold text-xl">{driver.name}</h2>
                    <p className="bg-stone-800 mt-2 mb-1 rounded">
                        {driver.status == true ? (
                            <span className="text-green-600">Available</span>
                        ) : (
                            <span className="text-red-600">Unavailable</span>
                        )}
                    </p>
                </div>
                <hr className="border-[1px] border-orange-900" />
                <div className="p-6 mx-8 mt-2">
                    <button
                        type="submit"
                        onClick={handleStatusChange}
                        className="w-full block mx-auto rounded-full bg-stone-900 hover:shadow-lg font-semibold text-white px-6 py-2"
                    >
                        Driver information
                    </button>
                    <button
                        onClick={toggleSelection}
                        className={`w-full block mx-auto mt-2 rounded-full px-6 py-2 font-semibold ${
                            selected ? "bg-orange-700 text-white" : "bg-gray-300 text-black"
                        }`}
                    >
                        {selected ? "Deselect" : "Select"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Drivercard;
