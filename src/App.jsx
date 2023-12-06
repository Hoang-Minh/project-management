import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import SideBar from "./components/SideBar";
import { SelectedProject } from "./components/SelectedProject";


function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined, // doing nothing
    projects: [],
  });

  const handleSelectProject = (id) => {

    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: id, // adding project
      };
    });
  }

  const handleStartAddProject = () => {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null, // adding project
      };
    });
  };

  const handleAddProject = (projectData) => {
    setProjectsState((prevState) => {
      const newProject = {
        ...projectData,
        id: Math.random(),
      };

      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  };

  const handleCancelAddProject = () => {

    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined, // adding project
      };
    });
  }

  const selectedProject = projectsState.projects.find(project => project.id === projectsState.selectedProjectId);

  let content = <SelectedProject project={selectedProject}/>;

  if (projectsState.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject} />;
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAdProject={handleStartAddProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <SideBar
        onStartAdProject={handleStartAddProject}
        projects={projectsState.projects}
        onselectProject={handleSelectProject}
      />
      {content}
    </main>
  );
}

export default App;
