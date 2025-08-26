import Button from "./Button";

export default function ProjectSideBar() {
  return (
    <aside className="w-1/3 py-8 px-6 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase">Your Projects</h2>
      <Button>+ Add project</Button>
      <ul></ul>
    </aside>
  );
}
