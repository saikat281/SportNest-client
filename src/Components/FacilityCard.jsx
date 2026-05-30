
import { Button, Card } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";


const FacilityCard = ({ data }) => {
    const { imageUrl, FacilityName, price, _id } = data
    return (
        <Card className="flex flex-col justify-between ">
            <div className="relative w-full h-[250px] ">
                <Image
                    src={imageUrl}
                    alt={FacilityName}
                    fill
                    className="object-cover "
                />
            </div>
            <div className=" flex justify-between items-center">
                <div className="space-y-3 w-full ">
                    <div>
                        <h1 className="text-2xl font-bold">{FacilityName}</h1>
                    </div>

                    <div className="flex justify-between items-center">
                        <div>
                            <h2 className="font-semibold">৳ {price} /per hour</h2>
                        </div>


                        <div>
                            <Link href={`/all-facilities/${_id}`}>
                                <button className='bg-black rounded-lg text-white p-2 cursor-pointer hover:bg-gray-800'> View Details</button>
                            </Link>
                        </div>
                    </div>

                </div>

            </div>




        </Card>
    );
};

export default FacilityCard;