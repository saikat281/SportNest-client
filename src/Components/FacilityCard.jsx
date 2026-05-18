import { Button, Card } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";


const FacilityCard = ({ data }) => {
    const { imageUrl, FacilityName, price } = data
    return (
        <Card className="flex flex-col justify-between">
            <div className="relative w-[300px] h-[300px]">
                <Image
                    src={imageUrl}
                    alt={FacilityName}
                    fill
                    className="object-cover"
                />
            </div>
            <div className="flex justify-between items-center">
                <div>
                    <div>
                        <h1>{FacilityName}</h1>
                    </div>

                    <div>
                        <h2>{price}</h2>
                    </div>
                </div>
                <div>
                    <Link href={'/'}>
                        <Button className={'bg-black rounded-lg'}> View Details</Button>
                    </Link>
                </div>
            </div>




        </Card>
    );
};

export default FacilityCard;