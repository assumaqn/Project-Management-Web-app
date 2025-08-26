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

  // function handleClick() {
  //   setIsClicked((pre) => !pre);
  // }
  function handleClick() {
    setProjectState((pre) => {
      return {
        ...pre,
        selectedProjectId: null,
      };
    });
  }
  let content;
  if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onClick={handleClick} />;
  }
  if (projectsState.selectedProjectId === null) {
    content = <NewProject />;
  }
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSideBar onClick={handleClick} />
      {content}
    </main>
  );
}

export default App;
