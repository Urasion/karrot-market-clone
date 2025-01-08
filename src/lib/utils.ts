import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export function debounce(func: (...args: any[]) => void, timeout = 500) {
  let timer: ReturnType<typeof setTimeout>;
  return (...args: any[]) => {
    const currentHeight = args[0].currentTarget.scrollTop;
    clearTimeout(timer);
    timer = setTimeout(() => {
      //@ts-ignore
      func.apply(this, [...args, currentHeight]);
    }, timeout);
  };
}
export function debounce2(func: (...args: any[]) => void, timeout = 500) {
  let timer: ReturnType<typeof setTimeout>;
  return async (...args: any[]) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      //@ts-ignore
      func.apply(this, [...args]);
    }, timeout);
  };
}
