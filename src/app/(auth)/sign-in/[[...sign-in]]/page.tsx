"use client";

import { useTheme } from "next-themes";
import { SignIn } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

export default function Page() {
  const { theme } = useTheme();

  return (
    <div className="relative flex min-h-screen flex-col-reverse lg:flex-row font-sans">
      <div className="hidden w-full bg-background lg:w-1/2 lg:block border-r border-dashed relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90 backdrop-blur-sm"></div>
        <div className="relative flex items-center justify-center min-h-screen">
          <div className="flex flex-col items-center space-y-6 text-center">
            <p className="text-6xl font-bold text-primary tracking-tight animate-fade-in">
              Welcome to
            </p>
            <p className="text-7xl font-extrabold bg-gradient-to-r from-red-600 via-red-400 to-red-200 bg-clip-text text-transparent transition-all duration-300 hover:scale-105">
              Noteq0
            </p>
            <p className="text-lg text-muted-foreground max-w-md mt-4 animate-fade-in-delay">
              Crea, organiza y comparte notas. La forma más simple de mantener
              tus ideas organizadas.
            </p>
          </div>
        </div>
      </div>
      <div className="flex min-h-screen w-full flex-col items-center justify-center bg-background p-4 space-y-4 lg:w-1/2 lg:p-8">
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
                elements: {
                  cardBox: "!w-md",
                },
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
