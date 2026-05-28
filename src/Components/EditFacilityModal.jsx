"use client";


import { authClient } from "@/lib/auth-client";
import { Button, FieldError, Form, Input, Label, Modal, Surface, TextArea, TextField } from "@heroui/react";
import { redirect } from "next/navigation";
import { FaEdit } from "react-icons/fa";

export function EditFacilityModal({ d }) {

    const onSubmit = async (e) => {
        e.preventDefault();
        const formdata = new FormData(e.currentTarget);
        const facility = Object.fromEntries(formdata.entries());
        // facility.id = user?.id
        console.log(facility);

        const { data: tokenData } = await authClient.token()
        console.log(tokenData)

        const res = await fetch(`http://localhost:5000/facility/${d._id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                 authorization : `Bearer ${tokenData?.token}`

            },
            body: JSON.stringify(facility)
        })

        const data = res.json();
        console.log(data)
        redirect('/manage-my-facilities');
        
    }

    return (
        <Modal>

            <Button isIconOnly variant="secondary">
                <FaEdit />
            </Button>
            <Modal.Backdrop>
                <Modal.Container placement="auto">
                    <Modal.Dialog className="sm:max-w-md">
                        <Modal.CloseTrigger />
                        <Modal.Heading>Edit Facility</Modal.Heading>
                        <Modal.Body className="p-6">
                            <Surface variant="default">
                                <Form onSubmit={onSubmit}
                                    className="p-2 space-y-8  rounded-2xl "
                                >
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        {/* Facility Name */}
                                        <div className="md:col-span-2">
                                            <TextField defaultValue={d.FacilityName} name="FacilityName" isRequired>
                                                <Label>Facility Name : </Label>
                                                <Input placeholder="Enter Facility Name" className="rounded-2xl" />
                                                <FieldError />
                                            </TextField>
                                        </div>

                                        {/* Facility Type */}
                                        <TextField defaultValue={d.FacilityType} name="FacilityType" isRequired>
                                            <Label>Facility Type : </Label>
                                            <Input placeholder="Turf" className="rounded-2xl" />
                                            <FieldError />
                                        </TextField>

                                        {/* Image URL*/}
                                        <div className="md:col-span-2">
                                            <TextField defaultValue={d.imageUrl} name="imageUrl" isRequired>
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
                                            <TextField defaultValue={d.location} name="location" isRequired>
                                                <Label>Location : </Label>
                                                <Input placeholder="Enter Location" className="rounded-2xl" />
                                                <FieldError />
                                            </TextField>
                                        </div>

                                        {/* Price */}
                                        <TextField defaultValue={d.price} name="price" type="number" isRequired>
                                            <Label>Price per hour (Tk) : </Label>
                                            <Input
                                                type="number"
                                                placeholder="eg. 100"
                                                className="rounded-2xl"
                                            />
                                            <FieldError />
                                        </TextField>
                                        {/* Capacity */}
                                        <TextField defaultValue={d.Capacity} name="Capacity" type="number" isRequired>
                                            <Label>Capacity : </Label>
                                            <Input
                                                type="number"
                                                placeholder="eg. 20"
                                                className="rounded-2xl"
                                            />
                                            <FieldError />
                                        </TextField>

                                        <TextField defaultValue={d.Available_Time_Slots} name="Available_Time_Slots" isRequired>
                                            <Label>Available Time Slots : </Label>
                                            <Input placeholder="eg. 08:00 AM to 09:00 AM" className="rounded-2xl p-2" />
                                            <FieldError />
                                        </TextField>

                                        {/* Description */}
                                        <div className="md:col-span-2">
                                            <TextField defaultValue={d.description} name="description" isRequired>
                                                <Label>Description: </Label>
                                                <TextArea
                                                    placeholder="Describe the travel experience..."
                                                    className="rounded-3xl p-2"
                                                />
                                                <FieldError />
                                            </TextField>
                                        </div>
                                    </div>
                                    <Modal.Footer>
                                        <Button type="submit" slot="close">save</Button>
                                    </Modal.Footer>


                                </Form>
                            </Surface>
                        </Modal.Body>

                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
}