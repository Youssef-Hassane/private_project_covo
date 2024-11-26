"use client"
import * as React from "react"
import { data } from "@/components/authorized/side-bar/app-sidebar/app-sidebar.data"
import { NavMain } from "@/components/authorized/side-bar/nav/nav-main"
import { NavProjects } from "@/components/authorized/side-bar/nav/nav-projects"
import { NavUser } from "@/components/authorized/side-bar/nav/nav-user"
import { CovoLogo } from "@/components/authorized/side-bar/covo-logo/CovoLogo"
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarRail } from "@/components/ui/sidebar"

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <CovoLogo />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
