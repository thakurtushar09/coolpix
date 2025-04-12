import React from "react";
import { cn } from "@/lib/utils"; // utility for merging classNames, optional

export const Skeleton = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn(
        "animate-pulse rounded-md bg-gray-200 dark:bg-slate-700",
        className
      )}
      {...props}
    />
  );
};
