import Pagination from "@/Components/Pagination";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react"; // Pastikan Link berasal dari @inertiajs/react
import {
    PROJECT_STATUS_CLASS_MAP,
    PROJECT_STATUS_TEXT_MAP,
} from "@/constanst.jsx";

export default function Index({ auth, infos, success }) {


    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex justify-between items-center">
                    <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                        Info
                    </h2>
                </div>
            }
        >
            <Head title="Infos" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    {success && (
                        <div className="bg-emerald-500 py-2 px-4 text-white rounded mb-4">
                            {success}
                        </div>
                    )}
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <Link
                                href={route("info.create")}
                                className="bg-emerald-500 py-1 px-3 text-white rounded shadow transition-all hover:bg-emerald-600"
                            >
                                Add New
                            </Link>
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
                                    {infos && infos.data ? (
                                        infos.data.map((info) => (
                                            <tr
                                                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                                                key={info.id}
                                            >
                                                <td className="px-3 py-2">
                                                    {info.id}
                                                </td>
                                                <td className="px-3 py-2">
                                                    <img
                                                        src={info.image_path} // Hapus tanda kurung kurawal
                                                        style={{ width: 60 }}
                                                    />
                                                </td>
                                                <td className="px-3 py-2">
                                                    {info.createdBy.name}
                                                </td>
                                                <td className="px-3 py-2">
                                                    <Link
                                                        href={route(
                                                            "info.edit",
                                                            info.id
                                                        )}
                                                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline mx-1"
                                                    >
                                                        Edit
                                                    </Link>
                                                    <Link
                                                        href={route(
                                                            "info.destroy",
                                                            info.id
                                                        )}
                                                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline mx-1"
                                                    >
                                                        Delete
                                                    </Link>
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td
                                                colSpan="4"
                                                className="text-center py-4"
                                            >
                                                No info available
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                            {infos && infos.meta && (
                                <Pagination links={infos.meta.links} />
                            )}
                        </div>
                    </div>
                    <br />

                    {/*  */}
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
                                    {infos && infos.data ? (
                                        infos.data.map((info) => (
                                            <tr
                                                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                                                key={info.id}
                                            >
                                                <td className="px-3 py-2">
                                                    {info.id}
                                                </td>
                                                <td className="px-3 py-2">
                                                    <img
                                                        src={info.image_path} // Hapus tanda kurung kurawal
                                                        style={{ width: 60 }}
                                                    />
                                                </td>
                                                <td className="px-3 py-2">
                                                    {info.createdBy.name}
                                                </td>
                                                <td className="px-3 py-2">
                                                    <Link
                                                        href={route(
                                                            "info.edit",
                                                            info.id
                                                        )}
                                                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline mx-1"
                                                    >
                                                        Edit
                                                    </Link>
                                                    <Link
                                                        href={route(
                                                            "info.destroy",
                                                            info.id
                                                        )}
                                                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline mx-1"
                                                    >
                                                        Delete
                                                    </Link>
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td
                                                colSpan="4"
                                                className="text-center py-4"
                                            >
                                                No info available
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                            {infos && infos.meta && (
                                <Pagination links={infos.meta.links} />
                            )}
                        </div>
                    </div>
                    <br />

                    {/*  */}
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
                                    {infos && infos.data ? (
                                        infos.data.map((info) => (
                                            <tr
                                                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                                                key={info.id}
                                            >
                                                <td className="px-3 py-2">
                                                    {info.id}
                                                </td>
                                                <td className="px-3 py-2">
                                                    <img
                                                        src={info.image_path} // Hapus tanda kurung kurawal
                                                        style={{ width: 60 }}
                                                    />
                                                </td>
                                                <td className="px-3 py-2">
                                                    {info.createdBy.name}
                                                </td>
                                                <td className="px-3 py-2">
                                                    <Link
                                                        href={route(
                                                            "info.edit",
                                                            info.id
                                                        )}
                                                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline mx-1"
                                                    >
                                                        Edit
                                                    </Link>
                                                    <Link
                                                        href={route(
                                                            "info.destroy",
                                                            info.id
                                                        )}
                                                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline mx-1"
                                                    >
                                                        Delete
                                                    </Link>
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td
                                                colSpan="4"
                                                className="text-center py-4"
                                            >
                                                No info available
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                            {infos && infos.meta && (
                                <Pagination links={infos.meta.links} />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
