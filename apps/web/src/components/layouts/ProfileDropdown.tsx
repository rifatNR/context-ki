"use client";

import { LogOut, User } from "lucide-react";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import { ReactNode } from "react";

type PropType = {
    children: ReactNode;
};
const ProfileDropdown = ({ children }: PropType) => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
            <DropdownMenuContent
                align="end"
                className="w-56 mt-2 rounded-none p-0 bg-black text-white border-gray-700"
            >
                <DropdownMenuLabel className="rounded-none text-xl">
                    My Account
                </DropdownMenuLabel>
                <DropdownMenuGroup>
                    <DropdownMenuItem className="rounded-none text-lg cursor-pointer">
                        <User />
                        <span>Profile</span>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuItem className="rounded-none py-2 text-lg cursor-pointer">
                    <LogOut />
                    <span>Log out</span>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default ProfileDropdown;
