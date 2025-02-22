// Mark a task as completed
document.querySelectorAll(".task-row").forEach(task => {
    task.addEventListener("click", function() {
        const statusCell = task.querySelector(".status");
        if (statusCell.innerText === "Pending") {
            statusCell.innerText = "Completed";
            statusCell.classList.add("bg-success");
            statusCell.classList.remove("bg-warning");
        } else if (statusCell.innerText === "In Progress") {
            statusCell.innerText = "Completed";
            statusCell.classList.remove("bg-success");
            statusCell.classList.add("btn-danger");
        }
    });
});

// Confirm task deletion
function confirmDelete(taskId) {
    if (confirm("Would you like to delete this task?")) {
        // remove task element
        document.getElementById(taskId).remove(); 
    }
}

// when delete button is clicked trigger this
document.querySelector(".delete-task-btn").addEventListener("click", function() {
    confirmDelete("task-1"); // task id necessary
});

//to ensure email is correct
function validateEmail(email) {
    return email.includes("@") && email.includes(".");
  }
  console.log(validateEmail("test@example.com"));
  