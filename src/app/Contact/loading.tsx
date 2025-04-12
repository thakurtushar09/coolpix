import SkeletonServiceCard from "@/components/SkeletonServiceCard";

export default function Loading() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-10">
      {Array.from({ length: 6 }).map((_, i) => (
        <SkeletonServiceCard key={i} />
      ))}
    </div>
  );
}
