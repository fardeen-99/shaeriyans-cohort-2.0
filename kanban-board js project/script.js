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



    // e.preventDefault()
    col.append(taksdrop)
    col.classList.remove("hover")
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
    
    count.innerHTML=boxx.length
    
    })
}



let add=document.querySelector("#add")
let addtask=document.querySelector("#add-task")
let mod=document.querySelector(".modal")
let bg=document.querySelector(".bg")

bg.addEventListener("click",(e)=>{
    mod.classList.remove("active")
    
})

add.addEventListener("click",(e)=>{
    mod.classList.add("active")
console.log("clicked");

})




addtask.addEventListener("click",(e)=>{
let inp=document.querySelector("input").value
let text=document.querySelector("textarea").value
if(inp==="")return alert("enter the task")
if(text==="")return alert("enter the task-description")

let div=document.createElement("div")
div.setAttribute("draggable",true)
div.classList.add("box")
div.innerHTML=`<p>${inp}</p>
<p>${text}</p>
                <button class="delete">delete</button>
`

div.addEventListener("drag",()=>{
    taksdrop=div
})

mod.classList.remove("active")
todo.appendChild(div)
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