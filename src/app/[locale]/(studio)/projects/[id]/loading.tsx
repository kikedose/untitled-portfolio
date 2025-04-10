import { Skeleton } from '~/components/ui/skeleton';

export default async function Loading() {
  return (
    <div className="flex flex-col pt-16 md:flex-row md:flex-wrap">
      <div className="space-y-4 md:w-1/2">
        <Skeleton className="h-8 w-64" />
        <Skeleton className="h-4 w-52" />
        <Skeleton className="h-52 w-full" />
        <Skeleton className="h-4 w-52" />
        <Skeleton className="h-4 w-52" />

        {/* Divider */}
        <div className="border-foreground my-16 w-full border-b-2 text-xl md:text-2xl" />
      </div>
    </div>
  );
}
