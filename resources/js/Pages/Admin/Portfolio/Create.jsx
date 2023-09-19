import InputLabel from "@/Components/InputLabel"
import Authenticated from "@/Layouts/AuthAdmin/Index"
import TextInput from "@/Components/TextInput"
import ImageUploader from "@/Components/ImageUploader"
import PrimaryButton from "@/Components/PrimaryButton"
import { Head,  useForm } from '@inertiajs/react';
import InputError from "@/Components/InputError"

export default function CreatePortfolio ({auth}){
    const { setData, post, processing, errors } = useForm({
       title: '',
       technology: '',
       description: '',
       image: '',
       link: '',
       github: '',
    });


    const handleOnChange = (event) => {
        setData(event.target.name,
            event.target.type === 'file' 
            ? event.target.files[0]
            : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('admin.dashboard.portfolio.store'));
    };

    return <Authenticated auth={auth}>
        <Head title="Admin Add Portfolio" />
        <h1 className="text-3xl font-bold dark:text-white">Welcome to Admin Add Portfolio</h1>

        <form onSubmit={submit}>
            
            <InputLabel
                className="text-2xl mt-2 dark:text-white"
                value="Title"
            />
            <TextInput
                className="dark:text-black justify-center items-center flex text-2xl font-thin mt-2"
                type="text"
                name="title"
                placeholder="Title"
                handleChange={handleOnChange}
            />
            <InputError message={errors.title} className="mt-2" />

            <InputLabel
                className="text-2xl mt-2 dark:text-white"
                value="Tecnology"
            />
            <TextInput
                className="dark:text-black justify-center items-center flex text-2xl font-thin mt-2"
                type="text"
                name="technology"
                placeholder="technology"
                handleChange={handleOnChange}
            />
            <InputError message={errors.technology} className="mt-2" />

            <InputLabel
                className="text-2xl mt-2 dark:text-white"
                value="Image"
            />
            <TextInput
                className="dark:text-black justify-center items-center flex text-2xl font-thin mt-2"
                type="file"
                name="image"
                placeholder="Image"
                handleChange={handleOnChange}
            />
            <InputError message={errors.image} className="mt-2" />

            <InputLabel
                className="text-2xl mt-2 dark:text-white"
                value="Description"
            />
            <TextInput
                className="dark:text-black justify-center items-center flex text-2xl font-thin mt-2"
                type="text"
                name="description"
                placeholder="Description"
                handleChange={handleOnChange}
            />
            <InputError message={errors.description} className="mt-2" />

            <InputLabel
                className="text-2xl mt-2 dark:text-white"
                value="Link"
            />
            <TextInput
                className="dark:text-black justify-center items-center flex text-2xl font-thin mt-2"
                type="url"
                name="link"
                placeholder="Link"
                handleChange={handleOnChange}
            />
            <InputError message={errors.link} className="mt-2" />

            <InputLabel
                className="text-2xl mt-2 dark:text-white"
                value="Github"
            />
            <TextInput
                className="dark:text-black justify-center items-center flex text-2xl font-thin mt-2"
                type="url"
                name="github"
                placeholder="Github"
                handleChange={handleOnChange}
            />
            <InputError message={errors.github} className="mt-2" />

            <PrimaryButton className="mt-3 dark:bg-blue-300" type={submit}>
                Save
            </PrimaryButton>
        </form>

    </Authenticated>

}