
import { Link } from '@inertiajs/react';
import { useEffect, useState } from "react";
export default function GuestLayout({ children }) {

    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
      setLoaded(true);
    }, []);



    return (
        <div className="flex min-h-screen flex-col items-center bg-black pt-6 sm:justify-center sm:pt-0">
            <div>
                <Link className={` transition-opacity duration-300 delay-100 ${
    loaded ? "opacity-100" : "opacity-0"
  }`} href="/">
                    <img src="/img/car-logo.png" alt="Car Logo" width="124rem" />   
                </Link>
            </div>

            <div className={`mt-6 w-full overflow-hidden text-black bg-zinc-900 px-6 py-4 shadow-md sm:max-w-md sm:rounded-lg transition-opacity duration-1000 delay-300 ${
    loaded ? "opacity-100" : "opacity-0"
  }`}>
                {children}
            </div>
        </div>
    );
}
