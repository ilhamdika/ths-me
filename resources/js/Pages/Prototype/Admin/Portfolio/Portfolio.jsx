import Authenticated from "@/Layouts/AuthAdmin";
import { useState, useEffect } from "react";
import { DotLoader } from "react-spinners";
import PrimaryButton from "@/Components/PrimaryButton";
import { Link } from "@inertiajs/react";
import { AiFillEdit, AiFillDelete } from "react-icons/ai"
import { BiDetail } from "react-icons/bi"


export default function Portfolio() {
    const [loading,setLoading]=useState(false)
    useEffect(()=>{
        setLoading(true)
        setTimeout(()=>{
            setLoading(false)
        },2000)
    },[])

    return (
        <Authenticated>
            {
                loading ? <div className="flex justify-center items-center h-screen">
                    <DotLoader color={'#161616'} loading={loading} size={150} />
                </div> :
            <div className="justify-center items-center h-screen">
                <h1 className="text-3xl font-bold my-3">Welcome to Admin Portfolio</h1>
                <PrimaryButton className="bg-green-500">
                    <Link href={route('prototype.admin.add-portfolio')}>
                        Create
                    </Link>
                </PrimaryButton>

                <table className="mt-3 w-full">
						<thead>
							<tr>
								<th>No</th>
								<th>Thumbail</th>
								<th>Title</th>
								<th>Tecnology</th>
								<th>Action</th>
							</tr>
						</thead>
						<tbody>
							<tr>
                                <td>1</td>
								<td>
									<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5TdYsTZ2WFbJLwPwgbVfexWzppcvGaUxEcg&usqp=CAU" />
									
								</td>
								<td>Naruto</td>
								<td>Action</td>
								<td className="w-auto">
                                <div className="flex items-center justify-center h-full">
                                    <Link>
                                        <PrimaryButton className="bg-yellow-500 mobile:w-10">
                                            <AiFillEdit size="20" />
                                        </PrimaryButton>
                                    </Link>
                                    <Link>
                                        <PrimaryButton className="bg-green-500 mobile:w-10">
                                            <BiDetail size="20" />
                                        </PrimaryButton>
                                    </Link>
                                    <PrimaryButton className="bg-red-600 mobile:w-10">
                                        <AiFillDelete size="20" />
                                    </PrimaryButton>
                                </div>
                                </td>
							</tr>
							
						</tbody>
					</table>
            </div>
}
        </Authenticated>
    )
}