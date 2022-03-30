const checkbox=document.getElementById("cheked")
const body=document.querySelector('body')
checkbox.addEventListener('change',e=>{
    if(e.target.checked)
    {
        
        document.querySelector("#done").style.display = "block";
    
    }
    else{
        document.querySelector("#done").style.display = "none"
    }
})
