import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm space-x-3">
            <div className="flex-1">
                <div className="flex items-center">
                    <img className="w-10 h-10" src="ball.jpg" alt="ball" />
                    <a className="btn btn-ghost text-xl">SportNest</a>
                </div>

            </div>

            <div>
                <ul className="flex items-center gap-3">
                    <Link href={'/'}><li>Home</li></Link>
                    <Link href={'/'}><li>All Facilities</li></Link>
                    <Link href={'/'}><li>My Bookings</li></Link>
                    <Link href={'/'}><li>Add Facility</li></Link>
                    <Link href={'/'}><li>Manage My Facilities</li></Link>
                </ul>
            </div>
            <div className="flex-none">

                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            {/* <Image
                            src={"https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"}
                            alt="nav-logo"
                            height={200}
                            width={200}
                            /> */}
                            <img
                                alt="Tailwind CSS Navbar component"
                                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                        </div>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;