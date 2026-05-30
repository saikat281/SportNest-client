
import BookingCard from "@/Components/BookingCard";
import { auth } from "@/lib/auth";
import { Button, Card } from "@heroui/react";
import { headers } from "next/headers";
import Image from "next/image";

const FacilityDetailsPage = async ({ params }) => {

    const { id } = await params;
    const {token} = await auth.api.getToken ({
        headers : await headers()
    })
    console.log(token)

    const res = await fetch(`http://localhost:5000/facility/${id}`,{
        headers : {
            authorization : `Bearer ${token}`
        }
    })
    const data = await res.json();
    // console.log(data);
    const { FacilityName, FacilityType, imageUrl, location, price, Capacity, Available_Time_Slots, description } = data
    return (
        <div className=" w-full max-w-7xl mx-auto  flex items-center justify-center mt-[20px] ">
            <Card className="flex flex-row justify-around  bg-gray-100 shadow">
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
                <div>
                    <BookingCard data={data}></BookingCard>
                    {/* <Button>Book Now</Button> */}

                </div>
            </Card>

        </div>
    );
};

export default FacilityDetailsPage;