import Navbar from "@/Components/Navbar";
import { Head } from "@inertiajs/react";
import { useEffect, useState } from "react";
import Drivercard from "./Drivers/Drivercard";


export default function Welcome({ auth, drivers }) {


  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className="relative pb-10">
      <div>
        <Head title="RideHub" />
        <Navbar auth={auth} />

        <h1 className={`text-4xl font-bold p-12 text-center transition-opacity duration-1000 delay-100 ${loaded ? "opacity-100" : "opacity-0"
          }`}>Drivers</h1>
        <div className={`flex flex-wrap justify-evenly transition-opacity duration-1000 delay-300 ${loaded ? "opacity-100" : "opacity-0"
          }`}>
          {drivers && drivers.length > 0 ? drivers.map((driver) => (
            <Drivercard driver={driver} key={driver.id} />
          )) : (
            <p>No Drivers found.</p>
          )}
        </div>
      <h4
        className={`pt-10 text-xl w-[60%] m-auto font-bold text-center text-white  transition-opacity duration-1000 delay-700 ${loaded ? "opacity-100" : "opacity-0"
          }`}
      >
        This project is a web application for find a ride, anywhere you want to go. Our project's goal, to help people who are in a hurry and don't have a car, here they can find a safe and quick way to get to their destination.
      </h4>
        <div className={`text-center pt-16 transition-opacity duration-1000 delay-1000 ${loaded ? "opacity-100" : "opacity-0"
          }`}>
          <p className="text-2xl font-bold text-white"><a className="duration-500 hover:text-3xl" href="/orders">⮚ Order a ride<span className="bg-orange-500 text-black p-1 rounded-lg">Here</span> ⮘</a></p>
        </div>
      </div>
    </div>

  );
}

