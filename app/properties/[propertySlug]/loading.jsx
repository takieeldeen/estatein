export default function PropertyDetailsPageSkeleton() {
  return (
    <div className="py-12 px-2 flex flex-col gap-4 md:px-16 animate-pulse">
      <div>
        <div className="flex flex-col items-start mb-4">
          <div className="flex flex-col gap-2 items-start md:flex-row ">
            <div className="h-6 w-96 bg-neutral-900 rounded-full"></div>
            <div className="h-6 w-24 bg-neutral-900 rounded-md"></div>
          </div>
          <div className="  self-end w-12 h-4 rounded-full bg-neutral-800"></div>
        </div>
      </div>
      <div className="bg-neutral-800 w-full h-96 rounded-md"></div>
    </div>
  );
}
