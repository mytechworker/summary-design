// ** Imports
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

const cn = (...inputClasses: ClassValue[]) => {
  return twMerge(clsx(inputClasses));
};

export default cn;
