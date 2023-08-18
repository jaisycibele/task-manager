const taskTable = document.getElementById("taskTable");
const addTaskButton = document.getElementById("addTask");
const clearTableButton = document.getElementById("clearTable");
const addValueButton = document.getElementById("addValue");
const addDurationButton = document.getElementById("addDuration");
const orderByImportanceButton = document.getElementById("orderByImportance"); 


const tasks = []; 

addTaskButton.addEventListener("click", addTask);
clearTableButton.addEventListener("click", clearTable);
addValueButton.addEventListener("click", addValue);
addDurationButton.addEventListener("click", addDuration);
orderByImportanceButton.addEventListener("click", orderByImportance); 


function addTask() {
    const author = document.getElementById("author").value;
    const description = document.getElementById("description").value;
    const department = document.getElementById("department").value;
    const importance = document.getElementById("importance").value;
   
    const task = {
        author,
        description,
        department,
        importance,
        value: "",
        duration: ""
    };
    tasks.push(task);
    updateTable();
}

function deleteTask(index) {
    tasks.splice(index, 1);
    updateTable();
}

function addValue() {
    for (let i = 0; i < tasks.length; i++) {
        tasks[i].value = document.querySelectorAll(".value-input")[i].value;
    }
    updateTable();
}

function addDuration() {
    for (let i = 0; i < tasks.length; i++) {
        tasks[i].duration = document.querySelectorAll(".duration-input")[i].value;
       
    }
    updateTable();
}

function clearTable() {
    tasks.length = 0;
    updateTable();
}

function orderByImportance() {
    const orderedTasks = tasks.slice().sort((a, b) => b.importance - a.importance);
    
    updateTable(orderedTasks);
    console.log(orderedTasks)
}

function updateTable(tasksToShow = tasks) { 
    taskTable.innerHTML = `
        <tr>
            <th>Autor</th>
            <th>Descrição</th>
            <th>Departamento</th>
            <th>Importância</th>
            <th>Valor</th>
            <th>Duração</th>
            <th>Excluir</th>
        </tr>
    `;
    
    for (let i = 0; i < tasksToShow.length; i++) {
        const task = tasksToShow[i]; 
        const newRow = taskTable.insertRow(-1); 

        newRow.innerHTML = `
            <td>${task.author}</td>
            <td>${task.description}</td>
            <td>${task.department}</td>
            <td>${task.importance}</td>
            <td><input type="text" class="value-input" value="${task.value}"></td>
            <td><input type="text" class="duration-input" value="${task.duration}"></td>
            <td><button onclick="deleteTask(${i})">Excluir</button></td>
        `; 
    } console.log(tasks)
}