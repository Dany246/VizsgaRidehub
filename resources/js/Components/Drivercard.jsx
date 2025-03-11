import React from "react";

const Drivercard = ({drivers}) => {
    return (
        <div>
            {drivers ? (
                drivers.map((driver) => (
                    <div
                        key={driver.id}
                        class="max-w-2xl mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-16 bg-orange-700 shadow-xl rounded-lg text-gray-900"
                    >
                        <div class="rounded-t-lg h-32 overflow-hidden">
                            <img
                                class="object-cover object-top w-full"
                                src={driver.picture}
                                alt="Mountain"
                            ></img>
                        </div>
                        <div class="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
                            <img
                                class="object-cover object-center h-32"
                                src={driver.pictureP}
                                alt="Woman looking front"
                            ></img>
                        </div>
                        <div class="text-center mt-2">
                            <h2 class="font-semibold">{driver.name}</h2>
                            <p class="text-gray-90000">{driver.description}</p>
                        </div>

                        <div class="p-4 border-t mx-8 mt-2">
                            <button class="w-1/2 block mx-auto rounded-full bg-gray-900 hover:shadow-lg font-semibold text-white px-6 py-2">
                                Drive
                            </button>
                        </div>
                    </div>
                ))
            ) : (
                <p>no available</p>
            )}
        </div>
    );
};

export default Drivercard;
