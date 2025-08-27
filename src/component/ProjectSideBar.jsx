import Button from "./Button";

export default function ProjectSideBar({
  onClick,
  projects,
  onSelect,
  selectedProjectId,
}) {
  return (
    <aside className="w-1/3 py-8 px-6 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase">Your Projects</h2>
      <Button onClick={onClick}>+ Add project</Button>
      <ul className="mt-8">
        {projects.map((project) => {
          let cssClass =
            "w-full text-left px-2 py-1 rounded-sm my-1  hover:text-stone-200 hover:bg-stone-800";
          if (project.id === selectedProjectId) {
            cssClass += " bg-stone-800 text-stone-200";
          } else {
            cssClass += " text-stone-400";
          }

          return (
            <li key={project.id}>
              <button className={cssClass} onClick={() => onSelect(project.id)}>
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
