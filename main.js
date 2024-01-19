/*
Brainstorm what kind of properties your todo-items are going to have. 
At a minimum they should have a title, description, dueDate and priority. 
You might also want to include notes or even a checklist.
*/

import { createToDo } from "./model/todo.js";
import { createToDoView } from "./view/todo-view.js";

const createToDoForm = document.getElementById("create-todo");
const mainContentView = document.querySelector(".main-content");
const sidebarView = document.querySelector(".sidebar");
const listContainer = document.querySelector("list-container");

createToDoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = createToDoForm.elements;

  const toDoItem = createToDo(
    formData["title"].value, 
    formData["description"].value
    );

    toDoList.push(toDoItem)
    renderList()
});


let toDo1 = createToDo("Eat Pizza", "Surpreme");
let toDo2 = createToDo("Throw in Trash", "Lorem");

/*console.log(toDo1);
console.log(toDo1.getTitle());
toDo1.setDescription("Supreme Pizza");
console.log(toDo1.getTitle());*/

const toDoView1 = createToDoView(toDo1.getTitle(), toDo1.getDescription());
const toDoView2 = createToDoView(toDo2.getTitle(), toDo2.getDescription());
toDoView1.render(mainContentView);

const toDoList = [
   createToDo("Clean House"),
   createToDo("Throw in Trash", "Takeout Trash"),
   createToDo("Wash Car", "Put Away Car Items"),
   createToDo("Buy Groceries", "Put Groceries Away"),
   createToDo("Go to the bank", "Deposit Money"),
];

const renderList = () => { 
    listContainer.innerHTML = "";
    for (const toDo of toDoList) {
        createToDoView(toDo.getTitle(), toDo.getDescription()).render(
            listContainer
        );
    }
};
renderList();