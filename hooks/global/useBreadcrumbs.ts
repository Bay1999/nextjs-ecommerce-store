import { create } from "zustand";
import { BreadcrumbsState } from "@/types/global";
import { Breadcrumbs } from "@/types/breadcrumb";

export const useBreadcrumbs = create<BreadcrumbsState>((set) => ({
  breadcrumbs: [] as Breadcrumbs[],
  setBreadcrumbs: (breadcrumbs: Breadcrumbs[]) => set(() => ({ breadcrumbs })),
}))