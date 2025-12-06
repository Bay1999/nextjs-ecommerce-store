"use client"
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
} from "@/components/ui/sidebar"
import { HasChildMenu, NoChildMenu } from "./molecules/sidebarMenu"
import { SidebarMenu as SidebarMenuType } from "@/types/auth"

export function NavMain({
  items,
}: { items: SidebarMenuType[] }) {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Platform</SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item, index) => (
          item.items ? (
            <HasChildMenu key={index} item={item} />
          ) : (
            <NoChildMenu key={index} item={item} />
          )
        ))}
      </SidebarMenu>
    </SidebarGroup>
  )
}
