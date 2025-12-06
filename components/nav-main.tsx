"use client"
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
} from "@/components/ui/sidebar"
import { HasChildMenu, NoChildMenu } from "./molecules/sidebarMenu"
import { SidebarMenu as SidebarMenuType } from "@/types/auth"
import { useActivePage } from "@/hooks/global/useActivePage"
import { Skeleton } from "./ui/skeleton"

export function NavMain({
  items,
}: { items: SidebarMenuType[] }) {

  const activeMenu = useActivePage((state) => state.activePage)

  return (
    <SidebarGroup>
      <SidebarGroupLabel>Platform</SidebarGroupLabel>
      <SidebarMenu>
        {
          activeMenu ? (
            items.map((item, index) => (
              item.items ? (
                <HasChildMenu key={index} item={item} />
              ) : (
                <NoChildMenu key={index} item={item} />
              )
            ))
          ) : (
            [1, 2].map((item, index) => (
              <Skeleton key={index} className="h-8 w-full" />
            ))
          )
        }
      </SidebarMenu>
    </SidebarGroup>
  )
}
