// Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterTodo = document.querySelector('.filter-todo');


// Event listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", trashCheck);
todoInput.addEventListener("click", function(){
    const item = todoInput;
        item.classList.add('normel');
        item.classList.remove('shake');
        item.placeholder = "Enter Your List Item";
});
filterTodo.addEventListener("click", filter);



// Function

function addTodo(event){
    if(todoInput.value == ""){
        event.preventDefault();
        // alert for requaired filed
        const item = todoInput;
        item.classList.remove('normel');
        item.classList.add('shake');
        item.placeholder = "Required field!";
        }
    else{
        event.preventDefault();
        // alert for requaired filed
        const item = todoInput;
        item.classList.add('normel');
        item.classList.remove('shake');
        item.placeholder = "Enter Your List Item";
   
        //Todo Div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
  
    //Todo list
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);
    todoList.appendChild(todoDiv);
  
    // chack button
    const completeButton = document.createElement("button");
    completeButton.innerHTML = '<i class="fas fa-check"></i>';
    completeButton.classList.add("complete-button");
    todoDiv.appendChild(completeButton);
  
    // tresh button
    const trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-button");
    todoDiv.appendChild(trashButton);
  
    // append to list
    todoList.appendChild(todoDiv);
    todoInput.value = "";
    }
}
    
    //check & remove
    function trashCheck(e) {
        const item = e.target;
    //remove item 
        if(item.classList[0] === 'trash-button'){
            const done = item.parentElement;
            done.classList.add('fall');

            done.addEventListener('transitionend', function(){
                done.remove();
            });
            }
    // check item
        if(item.classList[0] === 'complete-button'){
            const done = item.parentElement;
            done.classList.toggle("check");
            }

        
  }

  function filter(f){
    const todos =todoList.childNodes;
    todos.forEach(function(todo){
        switch(f.target.value){
            case "all":
                todo.style.display = "flex";
                     break;
            case "completed":
                todo.style.display = "flex";
                if(todo.classList.contains("check")){
                    todo.style.disply = "flex";
                }else{
                    todo.style.display = "none";
                }
                     break;
            case "uncompleted":
                todo.style.display = "flex";
                if(!todo.classList.contains("check")){
                    todo.style.disply = "flex";
                }else{
                    todo.style.display = "none";
                }
                     break;
            
        }
    });
            }  