import Card from "@/Components/Card";
import PrimaryButton from "@/Components/PrimaryButton";
import AuthUser from "@/Layouts/AuthUser/Index";
import NavigationBar from "@/Layouts/AuthUser/NavigationBar";


export default function Index (){
    return(
      <>
      <div className="bg-black">
        <div className="mr-10 ml-10">

      <NavigationBar/>

            <div className="flex justify-center items-center py-36">
                <div className="">
                    <img src="/images/landing.png" alt="IMG-20211017-123751" border="0" className='rounded-full w-64 h-64'/>
                    {/* <h1 className="text-white justify-center items-center flex mt-2">
                        Hi, internet
                    </h1> */}
                    <h1 className="text-white justify-center items-center flex text-2xl font-thin mt-2">
                        Ilham Dika Permana
                    </h1>
                    <h1 className="text-white justify-center items-center flex text-4xl mt-3 font-medium">
                        Web Developer
                    </h1>
                    <div className="flex justify-center items-center mt-3">
                        <PrimaryButton className="text-white  w-52">
                            About Me
                        </PrimaryButton>
                    </div>
                </div>
            </div>
            <div className="flex flex-col h-screen laptop:flex-row dekstop:flex-row tablet:flex-row ">
                {[1,2,3].map(i=> (
                <Card 
                key={i}
                thumbnail={'https://static.vecteezy.com/system/resources/previews/000/330/430/original/vector-pencil-line-black-icon.jpg'}
                title={'Web Developer'}
                description={'Create a website for information, business etc., which can be accessed digitally'}
                />
                ))}
            </div>
            <div>

            <div className="flex justify-center items-center py-36">
            
                <div className="">
                    <img src="/images/landing.png" alt="IMG-20211017-123751" border="0" className='rounded-full w-64 h-64'/>
                    {/* <h1 className="text-white justify-center items-center flex mt-2">
                        Hi, internet
                    </h1> */}
                    <h1 className="text-white justify-center items-center flex text-2xl font-thin mt-2">
                        Ilham Dika Permana
                    </h1>
                    <h1 className="text-white justify-center items-center flex text-4xl mt-3 font-medium">
                        Web Developer
                    </h1>
                    <div className="flex justify-center items-center mt-3">
                        <PrimaryButton className="text-white  w-52">
                            About Me
                        </PrimaryButton>
                    </div>
                </div>
            </div>
        
        </div>
        </div>
      </div>
      </>
    
    )
}