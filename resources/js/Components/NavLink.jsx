import { Link } from '@inertiajs/react';

export default function NavLink({
    active = false,
    className = '',
    children,
    ...props
}) {
    return (
        <Link
            {...props}
            className={
                'inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium leading-5 transition duration-150 ease-in-out focus:outline-none ' +
                (active
                    ? 'border-orange-500 text-orange-600 focus:border-orange-700 focus'
                    : 'border-transparent text-orange-600 hover:border-orange-800 hover:text-yellow-700 focus:border-orange-700 focus:text-yellow-700') +
                className
            }
        >
            {children}
        </Link>
    );
}
