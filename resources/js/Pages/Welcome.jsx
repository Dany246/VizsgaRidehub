import { Head, Link } from "@inertiajs/react";
import { useEffect, useState } from "react";

export default function Welcome({ auth }) {
   

    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
      setLoaded(true);
    }, []);

    return (
        <div className="relative pb-10">
            <Head title="RideHub" />
            
            <nav className="bg-[#1e1613e5]">
          <div className="flex items-center justify-between py-6 px-[10%] lg:justify-between">
            <div className="flex items-center justify-center">
              <a href="/">
                <h1 className="text-3xl font-bold text-white ">
                  Ride
                  <span className="px-2 text-black font-extrabold bg-orange-500 rounded-lg">
                    Hub
                  </span>
                </h1>
              </a>
            </div>
            <div className="relative lg:hidden">
              <button
                className="flex items-center justify-center w-10 h-10 text-black bg-orange-500 rounded-full"
                onClick={() =>
                  document
                    .querySelector("#nav-items")
                    ?.classList.toggle("hidden")
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </button>
              <ul
                className="hidden absolute top-10 right-0 space-y-2 bg-[#1e1613e5] p-4 rounded-lg min-w-[125px] font-medium"
                id="nav-items"
              >
                <div className="flex flex-col mb-4 text-center gap-[6px] min-h-[40%]">
                  <Link href="/signup">
                    <li className="duration-300 text-md hover:text-lg">Sign up</li>
                  </Link>
                  <Link href="
                  /login">
                    <li className="px-4 text-black duration-300 bg-orange-500 rounded-lg text-md hover:text-lg">
                      Login
                    </li>
                  </Link>
                </div>
                <Link href="/drivers">
                  <li className="duration-700 text-md hover:ml-2">Drivers</li>
                </Link>
                <Link href={route("cars.index")}>
                  <li className="duration-700 text-md hover:ml-2">Cars</li>
                </Link>
                <Link href="/feedback">
                  <li className="duration-700 text-md hover:ml-2">Feedback</li>
                </Link>
              </ul>
            </div>
            <div className="hidden list-none lg:flex lg:items-center lg:justify-between lg:space-x-10 lg:mr-10">
              <div className="flex gap-8 mr-10">
                <Link href="/drivers">
                  <li> Drivers</li>
                </Link>
                <Link href={route("cars.index")}>
                  <li>Cars</li>
                </Link>
                <Link href="/feedback">
                  <li> Feedback </li>
                </Link>
              </div>
              
              {auth.user ? (
                        <Link
                            href={route("dashboard")}
                            className="text-black"
                        >
                           
                           <li className="px-4 text-black  bg-orange-500 rounded-lg">Profile</li>
                        </Link>
                    ) : (
                        <>
                            <Link href={route("login")} >
                                <li className="px-4 text-black  bg-orange-500 rounded-lg">Log in</li>
                            </Link>
                            <Link
                                href={route("register")}
                                className="px-4 text-white  bg-black rounded-lg"
                            >
                                Register
                            </Link>
                        </>
                    )}
            </div>
          </div>
        </nav>

      <img
        src="./public/HomePagePictures/kerek.png"
        alt=""
        className="mx-auto hidden sm:block w-full h-auto"
      />
      <h1
        className={`text-4xl font-bold my-8 text-center text-white transition-opacity duration-1000 delay-100 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      >
        Ride<span className="bg-orange-500 font-extrabold text-black px-2 rounded-lg">Hub</span>
      </h1>

      <h1
        className={`mt-4 text-2xl font-bold text-center text-white my-14  transition-opacity duration-1000 delay-300 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      >
        Developers of the project:
      </h1>
      <div
        className={`flex flex-wrap justify-evenly gap-2 transition-opacity duration-1000 delay-500 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <a
          href="https://github.com/niezz01 "
          target="_blank"
          className="flex flex-col items-center  border  rounded-lg shadow md:flex-row md:max-w-xl  border-yellow-950 bg-orange-500 hover:bg-orange-600 sm:w-1/2"
        >
          <img
            className="object-cover w-full h-full rounded-t-lg md:h-full md:w-48 md
            :rounded-none md:rounded-l-lg hidden sm:block"
            src="img/Bence.jpg"
            alt=""
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-black">
              Tóth Bence
            </h5>
            <p className="mb-3 font-normal text-gray-900">
              I am 25 years old from Hajdú-Bihar county, from Hungary. I
              learning software development at Szigeti Endre vocational school in
              Szeghalom.
            </p>
          </div>
        </a>
        <a
          href="https://github.com/Dany246"
          target="_blank"
          className="flex flex-col items-center rounded-lg shadow md:flex-row md:max-w-xl border-yellow-950 bg-orange-500 hover:bg-orange-600 sm:w-1/2" 
        >
          <img
            className="object-cover w-full h-auto rounded-t-lg md:h-full md:w-48 md:rounded-none md:rounded-l-lg hidden sm:block"
            src="img/Dani.jpg"
            alt=""
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-black">
              Éri Tibor Dániel
            </h5>
            <p className="mb-3 font-normal text-gray-900">
              I am 20 years old from Békés county, from Hungary. I learning
              software development at Szigeti Endre vocational school in
              Szeghalom.
            </p>
          </div>
        </a>
      </div>
      <h4
        className={`my-20 text-xl w-[60%] m-auto font-bold text-center text-white  transition-opacity duration-1000 delay-700 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      >
        This project is a web application for find a ride, anywhere you want to go. Our project's goal, to help people who are in a hurry and don't have a car, here they can find a safe and quick way to get to their destination. 
      </h4>

      <div className={`text-center transition-opacity duration-1000 delay-1000 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}>
          <Link href={route("cars.index")} >
        <p className="text-2xl font-bold text-white"><a className="duration-500 hover:text-3xl" href="/order">⮚ Order a ride<span className="bg-orange-500 text-black p-1 rounded-lg">Here</span> ⮘</a></p>
        </ Link>
      </div>
 </div>
    
  );
}
