"use client"
import { authClient } from "@/lib/auth-client";
import { Button, Card, DateField, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import { useState } from "react";


const BookingCard = ({ data }) => {
    const [depatureDate, setDepartureDate] = useState(null)
    const [Price, setPrice] = useState(0)
    const handlePrice = (p, H) => {
        setPrice(p * H)
    }
    // console.log(new Date(depatureDate));

    const {
        data: session,
    } = authClient.useSession()

    const user = session?.user
    //  console.log(user);

    const handleBooking = async(e) => {
        e.preventDefault();

        const bookingData = {
            userId: user?.email,
            facility_Name: e.target.facility_Name.value,
            booking_date: new Date(depatureDate),
            time_slot: e.target.time_slot.value,
            slot_hours : e.target.hour.value,
            price: Price

        }

        const res = await fetch('http://localhost:5000/booking',{
            method : 'POST',
            headers:{
                'content-type' : 'application/json'
            },
            body : JSON.stringify(bookingData)
        })

        const BookedData = await res.json();
        console.log(BookedData);

        
    }


    return (
        <Card className="rounded border h-full ">
            <h1 className="text-3xl font-bold">Book this facilities</h1>


            <Form onSubmit={handleBooking} className="h-full flex flex-col justify-between">
                <div className="space-y-6" >
                    <div>
                        <TextField isRequired className="w-full max-w-64" name="facility_Name" type="text"> 
                            <Label>Facility Name</Label>
                            <Input placeholder="eg. Kings Arena" />
                            <Description>This field is required</Description>
                        </TextField>
                    </div>

                    <div>
                        <DateField onChange={setDepartureDate} isRequired className="w-[256px]" name="booking_date">
                            <Label>Booking Date</Label>
                            <DateField.Group>
                                <DateField.Input>{(segment) => <DateField.Segment segment={segment} />}</DateField.Input>
                            </DateField.Group>
                            <Description>This field is required</Description>
                        </DateField>
                    </div>

                    <div>
                        <TextField type="text" isRequired className="w-full max-w-64" name="time_slot">
                            <Label>Time Slot</Label>
                            <Input placeholder="eg. 07:00 AM to 08:00 AM" />
                            <Description>This field is required</Description>
                        </TextField>
                    </div>


                    <div>
                        <TextField name="hour" type="number" isRequired>
                            <Label>Hour</Label>
                            <Input
                                onChange={(e) =>
                                    handlePrice(data.price, e.target.value)

                                }
                                type="number"
                                placeholder="eg. 1"

                            />
                            <FieldError />
                            <Description>This field is required</Description>
                        </TextField>


                    </div>
                    
                    <Button type="submit" variant="outline" className={'flex justify-between items-center text-2xl font-bold p-2 rounded-md w-full mt-[70px] hover:bg-black hover:text-white'}>
                        <p>Total Price</p>
                        <p>৳ {Price}</p>
                    </Button>


                </div>


            </Form>



        </Card>
    );
};

export default BookingCard;