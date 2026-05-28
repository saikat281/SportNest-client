"use client"
import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {

    const {
        data: session,
    } = authClient.useSession()

    const user = session?.user

     //console.log(user);
     const handeleSignOut = async() =>{
        await authClient.signOut();
     }

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
                    <a className="btn btn-ghost text-xl">SportNest</a>
                </div>

            </div>

            <div>
                <ul className="flex items-center gap-3">
                    <Link href={'/'}><li className="hover:text-green-600">Home</li></Link>
                    <Link href={'/all-facilities'}><li className="hover:text-green-600">All Facilities</li></Link>
                    <Link href={'/my-bookings'}><li className="hover:text-green-600">My Bookings</li></Link>
                    <Link href={'/add-facility'}><li className="hover:text-green-600">Add Facility</li></Link>
                    <Link href={'/'}><li className="hover:text-green-600">Manage My Facilities</li></Link>

                    {user ? <>
                        <Avatar>
                            <Avatar.Image alt="John Doe" src={user?.image} referrerPolicy="no-referrer" />
                            <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
                        </Avatar>
                        <Button onClick={handeleSignOut} variant="danger">LogOut</Button>
                    </> :
                        <>
                            <Link href={'/signup'}><li className="hover:text-green-600">SignUp</li></Link>
                            <Link href={'/login'}><li className="hover:text-green-600">login</li></Link>
                        </>
                    }
                </ul>
            </div>
        </div>
    );
};

export default Navbar;