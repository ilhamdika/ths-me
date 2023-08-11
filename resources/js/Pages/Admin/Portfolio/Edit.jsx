import InputLabel from "@/Components/InputLabel"
import Authenticated from "@/Layouts/AuthAdmin/Index"
import TextInput from "@/Components/TextInput"
import ImageUploader from "@/Components/ImageUploader"
import PrimaryButton from "@/Components/PrimaryButton"
import { Head,  useForm } from '@inertiajs/react';
import InputError from "@/Components/InputError"
import { Inertia } from '@inertiajs/inertia'; 


export default function CreatePortfolio ({auth, portfolio}){
    const { data, setData, post, processing, errors } = useForm({
       ...portfolio,
    });
    

    const handleOnChange = (event) => {
        setData(event.target.name,
            event.target.type === 'file' 
            ? event.target.files[0]
            : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        if(data.image === portfolio.image){
            delete data.image;
        }

        Inertia.post(route('admin.dashboard.portfolio.update', portfolio.id),{
            _method: 'PUT',
            ...data
        });
    };

    return <Authenticated auth={auth}>
        <Head title="Admin Add Portfolio" />
        <h1 className="text-3xl font-bold dark:text-white">Edit Portfolio: {portfolio.title}</h1>

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
                defaultValue={portfolio.title}
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
                defaultValue={portfolio.technology}
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
                defaultValue={portfolio.description}
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
                defaultValue={portfolio.link}
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
                defaultValue={portfolio.github}
            />
            <InputError message={errors.github} className="mt-2" />

            <PrimaryButton className="mt-3 dark:bg-blue-300">
                Save
            </PrimaryButton>
        </form>

    </Authenticated>

}