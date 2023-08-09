import ImageUploader from "@/Components/ImageUploader"
import Authenticated from "@/Layouts/AuthAdmin/Index"
import TextInput from "@/Components/TextInput"
import PrimaryButton from "@/Components/PrimaryButton"
import InputLabel from "@/Components/InputLabel"

export default function SkillAdd (){
    return <Authenticated>
        <h1 className="text-3xl font-bold">Welcome to Admin Add Skills</h1>

        <form>
        <div className="mt-3">
        <InputLabel
            className="text-2xl my-2 dark:text-white"
            value="Image"
        />
        <ImageUploader
            className="w-64 h-64 rounded-full "
            name = "skill"
        />

        <InputLabel
            className="text-2xl mt-2 dark:text-white"
            value="Skill"
        />
        <TextInput
            className="dark:text-black justify-center items-center flex text-2xl font-thin mt-2"
            label="Name"
            name="name"
            type="text"
            placeholder="Name"
        />
        </div>

        <PrimaryButton className="mt-3 dark:bg-blue-300">
            Save
        </PrimaryButton>
        </form>
    </Authenticated>
        
}