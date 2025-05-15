import { redirect } from "next/navigation";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { currentUser } from "@clerk/nextjs/server";

export default async function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await currentUser();

  if (!user) {
    redirect("/sign-in");
  }
  return (
    <SidebarProvider defaultOpen={true} className="flex h-dvh">
      <AppSidebar />
      <main className="flex flex-1 overflow-auto border m-2 rounded-lg bg-background">
        <div className="grid flex-1">{children}</div>
      </main>
    </SidebarProvider>
  );
}
