"use client"
import * as React from "react"
import { Label } from "@/components/ui/label"
import { Sidebar, SidebarHeader, SidebarInput } from "@/components/ui/sidebar"
import { Switch } from "@/components/ui/switch"
import { data } from "./Message.date"


export default function MessageSideBar() {
  const [mails, setMails] = React.useState(data.mails)

  return (
    <Sidebar collapsible="none" className="w-full flex-1 md:flex md:w-[400px]">
        <SidebarHeader className="gap-3.5 border-b p-4">
          <div className="flex w-full items-center justify-between">
            <div className="text-base font-medium text-foreground">
              Messages
            </div>
            <Label className="flex items-center gap-2 text-sm">
              <span>Unreads</span>
              <Switch className="shadow-none" />
            </Label>
          </div>
          <SidebarInput placeholder="Type to search..." />
        </SidebarHeader>
        <div>
          <div className="px-0">
            <div>
              {mails.map((mail) => (
                <a
                  href="#"
                  key={mail.email}
                  className="flex flex-col items-start gap-2 whitespace-nowrap border-b p-4 text-sm leading-tight last:border-b-0 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                >
                  <div className="flex w-full items-center gap-2">
                    <span>{mail.name}</span>{" "}
                    <span className="ml-auto text-xs">{mail.date}</span>
                  </div>
                  <span className="font-medium">{mail.subject}</span>
                  <span className="line-clamp-2 w-[260px] whitespace-break-spaces text-xs">
                    {mail.teaser}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </Sidebar>
  )
}
