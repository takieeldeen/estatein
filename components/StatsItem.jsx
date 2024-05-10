function StatsItem({ stat, title, size = "small" }) {
  return (
    <div
      className={`${
        size === "small" ? "col-span-3 " : "col-span-6"
      } md:col-span-2 flex flex-col gap-1 items-center p-4 bg-neutral-900 text-4xl font-bold rounded-lg border-neutral-800 border-2`}
    >
      {stat}
      <span className="text-sm font-normal text-neutral-300">{title}</span>
    </div>
  );
}

export default StatsItem;
