const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const taskInput = document.querySelector('#task');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');

loadAllEventListeners();

function loadAllEventListeners() {
    document.addEventListener('DOMContentLoaded', getTasks);
    form.addEventListener('submit', addTask);
    taskList.addEventListener('click', removeTask);
    clearBtn.addEventListener('click', clearTasks);
    filter.addEventListener('keyup', filterTasks);
} 

function addTask(e) {
    if(taskInput.value === ''){
        alert('Empty');
    }else{
        const li = document.createElement('li');
        li.className = 'collection-item';
        li.appendChild(document.createTextNode(taskInput.value));

        const link = document.createElement('a');
        link.className = 'delete-item secondary-content';
        link.innerHTML = '<i class="fa fa-remove"></li>';
        li.appendChild(link)
        taskList.appendChild(li);  
        storeTaskInLocalStorage(task.value);      
        taskInput.value = '';
    }
}

function getTasks(){
    let tasks = getLocalStorage();

    tasks.forEach(function(task){
        const li = document.createElement('li');
        li.className = 'collection-item';
        li.appendChild(document.createTextNode(task));

        const link = document.createElement('a');
        link.className = 'delete-item secondary-content';
        link.innerHTML = '<i class="fa fa-remove"></li>';
        li.appendChild(link)
        taskList.appendChild(li);  
    });
}

function deleteTaskFromStorage(item){
    let tasks = getLocalStorage();

    tasks.forEach(function(task, index){
        if(task == item.textContent){
            tasks.splice(index, 1);
        }
    });

    localStorage.setItem('tasks', JSON.stringify(tasks));
    
}

function storeTaskInLocalStorage(task){
    let tasks = getLocalStorage();

    tasks.push(taskInput.value);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    console.log(tasks)
    e.preventDefault();
}

function removeTask(e) {
    if(e.target.className == 'fa fa-remove'){
        if(confirm('Are you sure?')){
            e.target.parentElement.parentElement.remove(); 
            deleteTaskFromStorage(e.target.parentElement.parentElement);
        }
    }
}

function clearTasks(e) {
    document.querySelectorAll('.collection-item').forEach(function(item){
        item.remove();
        localStorage.clear();

    });
}

function filterTasks(e) {
    let text = filter.value.toLowerCase();
    const tasks = document.querySelectorAll('.collection-item');
    
    tasks.forEach(function(task){
        const item = task.firstChild.textContent.toLowerCase();
        if(item.indexOf(text) != -1){
            task.style.display = 'block';
        }else{
            task.style.display = 'none';
        }
    });
}

function getLocalStorage(){
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    }else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    return tasks;
}