const Task = (title, description, dueDate, priority) => {
  let completed = false;

  const completeTask = () => {
    completed = !completed;
  };

  const displayProps = () => {
    console.log({ title, description, dueDate, priority, completed });
  };

  return { displayProps, completeTask };
};

const Project = (title) => {
  let tasks = [];

  const addTask = (task) => {
    tasks.push(task);
  };

  const displayTasks = () => {
    tasks.forEach((task) => {
      task.displayProps();
    });
  };

  return {
    addTask,
    displayTasks,
    get name() {
      return title;
    },
  };
};

const dataController = (() => {
  let projects = [];
  let activeProject = null;

  const getProjects = () => projects;

  const createProject = (title) => {
    let newProject = Project(title);
    projects.push(newProject);
  };

  const loadProjects = () => {
    // Get projects from LOCALSTORAGE if available; if not, create a default project

    createProject("Default Project")
  };

  loadProjects();

  return { getProjects, createProject };
})();

const inputController = (() => {
  const addProjectInput = document.querySelector("[data-new-project-input]");
  const addProjectBtn = document.querySelector("[data-new-project-btn]");

  addProjectBtn.addEventListener("click", () => {
    if (addProjectInput.value === "") return;
    dataController.createProject(addProjectInput.value);
    addProjectInput.value = "";
    displayController.renderProjects();
  });
})();

const displayController = (() => {
  const clearElement = (element) => {
    while (element.firstChild) {
      element.removeChild(element.firstChild);
    }
  };

  const renderProjects = () => {
    const projectListDiv = document.getElementById("project-list");
    let projects = dataController.getProjects();
    clearElement(projectListDiv);
    projects.forEach((project) => {
      let newDiv = document.createElement("div");
      newDiv.textContent = project.name;
      projectListDiv.append(newDiv);
    });
  };

  renderProjects();
  
  return { renderProjects };
})();
