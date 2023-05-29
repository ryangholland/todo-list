import uniqid from "uniqid";
import "./style.css";

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

  const deleteProject = (id) => {
    if (projects.length === 1) return;
    projects = projects.filter((project) => project.id != id);
    if (!projects.includes(activeProject)) activeProject = projects[0];
    console.log(projects);
    displayController.renderAll();
  };

  loadProjects();

  return {
    getProjects,
    getActiveProject,
    createProject,
    createTask,
    deleteProject,
  };
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

  const initDeleteBtn = (btn) => {
    btn.addEventListener("click", (e) => {
      dataController.deleteProject(e.target.dataset.projectId);
    });
  };

  return { initDeleteBtn };
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
      let titleDiv = document.createElement("div");
      let deleteBtn = document.createElement("button");

      titleDiv.textContent = project.title;
      deleteBtn.textContent = "X";
      deleteBtn.dataset.projectId = project.id;
      inputController.initDeleteBtn(deleteBtn);

      titleDiv.classList.add("project-link");
      newDiv.classList.add("project-item")

      newDiv.append(titleDiv);
      newDiv.append(deleteBtn);

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

  const renderAll = () => {
    renderProjectList();
    renderActiveProject();
    renderTasks();
  };

  renderAll();

  return { renderProjectList, renderActiveProject, renderTasks, renderAll };
})();
