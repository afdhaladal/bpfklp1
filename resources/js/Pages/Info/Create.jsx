import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Create({ auth }) {
    const { data, setData, post, errors, reset } = useForm({
        image: null,
    });

    const onSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("image", data.image);

        post(route("info.store"), {
            data: formData,
            onSuccess: () => reset(),
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex justify-between items-center">
                    <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                        Create New Info
                    </h2>
                </div>
            }
        >
            <Head title="Infos" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <form
                            onSubmit={onSubmit}
                            className="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg"
                            encType="multipart/form-data"
                        >
                            <div>
                                <InputLabel
                                    htmlFor="info_image_path"
                                    value="Info Image"
                                />
                                <TextInput
                                    id="info_image_path"
                                    type="file"
                                    name="image"
                                    className="mt-1 block w-full"
                                    onChange={(e) =>
                                        setData("image", e.target.files[0])
                                    }
                                />
                                <InputError
                                    message={errors.image}
                                    className="mt-2"
                                />
                            </div>

                            <div className="mt-4 text-right">
                                <Link
                                    href={route("info.index")}
                                    className="bg-gray-100 py-1 px-3 text-gray-800 rounded shadow transition-all hover:bg-gray-200 mr-2"
                                >
                                    Cancel
                                </Link>
                                <button className="bg-emerald-500 py-1 px-3 text-white rounded shadow transition-all hover:bg-emerald-600">
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
