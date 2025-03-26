import { Link } from "react-router-dom";
// export function PrimaryBtn({
//   children,
//   onClick,
//   fontSize = "16",
  

// }) {
  

//   // if (to) return <Link  to={to}>{children }</Link>
//   return (
//     <button
//       onClick={onClick}
//       className={` bg-yellow-400 py-3 px-4 text-[${fontSize}px] cursor-pointer rounded-full uppercase font-semibold transition-all duration-75  hover:bg-yellow-300 focus:ring-yellow-300  border-stone-50 border-2 focus:ring-4 `}
//     >
//       {children}
//     </button>
//   );
// }
export function Button({
  children,
  onClick,
  fontSize,
  type = "primary",
  to,
  isSubmitting=false,
}) {
  const base = `py-3 px-4 text-${fontSize} cursor-pointer rounded-full uppercase transition-all duration-75 border-2`;
  const Primary = `${base} + bg-yellow-400  font-semibold   hover:bg-yellow-300 focus:ring-yellow-300  border-stone-50  focus:ring-4 `;
  const secondary = `${base} + font-medium border-stone-200 border-2 focus:ring-4 focus:ring-stone-200 text-stone-400 hover:bg-stone-300 hover:text-stone-800 hover:border-white`;
  if (to)
    return (
      <Link className={`${Primary} inline-block`} to={to}>
        {children}
      </Link>
    );
  return (
    <button
      disabled={isSubmitting}
      onClick={onClick}
      className={type === "primary" ? Primary : secondary}
    >
      {children}
    </button>
  );
}
// export function SecondaryBtn({ children, onClick, fontSize = "16" }) {
//   return (
//     <button
//       onClick={onClick}
//       className={`  py-3 px-4 text-[${fontSize}px] cursor-pointer rounded-full uppercase font-medium transition-all duration-100  border-stone-200 border-2 focus:ring-4 focus:ring-stone-200 text-stone-400 hover:bg-stone-300 hover:text-stone-800 hover:border-white`}
//     >
//       {children}
//     </button>
//   );
// }
