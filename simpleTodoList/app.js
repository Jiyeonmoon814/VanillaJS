//Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList= document.querySelector('.todo-list');
const filterOpt = document.querySelector('.filter-todo');

//Event Listeners
document.addEventListener('DOMContentLoaded',getTodos);
todoButton.addEventListener('click',addTodo);
todoList.addEventListener('click',deleteCheck);
filterOpt.addEventListener('click',filterTodo);


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

    //add todo to localstorage
    saveLocalTodos(todoInput.value);

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
        //animation
        todo.classList.add("fall");
        todo.addEventListener('transitionend',function(){
            todo.remove();
        });
    }

    if(clickedItem.classList[0]==="complete-btn"){
        const todo = clickedItem.parentElement;
        todo.classList.toggle("completed");
    }
}

function filterTodo(e){
    const todos = todoList.childNodes;
    //console.log(todos);
    todos.forEach(function(todo){
        switch(e.target.value){
            case "all":
                todo.style.display = "flex";
                break;
            case "completed":
                if(todo.classList.contains("completed")){
                    todo.style.display = "flex";
                }else{
                    todo.style.display = "none";
                }
                break;
            case "uncompleted":
                if(!todo.classList.contains("completed")){
                    todo.style.display = "flex";
                }else{
                    todo.style.display = "none";
                }
                break;
        }
    });
}

function saveLocalTodos(todo){
    //check if I have thing in there 
    let todos;
    if(localStorage.getItem('todos') === null){
        //create an empty array
        todos = [];
    }else{
        todos = JSON.parse(localStorage.getItem('todos'));
    }

    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
}

function getTodos(){
   //check if I have thing in there 
   let todos;
   if(localStorage.getItem('todos') === null){
       //create an empty array
       todos = [];
   }else{
       todos = JSON.parse(localStorage.getItem('todos'));
   }
   todos.forEach(function(todo){
    //todo div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    //create li
    const newTodo = document.createElement('li');

    //get todoInput value 
    newTodo.innerText = todo;
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
   });
}
