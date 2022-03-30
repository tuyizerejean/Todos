
function createTodos() {
    const todoForm=document.getElementById("formDiv")
    todoForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const todoNme=document.getElementById("name").value
    const todoDate=document.getElementById("todDate").value
    event.target.elements.name.value = "";
    event.target.elements.todDate.value = "";  
    const viewTodo=document.getElementById("todoView")
    const divTodo=document.createElement("div")
    divTodo.setAttribute("class","formDiv")
    divTodo.setAttribute("class","pb-3 pl-5")
    viewTodo.appendChild(divTodo)
    const listTodo=document.createElement("ul")
    divTodo.appendChild(listTodo)
    const doneTodo=document.createElement("div")
    doneTodo.setAttribute("class","changeColor")
    divTodo.appendChild(doneTodo)
    const tickDoneTodo=document.createElement("input")
    tickDoneTodo.setAttribute("type","checkbox")
    divTodo.appendChild(tickDoneTodo)
    const nameTodo=document.createElement("label")
    nameTodo.innerHTML=todoNme
    divTodo.appendChild(nameTodo)
    const dateTodos=document.createElement("p")
    dateTodos.innerHTML=todoDate
    divTodo.appendChild(dateTodos)
    });
}
createTodos()