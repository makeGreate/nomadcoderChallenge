const loginForm = document.querySelector("#loginForm")
const time = document.querySelector("#time")
const todos = document.querySelector("#todoForm")
const div = document.querySelector("#nickname")
const id = document.querySelector("#id")
const listForm = document.querySelector("#todoList")
let TODO = []
const savedId = window.localStorage.getItem("id")
const todosInput = document.querySelector("#todos")





function now(){
  const today = new Date(); 
  time.innerHTML = `<p>${today.getFullYear()}-${today.getMonth()}-${today.getDate()} ${today.getHours()}: ${today.getMinutes()}: ${today.getSeconds()} </p>`
  
}



function idStorage (){
  
  
  window.localStorage.setItem("id", id.value)
}


function loggedIn(event){
  event.preventDefault();
  loginForm.classList.add("hidden")
  time.classList.remove("hidden")
  todos.classList.remove("hidden")
  weather.classList.remove("hidden")
  div.innerHTML = `<h3>Hello ${id.value}</h3>`
  showTime()
  idStorage()
 
}

function showTime(){
  const today = new Date; 
  now()
  setInterval(now, 1000)
}




function delTodos(event){
  const li = event.target.parentElement; 
  li.remove()
  TODO = TODO.filter(item=>item.idNum!==parseInt(li.id))
  console.log(TODO)
  todoStorage()

  
}

function todoStorage (){
  const TODOJson = JSON.stringify()
  localStorage.setItem("todos", TODOJson)
  

}

function addTodo (event){
  event.preventDefault();
  const newList = document.createElement("li")
  
  const span = document.createElement("span")
  const button = document.createElement("button")
  button.innerHTML = "del"
  const todosObj = {
    text : todosInput.value,
    idNum : Date.now()
  }
  span.innerHTML =  todosObj.text
  newList.id = todosObj.idNum 
  
  TODO.push(todosObj)
  todosInput.value= ""  
  newList.appendChild(span)
  newList.appendChild(button)
  listForm.appendChild(newList)
  button.addEventListener("click", delTodos)
  todoStorage()
      
}

function paintTodo(item){
  const newList = document.createElement("li")
  const span = document.createElement("span")
  const button = document.createElement("button")
  button.innerHTML = "del"
  span.innerHTML =  item
  newList.appendChild(span)
  newList.appendChild(button)
  listForm.appendChild(newList)

}


todos.addEventListener("submit", addTodo);
loginForm.addEventListener("submit" , loggedIn);



if (savedId){
  loginForm.classList.add("hidden")
  time.classList.remove("hidden")
  todos.classList.remove("hidden")
  weather.classList.remove("hidden")
  div.innerHTML = `<h3>Hello ${localStorage.getItem("id")}</h3>`
  showTime()

}

const savedTodos = localStorage.getItem("todos")

const imageList = ["image0.jpg", "image1.jfif"]

const randomImage = imageList[Math.floor(Math.random*imageList.length)]

const bgImage = document.createElement("img")
bgImage.src = `img${randomImage}`
document.body.appendChild(bgImage)