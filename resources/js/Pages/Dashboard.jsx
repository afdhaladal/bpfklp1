import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">You're logged in!</div>
                        <div className="bg-green-800 p-0 flex items-center h-1/4">
                            <img
                                src="http://127.0.0.1/bpfklp1/bpfklp1/storage/app/public/gambar/4.png"
                                alt="Logo"
                                className="h-24 mr-8 ml-4 justify-normal"
                                style={{
                                    width: "100%",
                                    height: "600px",
                                    objectFit: "contain",
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
