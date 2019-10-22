const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const taskInput = document.querySelector('#task');
const clearBtn = document.querySelector('.clear-task');
const filter = document.querySelector('#filter');

loadAllEventListeners();

function loadAllEventListeners() {
    form.addEventListener('submit', function(e){
        if(taskInput.value === ''){
            alert('Empty');
        }
        
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
        e.preventDefault();
    });
} 