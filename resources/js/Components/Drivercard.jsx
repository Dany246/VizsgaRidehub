import { router } from "@inertiajs/react";
import React from "react";

const Drivercard = ({ driver }) => {
    const handleStatusChange = () => {
        router.patch(`/drivers/${driver.id}`, { status: driver.status === 1 ? 0 : 1 })
    }
    
    return (
        <div className="flex flex-wrap w-2/3 gap-4">
            <div
                key={driver.id}
                className="max-w-2xl mx-auto sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-8 px-8 bg-orange-600 shadow-xl rounded-lg text-gray-900"
            >
                <div className="rounded-t-lg h-32 overflow-hidden">
                    <img
                        className="object-cover object-top w-full"
                        src={driver.picture}
                        alt=""
                    ></img>
                </div>
                <div className="mx-auto w-32 h-32 relative -mt-16 border-4 border-orange-900 rounded-full overflow-hidden">
                    <img
                        className="object-cover object-center h-32"
                        src={driver.pictureP}
                        alt="Driver Image"
                    ></img>
                </div>
                <div className="text-center mt-2">
                    <h2 className="font-semibold">{driver.name}</h2>
                    <p className="text-stone-900">{driver.status == true ? (<span>anyam</span>) : (<span>apam</span>) }</p>
                </div>
                <hr className="border-[1px] border-orange-900" />
                <div className="p-6 mx-8 mt-2">
                    <button type="submit" onClick={handleStatusChange} className="w-full block mx-auto rounded-full bg-stone-900 hover:shadow-lg font-semibold text-white px-6 py-2">
                        Drive
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Drivercard;
