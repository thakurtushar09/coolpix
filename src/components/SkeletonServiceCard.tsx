import { Skeleton } from "@/components/ui/skeleton";

export default function SkeletonServiceCard() {
  return (
    <div className="p-4 rounded-xl bg-white shadow">
      <Skeleton className="w-full h-48 mb-4" />
      <Skeleton className="h-6 w-3/4 mb-2" />
      <Skeleton className="h-4 w-5/6 mb-1" />
      <Skeleton className="h-4 w-2/3" />
    </div>
  );
}
