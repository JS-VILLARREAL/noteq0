import Link from "next/link";
import { SignOutButton, SignedIn, SignedOut } from "@clerk/nextjs";
import { Button } from "./ui/button";
import { ModeToggle } from "./theme-mode";

export default function Header() {
  return (
    <header className="sticky top-0 z-10 px-4 py-3 min-w-full font-sans backdrop-blur-2xl bg-background shadow-lg">
      <nav className="flex justify-between items-center">
        <div className="text-xl font-bold flex items-center space-x-3 md:text-2xl">
          <div className="rounded-lg border border-border bg-background py-1.5 px-2 flex items-center justify-center">
            <span className="text-xl font-mono font-medium text-primary">
              n0
            </span>
          </div>
          <span className="hidden md:inline-block text-xl">Noteq0</span>
        </div>
        <div className="flex items-center gap-4">
          <ModeToggle />
          <SignedOut>
            <Button variant="outline" asChild>
              <Link href="/sign-in">Iniciar sesión</Link>
            </Button>
          </SignedOut>
          <SignedIn>
            <Button variant="destructive" className="cursor-pointer" asChild>
              <SignOutButton />
            </Button>
          </SignedIn>
        </div>
      </nav>
    </header>
  );
}
