import React from "react";

const Drivercard = ({drivers}) => {
    return (
        <div className="flex flex-wrap w-2/3 gap-4">
            {drivers ? (
                drivers.map((driver) => (
                    <div
                        key={driver.id}
                        class="max-w-2xl mx-auto sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-8 px-8 bg-orange-600 shadow-xl rounded-lg text-gray-900"
                    >
                        <div class="rounded-t-lg h-32 overflow-hidden">
                            <img
                                class="object-cover object-top w-full"
                                src={driver.picture}
                                alt=""
                            ></img>
                        </div>
                        <div class="mx-auto w-32 h-32 relative -mt-16 border-4 border-orange-900 rounded-full overflow-hidden">
                            <img
                                class="object-cover object-center h-32"
                                src={driver.pictureP}
                                alt="Driver Image"
                            ></img>
                        </div>
                        <div class="text-center mt-2">
                            <h2 class="font-semibold">{driver.name}</h2>
                            <p class="text-stone-900">{driver.status}</p>
                        </div>
                        <hr class="border-[1px] border-orange-900" />
                        <div class="p-6 mx-8 mt-2">
                            <button class="w-full block mx-auto rounded-full bg-stone-900 hover:shadow-lg font-semibold text-white px-6 py-2">
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
