"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { Label, SearchField, Button, Dropdown } from "@heroui/react";
import { FaFilter } from "react-icons/fa";

export default function SearchFacility() {
    const router = useRouter();
    const searchParams = useSearchParams();

    const [search, setSearch] = useState(searchParams.get("search") || "");
    const [sportType, setSportType] = useState(searchParams.get("sportType") || "");

    const updateURL = (newSearch, newSportType) => {
        const params = new URLSearchParams(searchParams.toString());

        if (newSearch !== undefined) {
            if (newSearch) params.set("search", newSearch);
            else params.delete("search");
        }

        if (newSportType !== undefined) {
            if (newSportType) params.set("sportType", newSportType);
            else params.delete("sportType");
        }
        console.log(newSportType);
        router.push(`?${params.toString()}`);
    };

    return (
        <div className="flex gap-4 items-center">

            <Dropdown>
                <Button aria-label="Menu" className={'bg-green-600 hover:bg-green-800'}>
                    <FaFilter /> {sportType || "Select Sport"}
                </Button>

                <Dropdown.Popover>
                    <Dropdown.Menu
                        onAction={(key) => {
                            const value = String(key);
                            setSportType(value);
                            updateURL(search, value);
                        }}
                    >
                        <Dropdown.Item id="Football">
                            <Label>Football</Label>
                        </Dropdown.Item>

                        <Dropdown.Item id="Cricket">
                            <Label>Cricket</Label>
                        </Dropdown.Item>

                        <Dropdown.Item id="Basketball">
                            <Label>Basketball</Label>
                        </Dropdown.Item>

                        <Dropdown.Item id="Tennis">
                            <Label>Tennis</Label>
                        </Dropdown.Item>

                        <Dropdown.Item
                            id=""
                            variant="danger"
                        >
                            <Label>Clear Filter</Label>
                        </Dropdown.Item>

                    </Dropdown.Menu>
                </Dropdown.Popover>
            </Dropdown>


            <SearchField name="search">
                <SearchField.Group>
                    <SearchField.SearchIcon />

                    <SearchField.Input
                        className="w-[280px]"
                        placeholder="Search Facility..."
                        value={search}
                        onChange={(e) => {
                            const value = e.target.value;
                            setSearch(value);
                            updateURL(value, sportType);
                        }}
                    />

                    <SearchField.ClearButton
                        onClick={() => {
                            setSearch("");
                            updateURL("", sportType);
                        }}
                    />
                </SearchField.Group>
            </SearchField>




        </div>
    );
}