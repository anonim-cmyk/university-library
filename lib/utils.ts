import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getInitials = (name: string): string =>
  name
    .split(/\s+/) // Menggunakan regex untuk menangani satu atau lebih spasi
    .map((part: string) => part[0]) // Ambil huruf pertama dari setiap kata
    .join("") // Gabungkan menjadi satu string
    .toUpperCase() // Ubah ke huruf besar
    .slice(0, 2); // Ambil maksimal dua huruf pertama
