import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import SideBar from "./components/SideBar";

function App() {

  const [projectsState, setProjectsState] = useState({
    selectedProject: undefined, // doing nothing
    projects: []
  });  

  const handleStartAddProject = () => {

    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProject: null, // adding project
      }
    })
  }

  let content;

  if(projectsState.selectedProject === null) {
    content = <NewProject />
  } else if(projectsState.selectedProject === undefined) {
    content = <NoProjectSelected onStartAdProject={handleStartAddProject} />
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <SideBar onStartAdProject={handleStartAddProject} />
      {content}      
    </main>
  );
}

export default App;
