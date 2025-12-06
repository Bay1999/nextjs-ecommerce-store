"use client"
import { SectionCards } from "@/components/organisms/dashboard/section-cards"
import { DataTable } from "@/components/data-table"

import data from "./data.json"
import { useActivePage } from "@/hooks/global/useActivePage"
import { useEffect } from "react"
import { useBreadcrumbs } from "@/hooks/global/useBreadcrumbs"
import { BREADCRUMBS } from "@/config/common"

export default function page() {

  const setActivePage = useActivePage((state) => state.setActivePage)
  const setBreadcrumbs = useBreadcrumbs((state) => state.setBreadcrumbs)

  useEffect(() => {
    setActivePage("DA")

    setBreadcrumbs([
      ...BREADCRUMBS,
      {
        title: "Dashboard"
      }
    ])
  }, [setActivePage, setBreadcrumbs])

  return (
    <div className="flex flex-1 flex-col">
      <div className="@container/main flex flex-1 flex-col gap-2">
        <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
          <SectionCards />
          {/* <div className="px-4 lg:px-6">
            <ChartAreaInteractive />
          </div> */}
          <DataTable data={data} />
        </div>
      </div>
    </div>
  )
}