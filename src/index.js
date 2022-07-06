document.addEventListener("DOMContentLoaded", () => {
  let form = document.getElementById('taskForm')
  form.addEventListener('submit', (e)=>{
    e.preventDefault()
    listToDo(e.target.new_task_description.value)
    form.reset()

  })
});


function listToDo(todo){
  //create a list of tasks entered by user
  let li = document.createElement('li')
  document
  //creates and adds a delete button to the each task 
  let deleteBtn = document.createElement('button')
  deleteBtn.textContent = ' x '
  deleteBtn.addEventListener('click', deleteTodo)
  
  li.textContent = `${todo} `
  li.appendChild(deleteBtn)
  

  //gets the element to which the list will be appended as a child node
  document.getElementById('tasks').appendChild(li)
}

//deletes the task 
function deleteTodo(e){
  e.target.parentNode.remove()
}

