import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Index({ auth, infos }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Info
                </h2>
            }
        >
            <Head title="Infos" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border-b-2 border-gray-500">
                                    <tr className="text-nowrap">
                                        <th className="px-3 py-2">ID</th>
                                        <th className="px-3 py-2">Image</th>
                                        <th className="px-3 py-2">Create By</th>
                                        <th className="px-3 py-2">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {infos.data.map((info)=>(
                                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                            <td className="px-3 py-2">{info.id}</td>
                                            <td className="px-3 py-2">{info.id}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    )
}
