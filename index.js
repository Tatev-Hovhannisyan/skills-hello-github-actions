document.getElementById("btn").addEventListener("click", function() {
    const inputField = document.getElementById("todoInput");
    const taskList = document.getElementById("taskList");
  
    if (inputField.value.trim()) {
      const newTask = document.createElement("li");

      newTask.innerHTML = `<span>${ inputField.value} <button class="btndel">&#10006;</button></span>`;
      taskList.appendChild(newTask);
      inputField.value = ""; 
    }
  });
  
  document.getElementById("taskList").addEventListener("click", function(e) {
    if (e.target.classList.contains("btndel")) {
      e.target.parentElement.parentElement.parentElement.remove(); 
    }
  }); 

  taskList.addEventListener("click", function(e) {
    if (e.target.tagName === "SPAN") {      
      e.target.classList.toggle("completed");
    }
  });