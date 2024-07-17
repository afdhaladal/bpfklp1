import { useEffect } from 'react';
import Checkbox from '@/Components/Checkbox';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('login'));
    };

    const settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
    };

    return (
        <GuestLayout>
            <Head title="Log in" />


            <div className="flex bg-white shadow-md rounded-lg overflow-hidden">
                <div className="w-1/2 p-8">
                    <img
                        src="http://127.0.0.1/bpfklp1/bpfklp1/storage/app/public/assets_off/log_rfp.png"
                        alt="Logo"
                        className="h-16 mb-4"
                    />
                    <h2 className="text-2xl font-bold mb-4">
                        Halo, Welcome Back
                    </h2>
                    {status && (
                        <div className="mb-4 font-medium text-sm text-green-600">
                            {status}
                        </div>
                    )}
                    <form onSubmit={submit}>
                        <div className="mb-4">
                            <InputLabel htmlFor="email" value="Username" />
                            <TextInput
                                id="email"
                                type="email"
                                name="email"
                                value={data.email}
                                className="mt-1 block w-full"
                                autoComplete="username"
                                isFocused={true}
                                onChange={(e) =>
                                    setData("email", e.target.value)
                                }
                            />
                            <InputError
                                message={errors.email}
                                className="mt-2"
                            />
                        </div>

                        <div className="mb-4">
                            <InputLabel
                                htmlFor="password"
                                value="Password"
                            />
                            <TextInput
                                id="password"
                                type="password"
                                name="password"
                                value={data.password}
                                className="mt-1 block w-full"
                                autoComplete="current-password"
                                onChange={(e) =>
                                    setData("password", e.target.value)
                                }
                            />
                            <InputError
                                message={errors.password}
                                className="mt-2"
                            />
                        </div>

                        <div className="block mb-4">
                            <label className="flex items-center">
                                <Checkbox
                                    name="remember"
                                    checked={data.remember}
                                    onChange={(e) =>
                                        setData(
                                            "remember",
                                            e.target.checked
                                        )
                                    }
                                />
                                <span className="ml-2 text-sm text-gray-600">
                                    Remember me
                                </span>
                            </label>
                        </div>

                        <div className="flex items-center justify-between">
                            {canResetPassword && (
                                <Link
                                    href={route("password.request")}
                                    className="underline text-sm text-gray-600 hover:text-gray-900"
                                >
                                    Forgot your password?
                                </Link>
                            )}
                            <PrimaryButton
                                className="ml-4"
                                disabled={processing}
                            >
                                Sign In
                            </PrimaryButton>
                        </div>
                    </form>
                </div>
                <div className="w-1/2 bg-green-600 flex items-center justify-center">
                    <div className="w-full max-w-xs">
                        <Slider {...settings}>
                            <div>
                                <img
                                    src="http://127.0.0.1/bpfklp1/bpfklp1/storage/app/public/slideShow_login/1.jpg"
                                    alt="Slide 1"
                                    style={{ width: '100%', height: '300px', objectFit: 'contain' }}
                                />
                            </div>
                            <div>
                                <img
                                    src="http://127.0.0.1/bpfklp1/bpfklp1/storage/app/public/slideShow_login/2.jpg"
                                    alt="Slide 2"
                                    style={{ width: '100%', height: '300px', objectFit: 'contain' }}
                                />
                            </div>
                            <div>
                                <img
                                    src="http://127.0.0.1/bpfklp1/bpfklp1/storage/app/public/slideShow_login/3.png"
                                    alt="Slide 3"
                                    style={{ width: '100%', height: '300px', objectFit: 'contain' }}
                                />
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>

        </GuestLayout>
    );
}
