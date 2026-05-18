import { Button, Card } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";


const FacilityCard = ({ data }) => {
    const { imageUrl, FacilityName, price, _id } = data
    return (
        <Card className="flex flex-col justify-between">
            <div className="relative w-[400px] h-[400px] ">
                <Image
                    src={imageUrl}
                    alt={FacilityName}
                    fill
                    className="object-cover "
                />
            </div>
            <div className="flex justify-between items-center">
                <div className="space-y-3">
                    <div>
                        <h1 className="text-2xl font-bold">{FacilityName}</h1>
                    </div>

                    <div>
                        <h2 className="font-semibold">৳ {price} /per hour</h2>
                    </div>
                    <div>
                        <Button className={'bg-green-600'}>
                            <FaExternalLinkAlt />
                            <span>Book Now</span>
                        </Button>

                    </div>
                </div>
                <div>
                    <Link href={`/all-facilities/${_id}`}>
                        <Button className={'bg-black rounded-lg'}> View Details</Button>
                    </Link>
                </div>
            </div>




        </Card>
    );
};

export default FacilityCard;