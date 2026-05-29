
import { DeleteFacilityModal } from "@/Components/DeleteFacilityModal";
import { EditFacilityModal } from "@/Components/EditFacilityModal";
import SearchFacility from "@/Components/SearchFacility";
import { auth } from "@/lib/auth";
import { Button, Card } from "@heroui/react";
import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import { FaEdit, FaExternalLinkAlt } from "react-icons/fa";
import { IoTrashBin } from "react-icons/io5";


const ManageMyFacilitiesPage = async ({ searchParams }) => {

    const params = await searchParams

    const search = params?.search || "";
    const sportType = params?.sportType || "";

    // for server component, get userdata:
    const session = await auth.api.getSession({
        headers: await headers()
    })
    const user = session?.user;

    const res = await fetch(`http://localhost:5000/facility/user/${user.id}?search=${search}&sportType=${sportType}`,
        { cache: "no-store" });
    const data = await res.json();
    // const { imageUrl, FacilityName, price, _id } = data
    return (
        <div className="mt-[60px] max-w-7xl mx-auto">
            <div className="flex justify-between items-center">
                <h1 className=" text-4xl font-bold">My Facilities</h1>
                <div>
                     <SearchFacility></SearchFacility>
                </div>
            </div>

            <div className=" grid grid-cols-3 gap-10 mt-[60px]">
                {
                    data.map((d, idx) => {
                        return <Card key={idx} className=" bg-green-50  p-6 shadow">
                            <div>

                                <div className="relative w-auto h-[300px]">
                                    <Image
                                        src={d.imageUrl}
                                        alt={d.FacilityName}
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                            </div>
                            <div className="flex justify-between items-center gap-3 space-y-2">
                                <div>
                                    <h1 className="text-3xl font-bold">{d.FacilityName}</h1>
                                    <p className="font-bold">Facility Type: {d.FacilityType}</p>
                                    <p className="font-bold">Location: {d.location}</p>
                                    <p className="text-2xl font-bold">Price: ৳{d.price}</p>


                                </div>
                                <div className="space-x-2">
                                    <EditFacilityModal d={d}></EditFacilityModal>
                                    <DeleteFacilityModal facility_Name={d.FacilityName} id={d._id}></DeleteFacilityModal>
                                </div>
                            </div>

                        </Card>
                    })
                }
            </div>
        </div>
    );
};

export default ManageMyFacilitiesPage;