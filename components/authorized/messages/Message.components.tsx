"use client"
import * as React from "react"
import { Label } from "@/components/ui/label"
import { Sidebar, SidebarHeader, SidebarInput } from "@/components/ui/sidebar"
import { Switch } from "@/components/ui/switch"
import { data } from "./Message.date"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Send } from 'lucide-react';



export default function MessagesComponent() {
  const [chats, setChats] = React.useState(data.chats)

  return (
    <div className="md:flex " >


      <Sidebar collapsible="none" className="w-full 
         md:flex md:w-[400px]">
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
          <ScrollArea className="h-[calc(100vh-167px)]">
            <div className="px-0">

              <div>
                {chats.map((chat) => (
                  <a
                    href="#"
                    key={chat.email}
                    className="flex flex-col items-start gap-2 whitespace-nowrap border-b p-4 text-sm leading-tight last:border-b-0 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                  >
                    <div className="flex w-full items-center gap-2">
                      <span>{chat.name}</span>{" "}
                      <span className="ml-auto text-xs">{chat.date}</span>
                    </div>
                    <span className="font-medium">{chat.subject}</span>
                    <span className="line-clamp-2 w-[260px] whitespace-break-spaces text-xs">
                      {chat.teaser}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </ScrollArea>
        </div>
      </Sidebar>
      <div className=" w-full h-[calc(100vh-64px)] bg-red-300">
        <ScrollArea className="h-[calc(100vh-129px)]">
          
        </ScrollArea>
        <div className="flex w-full h-[65px] items-end space-x-2 p-3 border-t-2 border-sidebar-border bg-sidebar">
          <Input className="h-full" type="Message" placeholder="Message" />
          <Button className="h-full" type="submit"><Send/>Send</Button>
        </div>
      </div>
    </div>
  )
}
