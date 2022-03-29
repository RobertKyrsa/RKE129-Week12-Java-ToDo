const addToDoButton = document.querySelector("#addTask");
const inputField = document.querySelector("#userTaskInput");
const toDoContainer = document.querySelector(".todos");

inputField.addEventListener("click", selectInput);
addToDoButton.addEventListener("click", addTask)

function selectInput() {
    inputField.style["boxShadow"] = "0 6px 2px -2px green";
}

function addTask() {
    if(inputField.value.trim().lenght) {
        //create a new li element
        let newToDo = document.createElement("li");
        //add a selector to the element
        newToDo.classList.add("li-styling");
        //add content to the new li element
        newToDo.innerText = inputField.value;
        toDoContainer.appendChild(newToDo);
    }
    else {
        console.log("empty value");
    }
}