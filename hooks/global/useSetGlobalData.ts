import { Breadcrumbs } from "@/types/breadcrumb"
import { useActivePage } from "./useActivePage"
import { useBreadcrumbs } from "./useBreadcrumbs"
import { BREADCRUMBS } from "@/config/common"

export const useSetGlobalData = () => {
    const setActivePage = useActivePage((state) => state.setActivePage)
    const setBreadcrumbs = useBreadcrumbs((state) => state.setBreadcrumbs)

    const setGlobalData = (activePage: string, breadcrumbs: Breadcrumbs[]) => {
        setActivePage(activePage)
        setBreadcrumbs([
          ...BREADCRUMBS,
          ...breadcrumbs
        ])
    }

    return {
        setGlobalData
    }
}