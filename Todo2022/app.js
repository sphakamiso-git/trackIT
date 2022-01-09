//Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

//Event Listerners
todoButton.addEventListener('click', addTodo);

//Functions
function addTodo(event){

    //Prevent form from submitting
    event.preventDefault(); //prevents a page from refreshing after the event is clicked
   // console.log('hello');//runs the hello on ther console
   //Todo DIV
   const todoDiv = document.createElement('div');
   todoDiv.classList.add("todo");
   //Create LI
   const newTodo = document.createElement('li');
   newTodo.innerText = todoInput.value;
   newTodo.classList.add('todo-item');
   todoDiv.appendChild(newTodo);
   
   //Check mark button
   const completedButton = document.createElement('button');
   completedButton.innerHTML = ' <i class = "fas fa-check"> </i>' //this brings the html tag in js and adds whatever the html would display, instead of having the plain text
   completedButton.classList.add('complete-btn');
   todoDiv.appendChild(completedButton);
   //Check trash button
   const trashButton = document.createElement('button');
   trashButton.innerHTML = ' <i class = "fas fa-trash"> </i>' //this brings the html tag in js and adds whatever the html would display, instead of having the plain text
   trashButton.classList.add('trash-btn');
  todoDiv.appendChild(trashButton);
   //Append to List
todoList.appendChild(todoDiv);

//clear todo Input value
todoInput.value= "";
}

