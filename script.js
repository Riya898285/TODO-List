const todoinput=document.querySelector('.todoinput');
const todolist=document.querySelector('.ullist')


const addtask = () =>{
    if(todoinput.value === '')
    {
        alert("Write something here!!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = todoinput.value;
        todolist.appendChild(li);

        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.append(span);

        }
     todoinput.value= "";
    
}


todolist.addEventListener("click",function(e)
{
    if(e.target.tagName === "LI")
    {
        e.target.classList.toggle("checked");
       
    }
    else if(e.target.tagName === "SPAN")
    {
        e.target.parentElement.remove();
      
    }
}, false);

