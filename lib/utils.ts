import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export const capitalizeInitials = (name: string) => {
  return name.charAt(0).toUpperCase() + name.charAt(1).toUpperCase();
}