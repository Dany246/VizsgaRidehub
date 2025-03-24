import { useState } from "react";
import { router } from "@inertiajs/react";

const Drivercard = ({ driver, setData }) => {

    const handleStatusChange = () => {
        setData('driver', driver.id);
        router.patch(`/drivers/${driver.id}`, { status: driver.status === 1 ? 0 : 1 });
    };

    return (
        <div className={`flex flex-col-1 m-auto mb-10 gap-3`}>
            <div
                key={driver.id}
                className="max-w-2xl m-auto px-8 shadow-xl rounded-lg text-gray-900 bg-orange-500"
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
                            <span className="text-white">Not Selected</span>
                        ) : (
                            <span className="text-green-600">Selected</span>
                        )}
                    </p>
                </div>
                <hr className="border-[1px] border-orange-900" />
                <div className="p-6 mx-8 mt-2">
                    <button
                        type="button"
                        onClick={handleStatusChange}
                        className="w-full block mx-auto rounded-full bg-stone-900 hover:shadow-lg font-semibold text-white px-6 py-2"
                    >
                        Select Driver
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Drivercard;
