import { ChevronRight } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "../ui/collapsible";
import { SidebarMenuButton, SidebarMenuItem, SidebarMenuSub, SidebarMenuSubButton, SidebarMenuSubItem } from "../ui/sidebar";
import { SidebarMenu } from "@/types/auth";
import { useActivePage } from "@/hooks/global/useActivePage";

export function HasChildMenu({ item }: { item: SidebarMenu }) {

  const activeMenu = useActivePage((state) => state.activePage)

  return (
    <Collapsible
      asChild
      defaultOpen={item.items?.map((item) => item.id).includes(activeMenu) || false}
      className="group/collapsible"
    >
      <SidebarMenuItem>
        <CollapsibleTrigger className={`${activeMenu === item.id ? "bg-neutral-800 text-white" : ""} cursor-pointer`} asChild>
          <SidebarMenuSubButton>
            {item.icon && <item.icon />}
            <span>{item.title}</span>
            <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
          </SidebarMenuSubButton>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <SidebarMenuSub>
            {item.items?.map((subItem) => (
              <SidebarMenuSubItem key={subItem.title}>
                <SidebarMenuSubButton asChild>
                  <a href={subItem.url}>
                    <span>{subItem.title}</span>
                  </a>
                </SidebarMenuSubButton>
              </SidebarMenuSubItem>
            ))}
          </SidebarMenuSub>
        </CollapsibleContent>
      </SidebarMenuItem>
    </Collapsible>
  );
}

export function NoChildMenu({ item }: { item: SidebarMenu }) {
  const activeMenu = useActivePage((state) => state.activePage)

  return (
    <SidebarMenuItem>
      <SidebarMenuButton className={activeMenu === item.id ? "bg-neutral-800 text-white" : ""} asChild>
        <a href={item.url}>
          {item.icon && <item.icon />}
          <span>{item.title}</span>
        </a>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
}