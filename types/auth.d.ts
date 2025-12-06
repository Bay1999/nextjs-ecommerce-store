export interface RegisterForm {
    name: string;
    email: string;
    phone_number: string;
    password: string;
    password_confirmation: string;
}

export interface LoginForm {
    email: string;
    password: string;
}

export interface SidebarMenu {
  id: string;
  title: string;
  url: string;
  icon?: LucideIcon;
  isActive?: boolean;
  items?: SidebarMenu[]
}