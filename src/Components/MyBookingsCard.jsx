import { Button, Card } from "@heroui/react";
import { BookingCancelAlert } from "./BookingCancelAlert";


const MyBookingsCard = ({ data }) => {
    const { facility_Name, booking_date, time_slot, price } = data
    return (
        <div >
            <Card className=" flex flex-row justify-between items-center bg-green-100  p-6 shadow">
                <div className="space-y-2">
                    <h1 className="text-3xl font-bold">{facility_Name}</h1>
                    <p className="font-bold">Booking Date: {booking_date}</p>
                    <p className="font-bold">Time Slot: {time_slot}</p>
                    <p className="text-2xl font-bold">Price: ৳{price}</p>
                    <p className=" font-bold ">Status: <span className="bg-amber-500 rounded-xl p-2">Pending</span> </p>
                    
                </div>
                <div>
                    <BookingCancelAlert facility_Name={facility_Name} booking_id={data._id}></BookingCancelAlert> 
                </div>
            </Card>
        </div>
    );
};

export default MyBookingsCard;