"use client"
import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import UiVerseNavLink from "./UiVerseNavLink";
import UiVerseLogOut from "./UiVerseLogOut";
import UiVerseLogIn from "./UiVerseLogIn";
import { DropDownNav } from "./DropDownNav";
import { AvatarDropDown } from "./AvatarDropDown";


const Navbar = () => {

    const {
        data: session,
    } = authClient.useSession()

    const user = session?.user
    console.log("session:", session)

    return (
        <div className="max-w-7xl mx-auto navbar bg-base-100 shadow-sm space-x-3">
            <div className="flex-1">
                <div className="flex items-center">
                    <Image
                        src="/ball.jpg"
                        alt="ball-logo"
                        height={40}
                        width={40}
                    />
                    {/* <Image className="w-10 h-10" src="ball.jpg" alt="ball" height/> */}
                    <a className="font-hind btn btn-ghost text-xl">SportNest</a>
                </div>

            </div>

            <div>
                <ul className="flex items-center gap-3">

                    <div className="flex items-center gap-2 hidden lg:flex">
                        <UiVerseNavLink title={"Home"} href={"/"}></UiVerseNavLink>
                        <UiVerseNavLink title={"All Facilities"} href={"/all-facilities"}></UiVerseNavLink>
                        <UiVerseNavLink title={"My Bookings"} href={"/my-bookings"}></UiVerseNavLink>
                        <UiVerseNavLink title={"Add Facility"} href={"/add-facility"}></UiVerseNavLink>
                        <UiVerseNavLink title={"Manage My Facilities"} href={"/manage-my-facilities"}></UiVerseNavLink>

                    </div>

                    <div className="lg:hidden">
                        <DropDownNav></DropDownNav>
                    </div>

                    {user ? <>
                    <AvatarDropDown user={user}></AvatarDropDown>
                        {/* <Avatar>
                            <Avatar.Image alt="John Doe" src={user?.image} referrerPolicy="no-referrer" />
                            <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
                        </Avatar> */}
                        <UiVerseLogOut></UiVerseLogOut>
                    </> :
                        <>

                            <UiVerseLogIn href={'/signup'} title={"SignUp"}></UiVerseLogIn>
                            <UiVerseLogIn href={'/login'} title={"login"}></UiVerseLogIn>
                        </>
                    }


                </ul>
            </div>
        </div>
    );
};

export default Navbar;