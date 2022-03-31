    const todoForm=document.getElementById("formDiv")
    todoForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const todoNme=document.getElementById("name").value
    const todoDate=document.getElementById("todDate").value

    event.target.elements.name.value = "";
    event.target.elements.todDate.value = ""; 
    if(todoNme && todoDate )
    {
        const viewTodo=document.getElementById("todoView")
        const divTodo=document.createElement("div")
        divTodo.setAttribute("class","formDiv")
        const listTodo=document.createElement("ul")
        divTodo.setAttribute("class","incompleted-tasks")
       const list=document.createElement("li")
        const doneTodo=document.createElement("div")
        doneTodo.setAttribute('class','bg-blue-500 p-3')
        const tickDoneTodo=document.createElement("input")
        tickDoneTodo.setAttribute("type","checkbox")
        const nameTodo=document.createElement("label")
        nameTodo.innerHTML=todoNme
        const dateTodos=document.createElement("p")
        dateTodos.innerHTML=`<i>${todoDate}</i>`
        doneTodo.appendChild(tickDoneTodo)
        doneTodo.appendChild(nameTodo)
        list.appendChild(dateTodos)
        list.appendChild(doneTodo)
        listTodo.appendChild(list)
        divTodo.appendChild(listTodo)
        viewTodo.appendChild(divTodo)
    }
    else{
        document.querySelector("#validatError").style.display = "block" 
        
    }
 
    });

const checkbox=document.getElementById("cheked")
checkbox.addEventListener('change',e=>{
    if(e.target.checked)
    {
     console.log("Clicked")  
     document.querySelector("#done").style.display = "block" 
    }
    else{
        document.querySelector("#done").style.display = "none"
    }
})

