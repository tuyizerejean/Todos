
function createTodos() {
    const todoForm=document.getElementById("formDiv")
    todoForm.addEventListener("submit", function (event) {
      event.preventDefault();
      const todoNme=document.getElementById("name")
      const todoDate=document.getElementById("todDate")
      const nameTodo = event.target.elements.name.value;
      const dateTodo = event.target.elements.todDate.value;
      console.log(nameTodo,dateTodo )
      event.target.elements.name.value = "";
      event.target.elements.todDate.value = "";  
    });
}
createTodos()