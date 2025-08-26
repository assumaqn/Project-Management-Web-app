export default function Input({
  title,
  textarea,
  type = "text",
  ref,
  ...props
}) {
  const classes =
    "w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600";

  return (
    <p className="flex flex-col gap-1 my-4">
      <label className="text-sm font-bold uppercase">{title}</label>
      {textarea ? (
        <textarea className={classes} ref={ref} {...props} />
      ) : (
        <input type={type} className={classes} ref={ref} {...props} />
      )}
    </p>
  );
}
