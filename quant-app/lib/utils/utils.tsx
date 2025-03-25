import { clsx, type ClassValue } from "clsx"
import { RichTranslationValues } from "next-intl"
import { ReactNode } from "react"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const strong = { strong: (chunck : ReactNode) => <strong>{chunck}</strong> }