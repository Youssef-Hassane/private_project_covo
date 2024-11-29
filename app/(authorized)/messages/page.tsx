import { cookies } from "next/headers";
import { ChatLayout } from "@/components/authorized/messages/chat/chat/chat-layout";
import MessagesComponent from "@/components/authorized/messages/Message.components";

export default function ChatArea() {
  const layout = cookies().get("react-resizable-panels:layout");
  const defaultLayout = layout ? JSON.parse(layout.value) : undefined;

  return (
    <div className="w-full">
      <MessagesComponent defaultLayout={defaultLayout} navCollapsedSize={8} />
    </div>
  );
}