import ImageUploader from "@/Components/ImageUploader"
import PrimaryButton from "@/Components/PrimaryButton"
import Authenticated from "@/Layouts/AuthAdmin/Index"
import { Link } from "@inertiajs/react"
import { AiFillEdit, AiFillDelete } from "react-icons/ai"


export default function SkillsEdit (){
    return <Authenticated>
        <h1 className="text-3xl font-bold">Welcome to Admin Edit Skills</h1>

        <div>
                    <h1 className="dark:text-white text-3xl font-bold text-center">My Skills</h1>

                    <PrimaryButton className="bg-green-500">
                    <Link href={route('prototype.admin.add-skills')}>
                        Create
                    </Link>
                </PrimaryButton>
                    
                    <table className="mt-3 w-full">
						<thead>
							<tr>
								<th>No</th>
								<th>Thumbail</th>
								<th>Title</th>
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
								
								<td>
                                    <div className="flex items-center justify-center h-full">

                                    <Link>
                                        <PrimaryButton className="bg-yellow-500 mobile:w-10">
                                            <AiFillEdit size="20" />
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
    </Authenticated>    
}