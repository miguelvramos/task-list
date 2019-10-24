const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const taskInput = document.querySelector('#task');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');

loadAllEventListeners();

function loadAllEventListeners() {
    form.addEventListener('submit', addTask);
    taskList.addEventListener('click', removeTask);
    clearBtn.addEventListener('click', clearTasks);
    filter.addEventListener('keyup', filterTasks);
} 

function addTask(e) {
    if(taskInput.value === ''){
        alert('Empty');
    }else{
        //Create li element
        const li = document.createElement('li');
        //Add class
        li.className = 'collection-item';
        //Append node to li
        li.appendChild(document.createTextNode(taskInput.value));

        //Create link element
        const link = document.createElement('a');
        //Add class
        link.className = 'delete-item secondary-content';
        //Add icon html
        link.innerHTML = '<i class="fa fa-remove"></li>';
        //Append link to li
        li.appendChild(link)
        //Append li to ul
        taskList.appendChild(li);        

        taskInput.value = '';
    }
    e.preventDefault();
}

function removeTask(e) {
    if(e.target.className == 'fa fa-remove'){
        if(confirm('Are you sure?')){
        e.target.parentElement.parentElement.remove();  
        }
    }
}

function clearTasks(e) {
    document.querySelectorAll('.collection-item').forEach(function(item){
        item.remove();
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

/*
pegar o texto
verificar se existe na lista de itens
mostrar o valor se existir
omitir se nao existir

*/