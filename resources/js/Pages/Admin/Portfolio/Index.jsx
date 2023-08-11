import Authenticated from "@/Layouts/AuthAdmin";
import { useState, useEffect } from "react";
import { DotLoader } from "react-spinners";
import PrimaryButton from "@/Components/PrimaryButton";
import { Link, useForm } from "@inertiajs/react";
import { AiFillEdit, AiFillDelete } from "react-icons/ai"
import { BiDetail } from "react-icons/bi"


export default function Portfolio({auth, portfolios}) {
    const [loading,setLoading]=useState(false)
    useEffect(()=>{
        setLoading(true)
        setTimeout(()=>{
            setLoading(false)
        },2000)
    },[])

    const {delete: destroy} =useForm()

    return (
        <Authenticated auth={auth}>
            {
                loading ? <div className="flex justify-center items-center h-screen">
                    <DotLoader color={'#161616'} loading={loading} size={150} />
                </div> :
            <div className="justify-center items-center h-screen">
                <h1 className="text-3xl font-bold my-3 dark:text-white">Welcome to Admin Portfolio</h1>
                <PrimaryButton className="bg-green-500 dark:bg-green-500">
                    <Link href={route('admin.dashboard.portfolio.create')}>
                        Create
                    </Link>
                </PrimaryButton>

                <table className="mt-3 w-full dark:text-white">
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
                            {portfolios.map((portfolio, i=1) => (
							<tr key={portfolio.id}>
                                <td>{i+1}</td>
								<td>
									<img src={`/storage/${portfolio.image}`} className="w-23 h-20" />
								</td>
								<td>{portfolio.title}</td>
								<td>{portfolio.technology}</td>
								<td className="w-auto">
                                <div className="flex items-center justify-center h-full">
                                    <Link href={route('admin.dashboard.portfolio.edit', portfolio.id)}>
                                        <PrimaryButton className="bg-yellow-500 mobile:w-10">
                                            <AiFillEdit size="20" />
                                        </PrimaryButton>
                                    </Link>
                                    <Link href={route('admin.dashboard.portfolio.show', portfolio.id)}>
                                        <PrimaryButton className="bg-green-500 mobile:w-10">
                                            <BiDetail size="20" />
                                        </PrimaryButton>
                                    </Link>
                                    {/* <PrimaryButton className="bg-red-600 mobile:w-10"
                                    onClick={()=> {
                                        destroy('admin.dashboard.portfolio.destroy', portfolio.id)
                                    }}
                                    >
                                        <AiFillDelete size="20" />
                                    </PrimaryButton> */}

                                    <PrimaryButton className="bg-red-600 mobile:w-10"
                                        onClick={()=> {
										destroy(route('admin.dashboard.portfolio.destroy', portfolio.id)) 
									    }}
                                    >
                                        <AiFillDelete size="20" />
                                    </PrimaryButton>
                                </div>
                                </td>
							</tr>
                            ))}
							
						</tbody>
					</table>
            </div>
}
        </Authenticated>
    )
}