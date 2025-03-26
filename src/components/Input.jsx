function Input({
  placeholder = "",
  type = "text",
  value = "",
  setValue,
  width = "72",
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`outline-none bg-white border  border-stone-200 w-${!width ? "auto" : width} p-4 md:py-2.5 placeholder:text-sm rounded-full focus:ring-yellow-400 focus:ring-2 transition-all duration-100 transition-discrete  ease-in`}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      required
    />
  );
}
export function OrderInput({
  placeholder = "",
  type = "text",
  name,
  width = "3/4",
  value,
  disabled,
}) {
  return (
    <input
      disabled={disabled}
      type={type}
      placeholder={placeholder}
      defaultValue={value}
      className={`outline-none disabled:bg-stone-100 bg-white border  border-stone-200 w-${width} py-3 px-4 md:py-2.5 placeholder:text-sm rounded-full focus:ring-yellow-400 focus:ring-2 transition-all duration-100 transition-discrete  ease-in`}
      name={name}
    />
  );
}

export default Input;
