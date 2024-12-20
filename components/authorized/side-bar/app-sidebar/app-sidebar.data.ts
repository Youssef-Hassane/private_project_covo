import { AudioWaveform, SwatchBook, User, Command, Frame, GalleryVerticalEnd, Map, PieChart, Search, House } from "lucide-react"
import AshrafAtef from "@/assets/images/Ashraf-Atef.jpeg";

export const data = {
  user: {
    name: "Ashraf Atef",
    email: "info@AshrafAtef.com",
    avatar: AshrafAtef,
  },
  teams: [
    {
      name: "COVO",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "HOME",
      url: "#",
      icon: House,
      isActive: true,
      items: [
        {
          title: "Active Campaigns",
          url: "#",
        },
        {
          title: "Notifications",
          url: "#",
        },
        {
          title: "Recent Messages",
          url: "/messages",
        },
        {
          title: "Upcoming Tasks",
          url: "#",
        },
      ],
    },
    {
      title: "DISCOVER",
      url: "#",
      icon: Search,
      items: [
        {
          title: "Genesis",
          url: "#",
        },
        {
          title: "Explorer",
          url: "#",
        },
        {
          title: "Quantum",
          url: "#",
        },
      ],
    },
    {
      title: "MY MATCHES",
      url: "#",
      icon: SwatchBook,
      items: [
        {
          title: "Introduction",
          url: "#",
        },
        {
          title: "Get Started",
          url: "#",
        },
        {
          title: "Tutorials",
          url: "#",
        },
        {
          title: "Changelog",
          url: "#",
        },
      ],
    },
    {
      title: "MY PROFILE",
      url: "#",
      icon: User,
      items: [
        {
          title: "General",
          url: "#",
        },
        {
          title: "Team",
          url: "#",
        },
        {
          title: "Billing",
          url: "#",
        },
        {
          title: "Limits",
          url: "#",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "#",
      icon: Map,
    },
  ],
}