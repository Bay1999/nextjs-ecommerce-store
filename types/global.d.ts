
export interface BreadcrumbsState {
  breadcrumbs: Breadcrumbs[];
  setBreadcrumbs: (breadcrumbs: Breadcrumbs[]) => void;
}

export interface ActivePageState {
  activePage: string;
  setActivePage: (activePage: string) => void;
}