"use client"
import { SectionCards } from "@/components/organisms/dashboard/section-cards"
import { DataTable } from "@/components/data-table"

import data from "./data.json"
import { useActivePage } from "@/hooks/global/useActivePage"
import { useEffect } from "react"
import { useBreadcrumbs } from "@/hooks/global/useBreadcrumbs"
import { BREADCRUMBS } from "@/config/common"
import AdminContentPage from "@/components/molecules/adminContentPage"

const page = () => {

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
    <AdminContentPage>
      <SectionCards />
      <DataTable data={data} />
    </AdminContentPage>
  )
}

export default page;