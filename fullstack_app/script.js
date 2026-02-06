document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("taskForm");
  const input = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const task = input.value.trim();
    if(task){
      const li = document.createElement("li");
      li.textContent = task;
      taskList.appendChild(li);
      input.value = "";
    }
  });
});
