import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import DeleteUserForm from './Partials/DeleteUserForm';
import UpdatePasswordForm from './Partials/UpdatePasswordForm';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm';
import {  usePage } from '@inertiajs/react';

export default function Edit({ mustVerifyEmail, status }) {
     const user = usePage().props.auth.user;


    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight pt-3 text-yellow-600">
                    {user.name}
                </h2>
            }
        >
            <Head title="Profile" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl space-y-6 sm:px-6 lg:px-8">
                    <div className="bg-stone-900 text-black p-4 shadow sm:rounded-lg sm:p-8">
                        <UpdateProfileInformationForm
                            mustVerifyEmail={mustVerifyEmail}
                            status={status}
                            className="max-w-xl"
                        />
                    </div>

                    <div className="bg-stone-900 p-4 shadow sm:rounded-lg sm:p-8 text-black">
                        <UpdatePasswordForm className="max-w-xl" />
                    </div>

                    <div className="bg-stone-900 p-4 shadow sm:rounded-lg sm:p-8 text-black">
                        <DeleteUserForm className="max-w-xl" />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
