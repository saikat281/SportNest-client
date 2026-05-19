
import { Button, Card } from "@heroui/react";
import Image from "next/image";

const FacilityDetailsPage = async ({ params }) => {

    const { id } = await params;

    const res = await fetch(`http://localhost:5000/facility/${id}`)
    const data = await res.json();
    console.log(data);
    const { FacilityName, FacilityType, imageUrl, location, price, Capacity, Available_Time_Slots, description } = data
    return (
        <div className="h-screen w-full max-w-7xl mx-auto  flex items-center">
            <Card className="flex flex-row justify-around items-center bg-green-50">
                <div>
                    <Image
                        src={imageUrl}
                        alt={FacilityName}
                        height={600}
                        width={600}

                    />
                </div>
                <div className="space-y-3">
                    <h1 className="text-5xl font-bold">{FacilityName}</h1>
                    <p className="text-3xl font-semibold text-green-800">$ {price}</p>
                    <p className="text-2xl"> <span className="font-semibold">Facility Type: </span>{FacilityType}</p>
                    <p className="text-2xl"> <span className="font-semibold">Location: </span>{location}</p>
                    <p className="text-2xl"> <span className="font-semibold">Capacity: </span>{Capacity}</p>
                    <p className="text-2xl"> <span className="font-semibold">Available Time Slots: </span>{Available_Time_Slots}</p>
                    <p className="text-2xl">  <span className="font-semibold">Description: </span>{description}</p>
                    <Button>Book Now</Button>

                </div>
            </Card>

        </div>
    );
};

export default FacilityDetailsPage;