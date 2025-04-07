import React from "react";
import { Head, Link } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";
import Drivercard from "@/Pages/Drivers/Drivercard";
import { useState, useEffect } from "react";

const Driverspage = ({ auth, drivers }) => {

    const [loaded, setLoaded] = useState(false);
    
      useEffect(() => {
        setLoaded(true);
      }, []);

    return (
        <>
        <Navbar auth={auth} />
        <h1
        className={`pt-8 text-2xl font-bold text-center text-white my-14  transition-opacity duration-1000 delay-150 ${loaded ? "opacity-100" : "opacity-0"
          }`}
      >
        Developers of the project:
      </h1>
      <div
        className={`flex flex-wrap mx-12 md:mx-5 justify-evenly gap-3 transition-opacity duration-1000 delay-300 ${loaded ? "opacity-100" : "opacity-0"
          }`}
      >
        <div
         
          className="flex flex-col items-center rounded-lg shadow md:flex-row md:max-w-xl border-yellow-950 bg-orange-600 hover:bg-orange-500 sm:w-1/2"
        >
          <div className="md:flex md:flex-col border-orange-700 border-opacity-50 border-4 rounded-lg md:items-center md:justify-center">
            <img
              className="object-cover w-full h-auto rounded-lg md:h-auto sm:w-48 mt-3 md:rounded-lg hidden sm:block sm:mx-auto md:mb-4"
              src="img/Dani.jpg"
              alt=""
            />
            <div className="flex flex-col justify-between p-4 leading-normal md:text-center md:justify-center">
              <h5 className="mb-2 text-2xl text-center font-bold tracking-tight text-black">
                Éri Tibor Dániel
              </h5>
              <p className="mb-3 font-normal text-justify text-black">
                I am 20 years old from Békés county, from Hungary. I learning
                software development at Szigeti Endre vocational school in
                Szeghalom.
              </p>
            </div>
          </div>
        </div>
        <div
          className="flex flex-col items-center rounded-lg shadow md:flex-row md:max-w-xl border-yellow-950 bg-orange-600 hover:bg-orange-500 sm:w-1/2"
        >
          <div className="md:flex md:flex-col border-orange-700 border-opacity-50 border-4 rounded-lg md:items-center md:justify-center">
            <img
              className="object-cover w-full h-auto rounded-lg md:h-auto sm:w-48 mt-3 md:rounded-lg hidden sm:block sm:mx-auto md:mb-4"
              src="img/Bence.jpg"
              alt=""
            />
            <div className="flex flex-col justify-between p-4 leading-normal md:text-center md:justify-center">
              <h5 className="mb-2 text-2xl text-center font-bold tracking-tight text-black">
                Tóth Bence
              </h5>
              <p className="mb-3 font-normal text-justify text-black">
                I am 25 years old from Hajdú-Bihar county, from Hungary. I
                learning software development at Szigeti Endre vocational school in
                Szeghalom.
              </p></div>
          </div>
        </div>
      </div>
      <div className={`text-center pt-24 transition-opacity duration-1000 delay-500 ${loaded ? "opacity-100" : "opacity-0"
          }`}>
          <p className="text-2xl font-bold text-white"><a className="duration-500 hover:text-3xl" href="/orders">⮚ Order a ride<span className="bg-orange-500 text-black p-1 rounded-lg">Here</span> ⮘</a></p>
        </div>
      </>
    );
};

export default Driverspage