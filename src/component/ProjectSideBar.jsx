import Button from "./Button";

export default function ProjectSideBar({ onClick, projects }) {
  return (
    <aside className="w-1/3 py-8 px-6 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase">Your Projects</h2>
      <Button onClick={onClick}>+ Add project</Button>
      <ul className="mt-8">
        {projects.map((project) => (
          <li key={project.id}>
            <button className="w-full text-left px-2 py-1 rounded-sm my-1 text-stone-400 hover:text-stone-200 hover:bg-stone-800">
              {project.title}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}
