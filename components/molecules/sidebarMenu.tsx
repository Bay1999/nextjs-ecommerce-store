import { ChevronRight } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "../ui/collapsible";
import { SidebarMenuButton, SidebarMenuItem, SidebarMenuSub, SidebarMenuSubButton, SidebarMenuSubItem } from "../ui/sidebar";
import { SidebarMenu } from "@/types/auth";
import { useActivePage } from "@/hooks/global/useActivePage";
import Link from "next/link";

export function HasChildMenu({ item }: { item: SidebarMenu }) {

  const activeMenu = useActivePage((state) => state.activePage)

  const activeItem = item.items?.find((item) => item.id === activeMenu) ? true : false;

  return (
    <Collapsible
      asChild
      defaultOpen={activeItem}
      className="group/collapsible"
    >
      <SidebarMenuItem>
        <CollapsibleTrigger
          className={`${activeItem ? "bg-neutral-800 active:bg-neutral-700 text-white active:text-white" : ""} cursor-pointer`} asChild>
          <SidebarMenuSubButton>
            {item.icon && <item.icon className={`${activeItem ? "!text-white" : ""}`} />}
            <span>{item.title}</span>
            <ChevronRight className={`${activeItem ? "!text-white" : ""} ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90`} />
          </SidebarMenuSubButton>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <SidebarMenuSub>
            {item.items?.map((subItem) => (
              <SidebarMenuSubItem key={subItem.title}>
                <SidebarMenuSubButton asChild>
                  <Link href={subItem.url}>
                    <span>{subItem.title}</span>
                  </Link>
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
        <Link href={item.url}>
          {item.icon && <item.icon />}
          <span>{item.title}</span>
        </Link>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
}