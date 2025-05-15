import Link from "next/link";
import { UserButton, SignedIn, SignInButton, SignedOut } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import {
  Calendar,
  Home,
  Inbox,
  LogIn,
  PanelRight,
  Search,
  Settings,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  SidebarRail,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";

// Menu items.
const items = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "Inbox",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Calendar",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "/dashboard/settings",
    icon: Settings,
  },
];

export async function AppSidebar() {
  const user = await currentUser();
  if (!user) return null;

  return (
    <Sidebar
      className="font-sans relative flex h-full flex-col text-foreground transition-all duration-300 ease-in-out"
      collapsible="icon"
      variant="inset"
    >
      <SidebarHeader className="flex w-full flex-row justify-between group-data-[collapsible=icon]:flex-col">
        <div className="flex items-center gap-2">
          <Link
            href="/"
            className={cn(
              "flex items-center justify-center gap-2",
              "group-data-[collapsible=icon]:flex-col"
            )}
            aria-label="Text0 Home"
          >
            <div className="flex items-center justify-center rounded-lg bg-foreground p-2 transition-colors duration-150 hover:bg-foreground/80">
              <div
                className={cn(
                  "h-4 w-4 text-primary-foreground font-mono font-semibold",
                  "group-data-[collapsible=icon]:h-4 group-data-[collapsible=icon]:w-4"
                )}
              >
                n0
              </div>
            </div>
            <span className="font-semibold text-foreground group-data-[collapsible=icon]:hidden">
              noteq0
            </span>
          </Link>
        </div>

        <SidebarMenuButton
          tooltip="Toggle Sidebar"
          className="flex h-8 w-8 items-center justify-center"
          asChild
          // id={TOUR_STEP_IDS.SIDEBAR_TOGGLE}
        >
          <SidebarTrigger>
            <PanelRight className="h-4 w-4" />
          </SidebarTrigger>
        </SidebarMenuButton>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* User/Sign In Buttons at Bottom */}
        <SidebarGroup className="mt-auto pb-2">
          <SidebarMenu>
            <SidebarMenuItem>
              <SignedIn>
                <SidebarMenuButton
                  className="!p-0 group-data-[collapsible=icon]:!p-0 flex w-full items-center justify-start gap-2 text-foreground text-sm transition-colors hover:bg-muted/50 border border-red-500"
                  tooltip="User Profile"
                  asChild
                >
                  <UserButton showName={true} />
                </SidebarMenuButton>
              </SignedIn>
              <SignedOut>
                <SignInButton mode="modal">
                  <SidebarMenuButton
                    className={cn(
                      "flex h-10 w-full items-center justify-center gap-1.5 rounded-sm px-2 py-1 font-medium text-base transition-colors duration-150",
                      "active:!bg-sidebar-accent/60 active:!text-foreground bg-sidebar-accent text-foreground hover:bg-sidebar-accent/80 hover:text-foreground",
                      "group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:p-1 group-data-[collapsible=icon]:text-[10px]",
                      "aria-label:Sign in to your account"
                    )}
                  >
                    <LogIn className="h-6 w-6 shrink-0" />
                    <span className="group-data-[collapsible=icon]:hidden">
                      Sign In
                    </span>
                  </SidebarMenuButton>
                </SignInButton>
              </SignedOut>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
