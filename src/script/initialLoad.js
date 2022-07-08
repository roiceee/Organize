import createNavBar from "./UIComponents/navbar.js";
import {createProjectModal as loadProjectModal} from './UIComponents/projectModal.js';
import {createTaskModal as loadTaskModal, addTaskModalButton} from './UIComponents/taskModal.js';
import deleteProjectModal from "./UIComponents/deleteProjectModal.js";
import {submitTaskButtonListener} from './taskLogic.js';
import {renderProjects, addProjectButtonEventListener, deleteProjectListener} from './projectLogic.js';
import ProjectHolder from "./LogicComponents/ProjectHolderModule.js";

function loadNav() {
    const navContainer = document.getElementById('nav-container');
    navContainer.appendChild(createNavBar);
}

function loadModalsToDOM() {
    const DOMBody = document.body;
    DOMBody.appendChild(loadProjectModal());
    DOMBody.appendChild(loadTaskModal());
    DOMBody.appendChild(deleteProjectModal());
}

function loadAddTaskButton() {
    const container = document.getElementById('card-container');
    container.appendChild(addTaskModalButton());
}

function loadProjectNameContainer() {
    const container = document.getElementById('main-body');
    const element = document.createElement('div');
    element.classList.add('container');
    element.innerHTML = `
    <h2 id="project-name">Choose a project on the "Projects" tab above.</h2>
    <button id="delete-project-trigger" class="my-0 mx-0 bg-white" data-bs-toggle="modal" data-bs-target="#delete-project-modal">Delete Project</button>
            <hr>
    `
    container.append(element);
}

function loadProjectsToPage() {
    //load existing projects to card container
}

function loadTaskCardContainer() {
    const container = document.getElementById('main-body');
    const element = document.createElement('div');
    element.classList.add('row', 'gap-3', "row-cols-auto", "mb-3");
    element.setAttribute('id', 'card-container');
    container.append(element);
}


export default function startAppLogic() {
    loadNav();
    loadModalsToDOM();
    loadProjectNameContainer();
    loadTaskCardContainer();
    loadAddTaskButton();
    renderProjects();
    addProjectButtonEventListener();
    submitTaskButtonListener();
    deleteProjectListener();
}