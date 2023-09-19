import { Head, useForm } from "@inertiajs/react";
import InputError from "@/Components/InputError";
import ImageUploader from "@/Components/ImageUploader";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import Authenticated from "@/Layouts/AuthAdmin/Index";
import { Inertia } from '@inertiajs/inertia'; 
import TypeIt from "typeit-react";


export default function EditAboutMe({auth, about}) {
    const { data, setData, post, processing, errors } = useForm({
        ...about,
     });
     
 
     const handleOnChange = (event) => {
         setData(event.target.name,
             event.target.type === 'file' 
             ? event.target.files[0]
             : event.target.value);
     };
 
     const submit = (e) => {
         e.preventDefault();
 
         if(data.image === about.image){
             delete data.image;
         }
 
         Inertia.post(route('admin.dashboard.about.update', about.id),{
             _method: 'PUT',
             ...data
         });
     };

    return <Authenticated auth={auth}>
        <Head title="Admin Edit About Me" />
        <h1 className="text-3xl font-bold">Welcome to Admin Edit About Me</h1>

        <form onSubmit={submit}>

        <div className="grid grid-cols-2 dekstop:h-screen laptop:h-screen laptop:flex-row dekstop:flex-row tablet:flex-row mobile:h-auto mobile:grid-cols-1 pt-32">
                    <div className="">
                    <div className="flex justify-center">
                        <div className="">
                            {/* <ImageUploader
                            className="w-64 h-64 rounded-full"
                            label="Profile Picture"
                            name="image"
                            handleChange={handleOnChange}
                            defaultValue={about.image}
                            /> */}
                            
                            <TextInput
                className="dark:text-black justify-center items-center flex text-2xl font-thin mt-2"
                type="file"
                name="image"
                placeholder="Image"
                handleChange={handleOnChange}
            />
            <InputError message={errors.image} className="mt-2" />

                            <TextInput
                                className="dark:text-black justify-center items-center flex text-2xl font-thin mt-2"
                                type="text"
                                name="name"
                                placeholder="Name"
                                handleChange={handleOnChange}
                                defaultValue={about.name}
                            />
                            <InputError message={errors.name} className="mt-2" />

                            <TextInput
                                className="dark:text-black justify-center items-center flex text-xl font-thin mt-2"
                                type="text"
                                name="profession"
                                placeholder="Profession"
                                handleChange={handleOnChange}
                                defaultValue={about.profession}
                            />
                            <InputError message={errors.profession} className="mt-2" />

                            <InputLabel className="text-2xl mt-2 dark:text-white" value="Email" />
                            <TextInput
                                className="dark:text-black justify-center items-center flex text-xl font-thin mt-2"
                                type="text"
                                name= 'email'
                                placeholder="Email"
                                handleChange={handleOnChange}
                                defaultValue={about.email}
                            />
                            <InputError message={errors.email} className="mt-2" />

                            <InputLabel className="text-2xl mt-2 dark:text-white" value="Github" />
                            <TextInput
                                className="dark:text-black justify-center items-center flex text-xl font-thin mt-2"
                                type="text"
                                name="github"
                                placeholder="Github"
                                handleChange={handleOnChange}
                                defaultValue={about.github}
                            />
                            <InputError message={errors.github} className="mt-2" />

                            <InputLabel className="text-2xl mt-2 dark:text-white" value="Linkedin" />
                            <TextInput
                                className="dark:text-black justify-center items-center flex text-xl font-thin mt-2"
                                type="text"
                                name="linkedin"
                                placeholder="Linkedin"
                                handleChange={handleOnChange}
                                defaultValue={about.linkedin}
                            />
                            <InputError message={errors.linkedin} className="mt-2" />

                            <InputLabel className="text-2xl mt-2 dark:text-white" value="Instagram" />
                            <TextInput
                                className="dark:text-black justify-center items-center flex text-xl font-thin mt-2"
                                type="text"
                                name="instagram"
                                placeholder="Instagram"
                                handleChange={handleOnChange}
                                defaultValue={about.instagram}
                            />
                            <InputError message={errors.instagram} className="mt-2" />

                        </div>
                    </div>
                    </div>
                    <div className="p-4 mt-4">
                        <TypeIt className="dark:text-white text-3xl font-thin mobile:pt-32">About me</TypeIt>
                        <TextInput
                            className="dark:text-black text-xl font-thin mt-3 w-full h-64 border-collapse border-2 border-gray-300 rounded-md p-2 text-justify"
                            type="text"
                            name= 'description'
                            placeholder="Description"
                            handleChange={handleOnChange}
                            defaultValue={about.description}

                        />
                    <PrimaryButton className="bg-blue-500 dark:bg-blue-300 mt-2">
                        Update
                    </PrimaryButton>
                    </div>

                </div>
        </form>

    </Authenticated>
}