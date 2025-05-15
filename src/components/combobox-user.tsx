"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { ChevronsUpDown, User } from "lucide-react";
import { UserButton, SignedIn, SignOutButton } from "@clerk/nextjs";

export function ComboboxUser() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {/* <UserButton /> */}
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        {/* <Button variant="outline" asChild className="w-full">
            <SignOutButton>Cerrar sesión</SignOutButton>
          </Button> */}
      </PopoverContent>
    </Popover>
  );
}
