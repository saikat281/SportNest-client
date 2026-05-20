
import BookingCard from "@/Components/BookingCard";
import { Button, Card } from "@heroui/react";
import Image from "next/image";

const FacilityDetailsPage = async ({ params }) => {

    const { id } = await params;

    const res = await fetch(`http://localhost:5000/facility/${id}`)
    const data = await res.json();
    // console.log(data);
    const { FacilityName, FacilityType, imageUrl, location, price, Capacity, Available_Time_Slots, description } = data
    return (
        <div className="h-[80vh] w-full max-w-7xl mx-auto  flex items-center mt-[60px]">
            <Card className="flex flex-row justify-around  bg-linear-to-r from-green-50 to-green-100">
                <div className="space-y-3">
                    <Image
                        src={imageUrl}
                        alt={FacilityName}
                        height={600}
                        width={600}

                    />

                    <h1 className="text-5xl font-bold">{FacilityName}</h1>
                    
                    <p className="text-2xl font-bold"> <span className="font-semibold">Price per Hour: </span>৳{price}</p>
                    <p className="text-2xl"> <span className="font-semibold">Facility Type: </span>{FacilityType}</p>
                    <p className="text-2xl"> <span className="font-semibold">Location: </span>{location}</p>
                    <p className="text-2xl"> <span className="font-semibold">Capacity: </span>{Capacity}</p>
                    <p className="text-2xl"> <span className="font-semibold">Available Time Slots: </span>{Available_Time_Slots}</p>
                    <p className="text-2xl">  <span className="font-semibold">Description: </span>{description}</p>
                </div>
                <div className=" h-[70vh]">
                    <BookingCard data={data}></BookingCard>
                    {/* <Button>Book Now</Button> */}

                </div>
            </Card>

        </div>
    );
};

export default FacilityDetailsPage;