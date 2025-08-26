export default function Button({ children, ...props }) {
  return (
    <button
      className="px-4 py-2 text-stone-400 text-center text-xs md:text-base bg-stone-700 rounded-md hover:bg-stone-600 hover:text-stone-100"
      {...props}
    >
      {children}
    </button>
  );
}
