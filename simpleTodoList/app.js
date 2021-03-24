//Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList= document.querySelector('.todo-list');

//Event Listeners
todoButton.addEventListener('click',addTodo);
todoList.addEventListener('click',deleteCheck);


//Functions
function addTodo(e){
    e.preventDefault();
    //console.log('check');
    //todo div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    //create li
    const newTodo = document.createElement('li');

    //get todoInput value 
    newTodo.innerText = todoInput.value;

    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    //checked mark button
    const completedBtn = document.createElement('button');
    //must use innerHTML to use i tag like this, if not it's gonna be shown as text
    completedBtn.innerHTML = '<i class="fas fa-check"></li>'
    completedBtn.classList.add('complete-btn');
    todoDiv.appendChild(completedBtn);

    //delete mark button
    const deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = '<i class="fas fa-trash"></li>';
    deleteBtn.classList.add('delete-btn');
    todoDiv.appendChild(deleteBtn);

    //append to List
    todoList.appendChild(todoDiv);

    //Clear todo input value
    todoInput.value="";
}

function deleteCheck(e){
    //console.log(e.target);
    const clickedItem = e.target;

    //delete todo
    if(clickedItem.classList[0]==="delete-btn"){
        const todo = clickedItem.parentElement;
        todo.remove();
    }

    if(clickedItem.classList[0]==="complete-btn"){
        const todo = clickedItem.parentElement;
        todo.classList.toggle("completed");
    }
}

