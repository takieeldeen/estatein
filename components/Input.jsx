function Input({
  label,
  placeholder = "",
  type = "text",
  name,
  id,
  className = "",
}) {
  return (
    <div className={`flex flex-col gap-3 ${className}`}>
      {label && (
        <label htmlFor={id} className="text-sm font-semibold">
          {label}
        </label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        name={name || ""}
        id={id}
        className="bg-neutral-900 px-4 py-2 rounded-md placeholder:text-neutral-500 placeholder:text-sm w-full border-[1px] border-neutral-700 outline-none focus:outline-none focus:shadow-md focus:shadow-neutral-400/15 transition-all duration-300"
      />
    </div>
  );
}

export default Input;
