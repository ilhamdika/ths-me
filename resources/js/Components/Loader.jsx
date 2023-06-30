import { BeatLoader } from "react-spinners";

export default function Loader (){
    return(
        <div className="flex items-center justify-center h-screen">
        <BeatLoader color="#4F46E5" loading={true} size={15} />
      </div>
    )
}