"use client";

import { Button, Dropdown, Label } from "@heroui/react";
import { useRouter } from "next/navigation";
import { GiHamburgerMenu } from "react-icons/gi";

export function DropDownNav() {
  const router = useRouter();
  return (
    <Dropdown>
      <Button aria-label="Menu" variant="tertiary">
       <GiHamburgerMenu />
      </Button>
      <Dropdown.Popover>
        <Dropdown.Menu onAction={(key) => console.log(`Selected: ${key}`)}>

          <Dropdown.Item
            id="home"
            textValue="Home"
            onClick={() => router.push("/")}
          >
            <Label>Home</Label>
          </Dropdown.Item>

          <Dropdown.Item
            id="all-facilities"
            textValue="All facilities"
            onClick={() => router.push("/all-facilities")}
          >
            <Label>All Facilities</Label>
          </Dropdown.Item>

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


        </Dropdown.Menu>
      </Dropdown.Popover>
    </Dropdown>
  );
}