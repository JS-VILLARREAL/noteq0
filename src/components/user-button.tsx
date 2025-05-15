"use client";

import { UserButton } from "@clerk/nextjs";
import { HelpCircle } from "lucide-react";

const DotIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      fill="currentColor"
    >
      <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" />
    </svg>
  );
};

export default function UserProfile() {
  return (
    <UserButton>
      <UserButton.MenuItems>
        <UserButton.Action label="manageAccount" />
        <UserButton.Action
          label="Open chat"
          labelIcon={<DotIcon />}
          onClick={() => alert("init chat")}
        />
        <UserButton.Action
          label="Help"
          labelIcon={<HelpCircle className="size-4" />}
          open="help"
        />
      </UserButton.MenuItems>
      <UserButton.UserProfilePage
        label="Help"
        labelIcon={<HelpCircle className="h-4 w-4" />}
        url="help"
      >
        <div>
          <h1>Help Page</h1>
          <p>This is the custom help page</p>
        </div>
      </UserButton.UserProfilePage>
    </UserButton>
  );
}
