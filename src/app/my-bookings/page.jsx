import MyBookingsCard from "@/Components/MyBookingsCard";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

const MYBookingPage = async() => {

    // for server component, get userdata:
    const session = await auth.api.getSession({
        headers : await headers()
    })
    // console.log(session);
    const user = session?.user;
    // console.log(user)


    const res = await fetch(`http://localhost:5000/booking/${user?.id}`);
    const MyBookingData = await res.json();
    
    return (
        <div className="w-full max-w-7xl mx-auto">
            <h1 className="text-4xl font-bold text-center mt-[60px]">My Bookings</h1>
            <div className="space-y-3 mt-[60px]">
                {
                    MyBookingData.map(data=> <MyBookingsCard key={data._id} data={data}></MyBookingsCard>)
                }
            </div>
        </div>
    );
};

export default MYBookingPage;