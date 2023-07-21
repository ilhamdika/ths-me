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

        <ImageUploader
            className="w-64 h-64 rounded-full"
            label="Profile Picture"
            name = "skill"
        />

    
        <TextInput
            className="dark:text-white justify-center items-center flex text-2xl font-thin mt-2"
            label="Name"
            name="name"
            type="text"
            placeholder="Name"
        />
        </div>

        <PrimaryButton className="mt-3">
            Save
        </PrimaryButton>
        </form>
    </Authenticated>
        
}