"use client";

import { authClient } from "@/lib/auth-client";
import { AlertDialog, Button } from "@heroui/react";
import { redirect } from "next/navigation";
import toast from "react-hot-toast";
import { IoTrashBin } from "react-icons/io5";

export function DeleteFacilityModal({facility_Name,id}) {

    const handleCancelFacility = async()=>{

         const { data: tokenData } = await authClient.token()
                console.log(tokenData)
        

        const res = await fetch(`http://localhost:5000/facility/${id}`,{
            method : 'DELETE',
            headers : {
                'content-type' : 'application/json',
                authorization : `Bearer ${tokenData?.token}`
            }
        })
        const data = await res.json();
        console.log(data);
        toast('Facility Deleted!')
        redirect('/manage-my-facilities');
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
                            <Button onClick={handleCancelFacility} slot="close" variant="danger">
                                Delete Facility
                            </Button>
                        </AlertDialog.Footer>
                    </AlertDialog.Dialog>
                </AlertDialog.Container>
            </AlertDialog.Backdrop>
        </AlertDialog>
    );
}