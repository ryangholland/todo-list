const Task = (title, description, dueDate, priority) => {
  let completed = false;

  return { title, description, dueDate, priority, completed };
};

const Project = (title) => {
  let tasks = [];

  return { title, tasks };
};

const dataController = (() => {
  let projects = [];
  let activeProject = null;

  const getProjects = () => projects;
  const getActiveProject = () => activeProject;

  const createProject = (title) => {
    let newProject = Project(title);
    projects.push(newProject);
  };

  const setActiveProject = (project) => {
    activeProject = project;
  };

  const createTask = (title, description, dueDate, priority) => {
    let newTask = Task(title, description, dueDate, priority)
    activeProject.tasks.push(newTask);
  }

  const loadProjects = () => {
    // Get projects from LOCALSTORAGE if available; if not, create a default project

    createProject("Default Project");
    setActiveProject(projects[0]);
    createTask("Task One", "The first task", "Tomorrow", "High");
    createTask("Task Two", "Another task", "Next Week", "Medium");
    console.log(projects)
  };

  loadProjects();

  return { getProjects, getActiveProject, createProject };
})();

const inputController = (() => {
  const addProjectInput = document.querySelector("[data-new-project-input]");
  const addProjectBtn = document.querySelector("[data-new-project-btn]");

  addProjectBtn.addEventListener("click", () => {
    if (addProjectInput.value === "") return;
    dataController.createProject(addProjectInput.value);
    addProjectInput.value = "";
    displayController.renderProjectList();
  });
})();

const displayController = (() => {
  const clearElement = (element) => {
    while (element.firstChild) {
      element.removeChild(element.firstChild);
    }
  };

  const renderProjectList = () => {
    const projectListDiv = document.getElementById("project-list");
    let projects = dataController.getProjects();
    clearElement(projectListDiv);
    projects.forEach((project) => {
      let newDiv = document.createElement("div");
      newDiv.textContent = project.title;
      projectListDiv.append(newDiv);
    });
  };

  const renderActiveProject = () => {
    const activeProject = dataController.getActiveProject();
    const activeProjectSpan = document.querySelector(
      "[data-active-project-title]"
    );
    activeProjectSpan.textContent = activeProject.title;
  };

  renderProjectList();
  renderActiveProject();

  return { renderProjectList, renderActiveProject };
})();
