export default function ProjectSideBar() {
  return (
    <aside className="w-1/3 py-8 px-6 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase">Your Projects</h2>
      <button className="px-4 py-2 text-stone-400 text-center text-xs md:text-base bg-stone-700 rounded-md hover:bg-stone-600 hover:text-stone-100">
        + Add project
      </button>
      <ul></ul>
    </aside>
  );
}
