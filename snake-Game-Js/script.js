let board=document.querySelector("section")
    let mod=document.querySelector(".modal")
    let start=document.querySelector(".str")
    let over=document.querySelector(".over")
    let mod2=document.querySelector(".modal2")
    let score=document.querySelector(".scorer")
    let hs=document.querySelector(".hscore")
    let time=document.querySelector(".timer")
let height=60
let width=60
let purana =JSON.parse(localStorage.getItem("item"))

let sco=0
let highsco=purana||0
hs.innerHTML=highsco
let tim=0
        let minute=0
let second=0
let min=0
let sec=0

let col=Math.floor(board.clientWidth/width)
let rows=Math.floor(board.clientHeight/height)
console.log(rows);

let blocking=[]

let snake=[{
x:1,y:4
},]

for(let i=0;i<rows;i++){
    // blocking[i]=[]
    for(let j=0;j<col;j++){
    let block=document.createElement("div")
    block.classList.add("box")
    board.appendChild(block)

    // block.innerHTML=`${i}-${j}`
    blocking[`${i}-${j}`]=block
}

}
snake.forEach((seg)=>{
    blocking[`${seg.x}-${seg.y}`].classList.add("fill")
})
console.log(blocking);

let direction="ArrowRight"

let food=[{
    x:Math.floor(Math.random()*rows),
    y:Math.floor(Math.random()*col)
}]
// console.log()
let kalu=null
let aloo=null
start.addEventListener("click",(e)=>{
mod.style.display="none"


kalu=setInterval(() => {
    second+=1
    if(second===60){
        minute+=1
        second=0
    }
     min=String(minute).padStart(2,"0")
    sec=String(second).padStart(2,"0")
    time.innerHTML=`${min}:${sec}`
}, 1000);
aloo=setInterval(() => {
    render()
}, 300);

})
function render(){
    let head=null

food.forEach((ev)=>{
    blocking[`${ev.x}-${ev.y}`].classList.add("food")
})





// if(!direction)return
// let head = { ...snake[0] };
if(direction==="ArrowRight"){
    head={x: snake[0].x,y: snake[0].y+1}   
}else if(direction==="ArrowLeft"){
    head={x:snake[0].x,y:snake[0].y-1}
}else if(direction==="ArrowUp"){
    head={x:snake[0].x-1,y:snake[0].y}
}
else if(direction==="ArrowDown"){
    head={x:snake[0].x+1,y:snake[0].y}
}

if(head.x<0||head.y<0||head.x>=rows||head.y>=col){
    // alert("game over")
    mod2.style.display="flex"
    snake.forEach((e)=>{
       blocking[`${e.x}-${e.y}`].classList.remove("fill")
    })
     clearInterval(aloo)
clearInterval(kalu)

food.forEach((e)=>{
blocking[`${e.x}-${e.y}`].classList.remove("food")
})
if(highsco<sco){
    highsco=sco
    localStorage.setItem("item",JSON.stringify(highsco))
    hs.innerHTML=highsco
}
sco=0
score.innerHTML=sco

min=0
sec=0
minute=0
second=0
time.innerHTML=`00:00`
return;
}
    snake.forEach((seg)=>{
             blocking[`${seg.x}-${seg.y}`].classList.remove("fill")
            })
    snake.unshift(head)
    snake.pop()
    snake.forEach((seg)=>{
        blocking[`${seg.x}-${seg.y}`].classList.add("fill")
    })
    if(head.x===food[0].x && head.y===food[0].y){

sco+=10
score.innerHTML=sco

snake.unshift(head)

food.forEach((e)=>{
blocking[`${e.x}-${e.y}`].classList.remove("food")
})
 food=[{
    x:Math.floor(Math.random()*rows),
    y:Math.floor(Math.random()*col)
}]

}
}



    
    document.addEventListener("keydown",(dets)=>{
       direction=dets.key
  
    
        
    })
    // render()



    over.addEventListener("click",(e)=>{
direction="ArrowDown"
blocking[`${food[0].x}-${food[0].y}`].classList.remove("food")

 
mod2.style.display="none"
snake=[{x:1,y:4}]
food=[{x:Math.floor(Math.random()*rows),y:Math.floor(Math.random()*col)}]

aloo=setInterval(()=>{render()},300)

kalu=setInterval(() => {
  


    second+=1
    if(second===60){
        minute+=1
        second=0
    }
     min=String(minute).padStart(2,"0")
     sec=String(second).padStart(2,"0")
    time.innerHTML=`${min}:${sec}`
}, 1000);
})

