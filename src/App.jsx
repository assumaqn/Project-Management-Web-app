import ProjectSideBar from "./component/ProjectSideBar.jsx";
import NewProject from "./component/NewProject.jsx";
import NoProjectSelected from "./component/NoProjectSelected.jsx";
import { useState } from "react";
import SelectedProject from "./component/SelectedProject.jsx";
function App() {
  // const [isClicked, setIsClicked] = useState(false);
  const [projectsState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });

  function handleClick() {
    setProjectState((pre) => {
      return {
        ...pre,
        selectedProjectId: null,
      };
    });
  }
  /////Handling the new task
  function handleAddTask(text) {
    setProjectState((pre) => {
      const taskId = Math.random();
      const newTask = {
        text: text,
        id: taskId,
        projectId: pre.selectedProjectId,
      };
      return {
        ...pre,
        tasks: [...pre.tasks, newTask],
      };
    });
  }
  ////Deleting the Task
  function DeleteTask() {
    setProjectState((pre) => {
      return {
        ...pre,

        // projects: pre.projects.filter(
        //   (project) => project.id !== projectsState.selectedProjectId
        // ),
        tasks: pre.tasks.filter(
          (pre) => pre.taskId !== projectsState.tasks.taskId
        ),
      };
    });
  }
  function handleSelectProject(id) {
    setProjectState((pre) => {
      return {
        ...pre,
        selectedProjectId: id,
      };
    });
  }
  function handleDelete() {
    setProjectState((pre) => {
      return {
        ...pre,
        selectedProjectId: undefined,
        projects: pre.projects.filter(
          (project) => project.id !== projectsState.selectedProjectId
        ),
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
  const selectedProject = projectsState.projects.find(
    (project) => project.id === projectsState.selectedProjectId
  );
  // console.log(selectedProject);
  let content = (
    <SelectedProject
      project={selectedProject}
      onDelete={handleDelete}
      onAddTask={handleAddTask}
      tasks={projectsState.tasks}
      onDeletTask={DeleteTask}
    />
  );
  if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onClick={handleClick} />;
  }
  if (projectsState.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject} onClose={handleClose} />;
  }
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSideBar
        onClick={handleClick}
        projects={projectsState.projects}
        onSelect={handleSelectProject}
      />
      {content}
    </main>
  );
}

export default App;
