"use client"

import AdminContentPage from "@/components/molecules/adminContentPage";
import { useSetGlobalData } from "@/hooks/global/useSetGlobalData";
import { useEffect } from "react";

const page = () => {
  const { setGlobalData } = useSetGlobalData()

  useEffect(() => {
    setGlobalData("ST-PR", [
      {
        title: "Products",
      },
    ])
  }, [])

  return (
    <AdminContentPage>
      <h1 className="text-2xl font-bold">Form Create Product</h1>
    </AdminContentPage>
  )
}

export default page;