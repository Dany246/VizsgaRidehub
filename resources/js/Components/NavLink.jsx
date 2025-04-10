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
                'inline-flex items-center px-1 pt-1 text-sm font-medium leading-5 ease-in-out focus:outline-none ' +
                (active
                    ? ' text-orange-600'
                    : 'border-transparent text-orange-600 hover:text-yellow-700 focus:text-yellow-700') +
                className
            }
        >
            {children}
        </Link>
    );
}
