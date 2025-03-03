import GuestLayout from '@/Layouts/GuestLayout'
import { Link } from '@inertiajs/react'
import React from 'react'

const Feedback = ({
    auth
}) => {
    return (
        <div>
            {auth.user ? (
                <h1>banán</h1>
            ) : (
                <GuestLayout>
                        <h1>If you want to give us feedback, please log in</h1>
                            <Link href="/login">
                                <button className="px-4 text-black duration-300 bg-orange-500 rounded-lg text-md hover:text-lg">
                                    Login
                                </button>
                            </Link>
                </GuestLayout>
            )}
        </div>
    )
}

export default Feedback
