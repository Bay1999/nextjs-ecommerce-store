"use client"

import { ChevronRight, type LucideIcon } from "lucide-react"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
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
          item.items ? HasChildMenu(item, index) : NoChildMenu(item, index)
        ))}
      </SidebarMenu>
    </SidebarGroup>
  )
}
