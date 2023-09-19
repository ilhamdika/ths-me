import PrimaryButton from "@/Components/PrimaryButton";
import Authenticated from "@/Layouts/AuthAdmin/Index"
import { Head, Link } from '@inertiajs/react';

export default function ShowPortfolio ({auth, portfolio}){
    return <Authenticated auth={auth}>
        <Head title="Detail Portfolio" />
        <PrimaryButton>
            <Link href={route('admin.dashboard.portfolio.index')} as="button" className="text-white">
                Back
            </Link>
        </PrimaryButton>
        <h1 className="text-3xl font-bold dark:text-white">Show Portfolio: {portfolio.title}</h1>
        <div className="flex flex-col justify-center items-center">
            <img src={`/storage/${portfolio.image}`} className="w-40 h-40" />
            <h2 className="text-2xl font-bold dark:text-white">{portfolio.title}</h2>
            <p className="text-xl font-thin dark:text-white">{portfolio.technology}</p>
            <p className="text-xl font-thin dark:text-white">{portfolio.description}</p>
            <p className="text-xl font-thin dark:text-white">{portfolio.link}</p>
            <p className="text-xl">{portfolio.github}</p>
        </div>

        </Authenticated>
}