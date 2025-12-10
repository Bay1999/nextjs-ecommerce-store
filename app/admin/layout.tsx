"use client"
import { AppSidebar } from "@/components/app-sidebar";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Skeleton } from "@/components/ui/skeleton";
import { useBreadcrumbs } from "@/hooks/global/useBreadcrumbs";
import { Separator } from "@radix-ui/react-separator";
import React from "react";

const mainLayout = ({ children }: { children: React.ReactNode }) => {

  const breadcrumbs = useBreadcrumbs((state) => state.breadcrumbs)

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
            <Breadcrumb>
              <BreadcrumbList>
                {
                  breadcrumbs?.length > 0 ? (
                    breadcrumbs.map((breadcrumb, index) => (
                      <React.Fragment key={index}>
                        <BreadcrumbItem>
                          {breadcrumb.href ? (
                            <BreadcrumbLink href={breadcrumb.href}>
                              {breadcrumb.title}
                            </BreadcrumbLink>
                          ) : (
                            <BreadcrumbPage>{breadcrumb.title}</BreadcrumbPage>
                          )}
                        </BreadcrumbItem>

                        {index < breadcrumbs.length - 1 && (
                          <BreadcrumbSeparator />
                        )}
                      </React.Fragment>
                    ))
                  ) : (
                    <Skeleton className="h-4 w-20" />
                  )
                }
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        {children}
      </SidebarInset>
    </SidebarProvider>
  )

}

export default mainLayout;