"use client"

import { authClient } from "@/lib/auth-client";
import { FieldError, Input, Label, ListBox, TextField, Select, TextArea, Button, Card, Form } from "@heroui/react";
import { redirect } from "next/navigation";


const AddFacilityPage = () => {

    const {
        data: session,
    } = authClient.useSession()

    const user = session?.user
    

    const onSubmit = async (e) => {
        e.preventDefault();
        const formdata = new FormData(e.currentTarget);
        const facility = Object.fromEntries(formdata.entries());
        facility.id = user?.id
         console.log(facility);

        const res = await fetch('http://localhost:5000/facility', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(facility)
        })

        const data = res.json();
        console.log(data)
        redirect('/all-facilities');
    }


    return (
        <div>
            <h1 className="mx-auto text-4xl font-bold text-center mt-[40px]">Add Facility</h1>
            <Card className="max-w-7xl mx-auto h-[80vh]  flex justify-center items-center rounded-none">

                <Form onSubmit={onSubmit}
                    className="p-10 space-y-8 shadow-lg rounded-2xl bg-blue-50"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Facility Name */}
                        <div className="md:col-span-2">
                            <TextField name="FacilityName" isRequired>
                                <Label>Facility Name : </Label>
                                <Input placeholder="Enter Facility Name" className="rounded-2xl" />
                                <FieldError />
                            </TextField>
                        </div>

                        {/* Facility Type */}
                        <TextField name="FacilityType" isRequired>
                            <Label>Facility Type : </Label>
                            <Input placeholder="Turf" className="rounded-2xl" />
                            <FieldError />
                        </TextField>

                        {/* Image URL*/}
                        <div className="md:col-span-2">
                            <TextField name="imageUrl" isRequired>
                                <Label>Image URL : </Label>
                                <Input
                                    type="url"
                                    placeholder="https://example.com/turf-zone.jpg"
                                    className="rounded-2xl"
                                />
                                <FieldError />
                            </TextField>
                        </div>

                        {/* Location */}
                        <div className="md:col-span-2">
                            <TextField name="location" isRequired>
                                <Label>Location : </Label>
                                <Input placeholder="Enter Location" className="rounded-2xl" />
                                <FieldError />
                            </TextField>
                        </div>

                        {/* Price */}
                        <TextField name="price" type="number" isRequired>
                            <Label>Price per hour (Tk) : </Label>
                            <Input
                                type="number"
                                placeholder="eg. 100"
                                className="rounded-2xl"
                            />
                            <FieldError />
                        </TextField>
                        {/* Capacity */}
                        <TextField name="Capacity" type="number" isRequired>
                            <Label>Capacity : </Label>
                            <Input
                                type="number"
                                placeholder="eg. 20"
                                className="rounded-2xl"
                            />
                            <FieldError />
                        </TextField>

                        <TextField name="Available_Time_Slots" isRequired>
                            <Label>Available Time Slots : </Label>
                            <Input placeholder="eg. 08:00 AM to 09:00 AM" className="rounded-2xl p-2" />
                            <FieldError />
                        </TextField>

                        {/* Description */}
                        <div className="md:col-span-2">
                            <TextField name="description" isRequired>
                                <Label>Description: </Label>
                                <TextArea
                                    placeholder="Describe the travel experience..."
                                    className="rounded-3xl p-2"
                                />
                                <FieldError />
                            </TextField>
                        </div>
                    </div>

                    {/* Buttons */}

                    <Button
                        type="submit"
                        variant="outline"

                        className=" rounded-md w-full bg-cyan-500 text-white p-2"
                    >
                        Add Facility
                    </Button>
                </Form>
            </Card>
        </div>



    );
};

export default AddFacilityPage;