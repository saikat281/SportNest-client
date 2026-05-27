
import { auth } from "@/lib/auth";
import { Button, Card } from "@heroui/react";
import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import { FaEdit, FaExternalLinkAlt } from "react-icons/fa";
import { IoTrashBin } from "react-icons/io5";


const ManageMyFacilitiesPage = async () => {

    // for server component, get userdata:
    const session = await auth.api.getSession({
        headers: await headers()
    })
    const user = session?.user;

    const res = await fetch(`http://localhost:5000/facility/user/${user.id}`);
    const data = await res.json();
    // const { imageUrl, FacilityName, price, _id } = data
    return (
        <div className="mt-[60px]">
            <h1 className="text-center text-4xl font-bold">All Facilities</h1>
            <div className="max-w-7xl mx-auto grid grid-cols-3 gap-10">
                {
                    data.map((d, idx) => {
                        return <Card key={idx} className=" flex flex-row justify-between items-center bg-green-100  p-6 shadow">
                            <div className="flex items-center gap-3 space-y-2">

                                <div>
                                    <Image
                                        src={d.imageUrl}
                                        alt={d.FacilityName}
                                        fill
                                        className="object-cover "
                                    />
                                </div>

                                <div>
                                    <h1 className="text-3xl font-bold">{d.facility_Name}</h1>
                                    <p className="font-bold">Facility Type: {d.FacilityType}</p>
                                    <p className="font-bold">Location: {d.location}</p>
                                    <p className="text-2xl font-bold">Price: ৳{d.price}</p>

                                </div>


                            </div>

                            <div>
                                <Button isIconOnly variant="secondary">
                                    <FaEdit />
                                </Button>
                                <Button isIconOnly variant="danger">
                                    <IoTrashBin />
                                </Button>
                            </div>
                        </Card>
                    })
                }
            </div>
        </div>
    );
};

export default ManageMyFacilitiesPage;