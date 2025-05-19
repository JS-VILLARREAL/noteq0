"use client";

import { useTheme } from "next-themes";
import { SignIn } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

export default function Page() {
  const { theme } = useTheme();

  return (
    <div className="relative flex min-h-screen flex-col-reverse md:flex-row font-sans">
      <div className="flex min-h-screen w-full flex-col items-center justify-center bg-background p-4 space-y-4 md:w-1/2 md:p-8">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="rounded-lg border border-border bg-background py-1.5 px-2 flex items-center justify-center">
            <span className="text-4xl font-mono text-primary font-medium">
              n0
            </span>
          </div>
          <div className="flex justify-center items-center mx-auto">
            <SignIn
              appearance={{
                baseTheme: theme === "dark" ? dark : undefined,
              }}
            />
          </div>
        </div>
      </div>
      <div className="w-full bg-gradient-to-br from-primary/20 via-primary/10 to-background md:w-1/2">
        <div className=" flex items-center justify-center min-h-screen">
          <div className="flex flex-col items-center space-y-4 text-center">
            <p className="text-2xl text-primary">Welcome to</p>
            <p className="text-4xl font-mono text-primary font-medium">
              Noteq0
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
