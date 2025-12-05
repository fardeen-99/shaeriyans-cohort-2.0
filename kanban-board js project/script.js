let store={}



if(localStorage.getItem("task")){

let data=JSON.parse(localStorage.getItem("task"))
console.log(data);
for(const col in data){
let coli=document.querySelector(`#${col}`)



}



}
let todo=document.querySelector("#todo")
let pro=document.querySelector("#progress")
let done=document.querySelector("#done")

let taksdrop=null
let task=document.querySelectorAll(".box")
let tasku=document.querySelector(".task")
// let deleter=document.querySelector(".delete")


task.forEach((e)=>{
    e.addEventListener("drag",()=>{
        taksdrop=e
        // e.prev
        // e.preventDefault()
        // entDefault()
    })
    
})
// console.log(todo,pro,done);

console.log(taksdrop)
function chalao(col){

col.addEventListener("dragenter",(e)=>{
e.preventDefault()
col.classList.add("hover")
})
col.addEventListener("dragleave",(e)=>{
// e.preventDefault()
col.classList.remove("hover")
})
col.addEventListener("dragover",(e)=>{
    // e.preventde
    e.preventDefault()
})
col.addEventListener("drop",(e)=>{
    col.append(taksdrop)
    col.classList.remove("hover")

 taksdrop.classList.remove("color", "color2");

if(col === done){
    taksdrop.classList.add("color")
}
if(col === pro){
    taksdrop.classList.add("color2")
}

    // e.preventDefault()
    count()
})
}


chalao(todo)
chalao(pro)
chalao(done)

function count(){

    let container=[todo,pro,done]
    container.forEach((col)=>{
    let count=col.querySelector(".count")
    let boxx=col.querySelectorAll(".box")

store[col.id]=Array.from(boxx).map(t=>({
title:t.querySelector("#task1").textContent,
desc:t.querySelector("#task2").textContent
}))

localStorage.setItem("task",JSON.stringify(store))

    count.innerHTML=boxx.length
    
    })
}




let add=document.querySelector("#add")
let addtask=document.querySelector("#add-task")
let mod=document.querySelector(".modal")
let bg=document.querySelector(".bg")

bg.addEventListener("click",(e)=>{
    if(!edittask){

        mod.classList.remove("active")
    }
    
})

add.addEventListener("click",(e)=>{
    mod.classList.add("active")
console.log("clicked");
addtask.textContent="ADD-TASK"
})




addtask.addEventListener("click",(e)=>{

    let inp=document.querySelector("input").value
    let text=document.querySelector("textarea").value

    if(inp==="")return alert("enter the task")
    if(text==="")return alert("enter the task-description")
    if(edittask){
        edittask.querySelector("#task1").textContent=inp
        edittask.querySelector("#task2").textContent=text
        edittask=null
        mod.classList.remove("active")
    }
else{
    
    let div=document.createElement("div")
    div.setAttribute("draggable",true)
    div.classList.add("box")
    div.innerHTML=`<h2 id="task1">${inp}</h2>
    <p id="task2">${text}</p>
                        <div class="btn">
                        <button class="edit">edit</button>
                        <button class="delete">delete</button>
    
                    </div>
    `
    
    div.addEventListener("drag",()=>{
        taksdrop=div
    })
    
    mod.classList.remove("active")
    todo.appendChild(div)
}
document.querySelector("input").value=""
document.querySelector("textarea").value=""
})

// deleter.addEventListener("click",()=>{
//     console.log("click");

//     e.classList.add("unactive")
// })
// document.addEventListener("click", (e) => {
//     if (e.target.classList.contains("delete")) {
//        let and= e.target.closest(".box");
//        if(and){
//         and.classList.add("unactive")
//        }
//     }
// });

document.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete")) {
        e.target.closest(".box").remove();
    }
    count()
});
let edittask=null

document.addEventListener("click",(e)=>{
    if(e.target.classList.contains("edit")){
        edittask=e.target.closest(".box")
        if(edittask){
            let old1=edittask.querySelector("#task1").textContent;
            let old2=edittask.querySelector("#task2").textContent;

            let inp=document.querySelector("input").value=old1
            let text=document.querySelector("textarea").value=old2
            
            mod.classList.add("active")
            addtask.textContent="EDIT-TASK"
        } 
    }
})







