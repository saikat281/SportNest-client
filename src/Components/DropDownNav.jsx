"use client";

import { Button, Dropdown, Label } from "@heroui/react";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";

export function DropDownNav() {
  return (
    <div>
      {/* change popover-1 and --anchor-1 names. Use unique names for each dropdown */}
      {/* For TSX uncomment the commented types below */}
      <button className="btn" popoverTarget="popover-1" style={{ anchorName: "--anchor-1" } /* as React.CSSProperties */}>
        <GiHamburgerMenu />
      </button>

      <ul className="dropdown menu w-52 rounded-box bg-base-100 shadow-sm"
        popover="auto" id="popover-1" style={{ positionAnchor: "--anchor-1" } /* as React.CSSProperties */}>
        <li> <Link href={'/'}>Home</Link></li> 
        <li><Link href={'/all-facilities'}>All Facilities</Link></li>
        <li><Link href={'/my-bookings'}>My Booking</Link></li>
        <li> <Link href={'/add-facility'}>Add Facility</Link></li>
       <li><Link href={'/manage-my-facilities'}>Manage My Facilities</Link></li>
      </ul>
    </div>
  );
}