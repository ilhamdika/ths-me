import ImageUploader from "@/Components/ImageUploader";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import Authenticated from "@/Layouts/AuthAdmin/Index";
import { Link } from "@inertiajs/react";
import TypeIt from "typeit-react";



export default function EditAboutMe() {
    return <Authenticated>
        <h1 className="text-3xl font-bold">Welcome to Admin Edit About Me</h1>

        <form>

        <div className="grid grid-cols-2 dekstop:h-screen laptop:h-screen laptop:flex-row dekstop:flex-row tablet:flex-row mobile:h-auto mobile:grid-cols-1 pt-32">
                    <div className="">
                    <div className="flex justify-center">
                        <div className="">
                            <ImageUploader
                            className="w-64 h-64 rounded-full"
                            label="Profile Picture"
                            />
                            
                            <TextInput
                                className="dark:text-black justify-center items-center flex text-2xl font-thin mt-2"
                                label="Name"
                                name="name"
                                type="text"
                                defaultValue="Ilham Dika Permana"
                            />

                            <TextInput
                                className="dark:text-black justify-center items-center flex text-xl font-thin mt-2"
                                label="Job"
                                name="job"
                                type="text"
                                defaultValue="Web Developer"
                            />

                                <ImageUploader
                                className="w-10 h-10 mx-3 my-2 bg-dark rounded-3xl dark:rounded-none"
                                label="Sosmed 1"
                                />
                                
                                <ImageUploader
                                className="w-10 h-10 mx-3 my-2 bg-dark rounded-3xl dark:rounded-none"
                                label="Sosmed 2"
                                />

                                <ImageUploader
                                className="w-10 h-10 mx-3 my-2 bg-dark rounded-3xl dark:rounded-none"
                                label="Sosmed 3"
                                />

                                <ImageUploader
                                className="w-10 h-10 mx-3 my-2 bg-dark rounded-3xl dark:rounded-none"
                                label="Sosmed 4"
                                />
                        </div>
                    </div>
                    </div>
                    <div className="p-4 mt-4">
                        <TypeIt className="dark:text-white text-3xl font-thin mobile:pt-32">About me</TypeIt>
                        <TextInput
                            className="dark:text-black text-xl font-thin mt-3 w-full h-64 border-collapse border-2 border-gray-300 rounded-md p-2 text-justify"
                            label="Description"
                            name="description"
                            type="paragraph"
                            defaultValue="I am a fresh graduate of S1 Informatics Engineering who is always motivated and able to work together in a team or work individually. Now looking for a position as a web developer. Someone who is thorough, structured, and nimble when doing tasks. Ambitious to learn and grow from the experiences I've had."
                        />
                    <PrimaryButton className="bg-blue-500 dark:bg-blue-300 mt-2">
                                <Link href={route('prototype.admin.edit-about')}>
                                    Save
                                </Link>
                            </PrimaryButton>
                    </div>

                </div>
        </form>

    </Authenticated>
}