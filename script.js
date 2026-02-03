function addTask() {
    const input = document.getElementById("taskInput");
    const taskText = input.value.trim();

    if (taskText === "") {
        alert("Please enter a task");
        return;
    }

    const li = document.createElement("li");

    // Checkbox
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    // Task text
    const span = document.createElement("span");
    span.textContent = taskText;

    // Edit button
    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.className = "edit-btn";
    editBtn.onclick = function () {
        editTask(span);
    };

    // Delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete-btn";
    deleteBtn.onclick = function () {
        li.remove();
    };

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);

    document.getElementById("todoList").appendChild(li);
    input.value = "";
}

function editTask(span) {
    const newText = prompt("Edit task:", span.textContent);
    if (newText !== null && newText.trim() !== "") {
        span.textContent = newText;
    }
}
