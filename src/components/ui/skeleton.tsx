import React from "react";
import { cn } from "@/lib/utils"; // utility for merging classNames, optional

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Skeleton = ({ className, ...props }: SkeletonProps) => {
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
