"use client"
import { authClient } from "@/lib/auth-client";
import { Avatar, Dropdown, Label } from "@heroui/react";
import { useRouter } from "next/navigation";

export function AvatarDropDown({user}) {
    const router = useRouter();

    const handeleSignOut = async () => {
        await authClient.signOut();
        redirect('/');
    }
    return (
        <Dropdown>
            <Dropdown.Trigger className="rounded-full">
                <Avatar>
                    <Avatar.Image
                        alt={user?.name}
                        src={user?.image}
                    />
                    <Avatar.Fallback delayMs={600}>JD</Avatar.Fallback>
                </Avatar>
            </Dropdown.Trigger>
            <Dropdown.Popover>
                <div className="px-3 pt-3 pb-1">
                    <div className="flex items-center gap-2">
                        <Avatar size="sm">
                            <Avatar.Image
                                alt={user?.name}
                                src={user?.image}
                            />
                            <Avatar.Fallback delayMs={600}>JD</Avatar.Fallback>
                        </Avatar>
                        <div className="flex flex-col gap-0">
                            <p className="text-sm leading-5 font-medium">{user?.name}</p>
                            <p className="text-xs leading-none text-muted">{user?.email}</p>
                        </div>
                    </div>
                </div>
                <Dropdown.Menu>

                    <Dropdown.Item
                        id="my-bookings"
                        textValue="My Bookings"
                        onClick={() => router.push("/my-bookings")}
                    >
                        <Label>My Bookings</Label>
                    </Dropdown.Item>

                    <Dropdown.Item
                        id="add-facility"
                        textValue="Add Facility"
                        onClick={() => router.push("/add-facility")}
                    >
                        <Label>Add Facility</Label>
                    </Dropdown.Item>

                    <Dropdown.Item
                        id="manage-my-facilities"
                        textValue="Manage-My-Facilities"
                        onClick={() => router.push("/manage-my-facilities")}
                    >
                        <Label>Manage My Facilities</Label>
                    </Dropdown.Item>

                    <Dropdown.Item
                        id="all-facilities"
                        textValue="All facilities"
                        variant="danger"
                        onClick={handeleSignOut}
                    >
                        <Label>Logout</Label>
                    </Dropdown.Item>




                </Dropdown.Menu>
            </Dropdown.Popover>
        </Dropdown>
    );
}