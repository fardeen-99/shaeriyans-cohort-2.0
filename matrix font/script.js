let para=document.querySelectorAll("p")
let character="ABCDEFGHIJKLOMNOPQRSTUVWXYZabcdefghijklomnopqrstuvwxyz;"
para.forEach((e)=>{
let isanimate=false

    e.addEventListener("mousemove",()=>{
        if(isanimate)return
        isanimate=true
        let interval=0
        let p=e.innerText

    let manu=setInterval(() => {
        
        let op=p.split("").map((ele,index)=>{
            if(interval>index){
                return ele 
            }else{

                return character[Math.floor(Math.random()*53)]
            }
        }).join("")
        console.log(op);
    
        e.innerText=op

interval+=1.1


    },100 );

setTimeout(() => {
   clearInterval(manu) ;
   e.innerText=p
   isanimate=false
}, 3300);

})
})
