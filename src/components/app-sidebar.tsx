import * as React from "react";
import type { Dispatch, SetStateAction } from "react";
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
} from "lucide-react";
import { Layers } from "lucide-react";
import { NavMain } from "@/components/nav-main";
import { NavProjects } from "@/components/nav-projects";
import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";
import { Side_CodeGene,
  Side_CodeSensei,
  Side_CodeSpectre,
 Side_DevConverter,
 Side_DevGenerator,
 Side_TestSage,
 Side_VelocityLens,
 Side_clarifyAi,
 Side_Seting
} from "./icons/SidebarIcons";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { TCSDarkIcon, TCSLightIcon } from "./icons/appIcons";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { ScrollBar } from "./ui/scroll-area";
type AppSidebarProps = {
  setActivePage: (page: string) => void;
  activePage: string
} & React.ComponentProps<typeof Sidebar>
// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Acme Inc",
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
  
    
  
    
  ],
  projects: [
    {
      name: "ClarifAI",
     // url: "Landing",
      icon: Side_clarifyAi,
    },
    {
      name: "CodeSensei",
      //url: "Sensei",
      icon: Side_CodeSensei,
    },
    {
      name: "CodeSpectre",
     // url: "#",
      icon: Side_CodeSpectre,
    },
    {
      name : "CodeGenie",
      icon : Side_CodeGene,
    },
    {
      name : "VelocityLens",
      icon : Side_VelocityLens,
    },
    {
      name : "DevXcelerateGenerator",
      icon : Side_DevGenerator,
    },
    {
      name : "DevXcelerateConverter",
      icon : Side_DevConverter,
    },
    {
      name : "TestSage",
      icon : Side_TestSage,
    },
    {
      name: "Settings",
      icon: Side_Seting,
    }

  ],
};

export function AppSidebar({setActivePage, activePage,...props}: AppSidebarProps) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <div className="flex items-center gap-2">
          <TCSDarkIcon className="hidden dark:block"></TCSDarkIcon>
          <TCSLightIcon className="block dark:hidden"></TCSLightIcon>
        </div>
      </SidebarHeader>
      {/* <ScrollArea className="h-max overflow-y-auto"> */}
      <SidebarContent>
        {/* <NavMain items={data.navMain} /> */}
        <NavProjects projects={data.projects} onSelect ={setActivePage} activePage={activePage}/>
      </SidebarContent>
      {/* <ScrollBar orientation="vertical"></ScrollBar>
      </ScrollArea> */}
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
