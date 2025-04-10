import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link, usePage } from '@inertiajs/react';
import { useState } from 'react';

export default function AuthenticatedLayout({ header, children }) {
    const user = usePage().props.auth.user;

    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    return (
        <div className="min-h-screen bg-stone-950 ">
            <nav className=" bg-black ">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 bg-black ">
                    <div className="flex h-16 justify-between">
                        <div className="flex b">
                            <div className="flex shrink-0 items-center">
                                <Link href="/">
                                    <img src="/img/car-logo.png" alt="" className='w-32' />
                                </Link>
                            </div>

                            <div className="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex bg-black">
                                <NavLink
                                    href={route('dashboard')}
                                    active={route().current('dashboard')}
                                >
                                    Profile
                                </NavLink>
                                <NavLink
                                    href={route('drivers.index')}
                                    active={route().current('dashboard')}
                                >
                                    Drivers
                                </NavLink>
                                <NavLink
                                    href={route('feedback.index')}
                                    active={route().current('dashboard')}
                                >
                                    Feedback
                                </NavLink>
                            </div>
                        </div>

                        <div className="hidden sm:ms-6 sm:flex sm:items-center ">
                            <div className="relative ms-3">
                                <Dropdown>
                                    <Dropdown.Trigger>
                                        <span className="inline-flex rounded-md">
                                            <button
                                                type="button"
                                                className="inline-flex items-center rounded-md border border-transparent bg-orange-600 px-3 py-2 text-sm font-medium leading-4 text-black transition duration-150 ease-in-out  focus:outline-none"
                                            >
                                                {user.name}

                                                <svg
                                                    className="-me-0.5 ms-2 h-4 w-4"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </button>
                                        </span>
                                    </Dropdown.Trigger>

                                    <Dropdown.Content>
                                        <Dropdown.Link
                                            href={route('profile.edit')}
                                        >
                                            Edit Profile
                                        </Dropdown.Link>
                                        <Dropdown.Link
                                            href={route('logout')}
                                            method="post"
                                            as="button"
                                        >
                                            Log Out
                                        </Dropdown.Link>
                                    </Dropdown.Content>
                                </Dropdown>
                            </div>
                        </div>

                        <div className="flex items-center relative sm:hidden">
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
                                <li>
                                    <div className="flex flex-col mb-4 text-center gap-[6px] min-h-[40%]">
                                        <Link
                                            className="duration-300 text-md bg-amber-950 bg-opacity-25 rounded-lg"
                                            href={route('profile.edit')}
                                        >
                                            Edit Profile
                                        </Link>
                                        <Link
                                            className='bg-orange-600 rounded-lg text-black'
                                            href={route('logout')}
                                            method="post"
                                            as="button"
                                        >
                                            Log Out
                                        </Link>
                                    </div>
                                </li>

                                <li className='duration-700 text-md hover:ml-2'>
                                    <NavLink
                                        className='white'
                                        href={route('dashboard')}
                                        active={route().current('dashboard')}
                                    >
                                    Profile
                                </NavLink>
                                </li>
                                <li className='duration-700 text-md hover:ml-2'>
                                    <NavLink
                                        className='white'
                                        href={route('drivers.index')}
                                        active={route().current('dashboard')}
                                    >
                                        Drivers
                                    </NavLink>
                                </li>
                                <li className='duration-700 text-md hover:ml-2'>
                                    <NavLink
                                        className='white'
                                        href={route('feedback.index')}
                                        active={route().current('dashboard')}
                                    >
                                        Feedback
                                    </NavLink>
                                </li>

                                
                            </ul>
                        </div>
                    </div>
                </div>

                <div
                    className={
                        (showingNavigationDropdown ? 'block' : 'hidden') +
                        ' sm:hidden'
                    }
                >


                    <div className="border-t border-gray-200 pb-1 pt-4">
                        <div className="px-4">
                            <div className="text-base font-medium text-gray-800">
                                {user.name}
                            </div>
                            <div className="text-sm font-medium text-gray-500">
                                {user.email}
                            </div>
                        </div>

                        <div className="mt-3 space-y-1">
                            <ResponsiveNavLink href={route('profile.edit')}>
                                Profile
                            </ResponsiveNavLink>
                            <ResponsiveNavLink
                                method="post"
                                href={route('logout')}
                                as="button"
                            >
                                Log Out
                            </ResponsiveNavLink>
                        </div>
                    </div>
                </div>
            </nav>

            {header && (
                <header className="bg-stone-950 shadow">
                    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                        {header}
                    </div>
                </header>
            )}

            <main>{children}</main>
        </div>
    );
}
