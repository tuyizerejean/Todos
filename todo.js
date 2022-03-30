
function createTodos() {
    const todoForm=document.getElementById("formDiv")
    todoForm.addEventListener("submit", function (event) {
      event.preventDefault();
      const todoNme=document.getElementById("name").value
      const todoDate=document.getElementById("todDate").value
      console.log(todoNme,todoDate )
      event.target.elements.name.value = "";
      event.target.elements.todDate.value = "";  
    });
}
createTodos()