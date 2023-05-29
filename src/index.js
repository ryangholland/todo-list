import uniqid from "uniqid";

const Task = (title, description, dueDate, priority) => {
  let id = uniqid();
  let completed = false;

  return { title, id, description, dueDate, priority, completed };
};

const Project = (title) => {
  let id = uniqid();
  let tasks = [];

  return { title, id, tasks };
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
    let newTask = Task(title, description, dueDate, priority);
    activeProject.tasks.push(newTask);
  };

  const loadProjects = () => {
    // Get projects from LOCALSTORAGE if available; if not, create a default project

    createProject("Default Project");
    setActiveProject(projects[0]);
    createTask("Task One", "The first task", "Tomorrow", "High");
    createTask("Task Two", "Another task", "Next Week", "Medium");
    console.log(projects);
  };

  loadProjects();

  return { getProjects, getActiveProject, createProject, createTask };
})();

const inputController = (() => {
  const addProjectInput = document.querySelector("[data-new-project-input]");
  const addProjectBtn = document.querySelector("[data-new-project-btn]");

  const taskTitleInput = document.querySelector("[data-task-title-input]");
  const taskDescriptionInput = document.querySelector(
    "[data-task-description-input]"
  );
  const taskDateInput = document.querySelector("[data-task-date-input]");
  const taskPriorityInput = document.querySelector(
    "[data-task-priority-input]"
  );
  const addTaskBtn = document.querySelector("[data-new-task-btn]");

  addProjectBtn.addEventListener("click", () => {
    if (addProjectInput.value === "") return;
    dataController.createProject(addProjectInput.value);
    addProjectInput.value = "";
    displayController.renderProjectList();
  });

  addTaskBtn.addEventListener("click", () => {
    if (taskTitleInput.value === "") return;
    dataController.createTask(
      taskTitleInput.value,
      taskDescriptionInput.value,
      taskDateInput.value,
      taskPriorityInput.value
    );
    taskTitleInput.value = "";
    taskDescriptionInput.value = "";
    taskDateInput.value = "";
    taskPriorityInput.value = "";
    displayController.renderTasks();
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

  const renderTasks = () => {
    const activeProject = dataController.getActiveProject();
    const activeTasks = activeProject.tasks;
    const taskListDiv = document.getElementById("task-list");
    clearElement(taskListDiv);
    activeTasks.forEach((task) => {
      let newDiv = document.createElement("div");
      newDiv.textContent = task.title;
      taskListDiv.append(newDiv);
    });
  };

  renderProjectList();
  renderActiveProject();
  renderTasks();

  return { renderProjectList, renderActiveProject, renderTasks };
})();
