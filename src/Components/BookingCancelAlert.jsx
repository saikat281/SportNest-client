"use client";

import { AlertDialog, Button } from "@heroui/react";
import { IoTrashBin } from "react-icons/io5";

export function BookingCancelAlert({facility_Name,booking_id}) {

    const handleCancelBooking = async()=>{

        const res = await fetch(`http://localhost:5000/booking/${booking_id}`,{
            method : 'DELETE',
            headers : {
                'content-type' : 'application/json'
            }
        })
        const data = await res.json();
        console.log(data);
        window.location.reload()
    }

    return (
        <AlertDialog>
            <Button isIconOnly variant="danger">
                <IoTrashBin />
            </Button>
            <AlertDialog.Backdrop>
                <AlertDialog.Container>
                    <AlertDialog.Dialog className="sm:max-w-[400px]">
                        <AlertDialog.CloseTrigger />
                        <AlertDialog.Header>
                            <AlertDialog.Icon status="danger" />
                            <AlertDialog.Heading>Delete project permanently?</AlertDialog.Heading>
                        </AlertDialog.Header>
                        <AlertDialog.Body>
                            <p>
                                This will permanently delete <strong>{facility_Name}</strong> and all of its
                                data. This action cannot be undone.
                            </p>
                        </AlertDialog.Body>
                        <AlertDialog.Footer>
                            <Button slot="close" variant="tertiary">
                                Cancel
                            </Button>
                            <Button onClick={handleCancelBooking} slot="close" variant="danger">
                                Delete Booking
                            </Button>
                        </AlertDialog.Footer>
                    </AlertDialog.Dialog>
                </AlertDialog.Container>
            </AlertDialog.Backdrop>
        </AlertDialog>
    );
}