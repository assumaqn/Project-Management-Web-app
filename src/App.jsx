import ProjectSideBar from "./component/ProjectSideBar.jsx";
import NewProject from "./component/NewProject.jsx";
import NoProjectSelected from "./component/NoProjectSelected.jsx";
import { useState } from "react";
function App() {
  // const [isClicked, setIsClicked] = useState(false);
  const [projectsState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  function handleClick() {
    setProjectState((pre) => {
      return {
        ...pre,
        selectedProjectId: null,
      };
    });
  }
  function handleAddProject(newProject) {
    const projectId = Math.random();
    const project = {
      ...newProject,
      id: projectId,
    };
    setProjectState((pre) => {
      return {
        ...pre,
        selectedProjectId: undefined,
        projects: [...pre.projects, project],
      };
    });
  }
  function handleClose() {
    setProjectState((pre) => {
      return {
        ...pre,
        selectedProjectId: undefined,
      };
    });
  }
  let content;
  if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onClick={handleClick} />;
  }
  if (projectsState.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject} onClose={handleClose} />;
  }
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSideBar onClick={handleClick} projects={projectsState.projects} />
      {content}
    </main>
  );
}

export default App;
