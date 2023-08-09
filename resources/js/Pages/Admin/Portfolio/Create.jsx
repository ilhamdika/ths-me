import InputLabel from "@/Components/InputLabel"
import Authenticated from "@/Layouts/AuthAdmin/Index"
import TextInput from "@/Components/TextInput"
import ImageUploader from "@/Components/ImageUploader"
import PrimaryButton from "@/Components/PrimaryButton"

export default function CreatePortfolio ({auth}){
    return <Authenticated auth={auth}>
        <h1 className="text-3xl font-bold dark:text-white">Welcome to Admin Add Portfolio</h1>

        <form>
            
            <InputLabel
                className="text-2xl mt-2 dark:text-white"
                value="Title"
            />
            <TextInput
                className="dark:text-black justify-center items-center flex text-2xl font-thin mt-2"
                label="Title"
                name="title"
                type="text"
                placeholder="Title"
            />

            <InputLabel
                className="text-2xl mt-2 dark:text-white"
                value="Tecnology"
            />
            <TextInput
                className="dark:text-black justify-center items-center flex text-2xl font-thin mt-2"
                label="Tecnology"
                name="tecnology"
                type="text"
                placeholder="Tecnology"
            />

            <InputLabel
                className="text-2xl mt-2 dark:text-white"
                value="Image"
            />

            <ImageUploader
                className="w-64 h-64 rounded-full"
                name = "thumbnail"
            />

            <InputLabel
                className="text-2xl mt-2 dark:text-white"
                value="Description"
            />
            <TextInput
                className="dark:text-black justify-center items-center flex text-2xl font-thin mt-2"
                label="Description"
                name="description"
                type="text"
                placeholder="Description"
            />

            <InputLabel
                className="text-2xl mt-2 dark:text-white"
                value="Link"
            />
            <TextInput
                className="dark:text-black justify-center items-center flex text-2xl font-thin mt-2"
                label="Link"
                name="link"
                type="text"
                placeholder="Link"
            />

            <InputLabel
                className="text-2xl mt-2 dark:text-white"
                value="Github"
            />
            <TextInput
                className="dark:text-black justify-center items-center flex text-2xl font-thin mt-2"
                label="Github"
                name="github"
                type="text"
                placeholder="Github"
            />

            <PrimaryButton className="mt-3 dark:bg-blue-300">
                Save
            </PrimaryButton>
        </form>

    </Authenticated>

}