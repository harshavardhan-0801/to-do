// Get references to HTML elements
const addBtn = document.getElementById("add-btn");
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");

// Function to get the current date in a readable format
function getCurrentDate() {
  const date = new Date();
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  return `${month}/${day}/${year}`;
}

// Function to create a new to-do item
function addTodo() {
  const todoText = todoInput.value.trim();
  
  if (todoText !== "") {
    // Create a new list item (li)
    const li = document.createElement("li");

    // Create a span for the task description
    const taskText = document.createElement("span");
    taskText.textContent = todoText;
    
    // Create a span for the date the task was added
    const taskDate = document.createElement("span");
    taskDate.classList.add("date");
    taskDate.textContent = `Added on: ${getCurrentDate()}`;

    // Create a "Done" button
    const doneBtn = document.createElement("button");
    doneBtn.textContent = "Done";
    doneBtn.classList.add("done-btn");
    
    // Create a delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");
    
    // Append elements to the list item
    li.appendChild(taskText);
    li.appendChild(taskDate);
    li.appendChild(doneBtn);
    li.appendChild(deleteBtn);
    
    // Add the new list item to the to-do list
    todoList.appendChild(li);

    // Clear input field after adding
    todoInput.value = "";

    // Event listener to mark task as done
    doneBtn.addEventListener("click", function() {
      taskText.classList.toggle("done");
      doneBtn.textContent = taskText.classList.contains("done") ? "Undo" : "Done";
    });

    // Event listener to delete a to-do item
    deleteBtn.addEventListener("click", function() {
      todoList.removeChild(li);
    });
  }
}

// Event listener for the Add button
addBtn.addEventListener("click", addTodo);

// Event listener for "Enter" key to add a new to-do
todoInput.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    addTodo();
  }
});

