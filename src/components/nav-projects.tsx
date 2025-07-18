

// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu"
import { useNavigate } from "react-router-dom";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"
import { cn } from "@/lib/utils"
import { slugify } from "@/lib/slugify";
interface NavProjectsProps {
  projects: {
    name: string
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  }[]
  onSelect: (name: string) => void,
  activePage: string
}
export function NavProjects({
  projects,
  onSelect,
  activePage
}: NavProjectsProps) {
  const { isMobile } = useSidebar()
   const navigate = useNavigate();
   

  return (
    <SidebarGroup className="group-data-[collapsible=icon]:hidden">
      <SidebarGroupLabel>Modules</SidebarGroupLabel>
      <SidebarMenu>
        {projects.map((item) => (
          <SidebarMenuItem key={item.name} >
            <SidebarMenuButton  onClick={() => {
    onSelect(item.name);
    navigate(`/${slugify(item.name)}`);
  }}
              className={cn("flex items-center gap-3",
    item.name === activePage
      ? "text-purple-600 font-semibold  hover:text-purple-600"
      : "text-black dark:text-white hover:bg-accent"
  )}>
              
                 <span className="shrink-0">
    <item.icon
      className={cn(
        "!w-[35px] !h-[35px]", // Force override
        activePage === item.name ? "text-purple-600" : "text-gray-900 dark:text-white"
      )}
    />
  </span>
                <span>{item.name}</span>
              
            </SidebarMenuButton>
            {/* <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuAction showOnHover>
                  <MoreHorizontal />
                  <span className="sr-only">More</span>
                </SidebarMenuAction>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="w-48 rounded-lg"
                side={isMobile ? "bottom" : "right"}
                align={isMobile ? "end" : "start"}
              >
                <DropdownMenuItem>
                  <Folder className="text-muted-foreground" />
                  <span>View Project</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Forward className="text-muted-foreground" />
                  <span>Share Project</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Trash2 className="text-muted-foreground" />
                  <span>Delete Project</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu> */}
          </SidebarMenuItem>
        ))}
        {/* <SidebarMenuItem>
          <SidebarMenuButton className="text-sidebar-foreground/70">
            <MoreHorizontal className="text-sidebar-foreground/70" />
            <span>More</span>
          </SidebarMenuButton>
        </SidebarMenuItem> */}
      </SidebarMenu>
    </SidebarGroup>
  )
}
