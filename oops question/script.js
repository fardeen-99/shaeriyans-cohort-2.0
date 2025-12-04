let laptop={
    brand:"dell",
    price:50000,
    log:function(){
        return "logged-in"
        
    },
    discount:function(){
        return this.price + (this.price*10/100) 
    }
}
let laptop2={
    brand:"lenovo",
    price:70000,
    log:function(){
        return "logged-in"
        
    },
    discount:function(){
        return this.price + (this.price*10/100) 
    }
}
//in this we face we are crated somany obj for our laptops everytime that increase so much repitition and thats why we created a class and use it 


class laptopAll{
constructor(brand,price){
this.name=brand,
this.price=price
this.log=function(){
    return "logged in"
}
this.disc=function(){
    return this.price*10/100
}
}
}
let fnc=new laptopAll("asus",100000)



class bankaccount{
    constructor(name,balance,deposit){
        this.name=name,
        this.balance=balance
  
    }
    deposit(amount){
        this.balance+=amount
        return this.balance
    }
}
let bank=new bankaccount("fardeen",200)





let profile={
name:"akbar",
alum:function(){
    return this.name
}
}


// class vehicle{
//     constructor(brand,speed){
//         this.brand=brand
//         ,this.speed=speed
//     }
    
// }
// vehicle.prototype.type=function(){
//     return '4 wheeler car'
// }
// let kanu=new vehicle("maruti",190)   old method for using a prototype
class vehicle{
    constructor(brand,speed){
        this.brand=brand
        ,this.speed=speed
    }
    
type(){
        return '4 wheeler car'
    }
}
let kanu=new vehicle("maruti",190)
let hanu=new vehicle("ford",290)
//prototype is a shared memory







obj1={
    brand:"h&m"
}
obj2={
    brand:"zara"
}
function polo(){
    console.log(this.brand);
    
}
console.log(polo.call(obj2))



kaju={
    name:"cashew"
}

function badam(name,price){
    console.log(this.name,name,price);
    

}

badam.apply(kaju,["almond",1200])

// badam("almond",1200)



let momo={
    brand:"wow"
}

function chutney(harimirch,lalmirch){
console.log(this.brand,harimirch,lalmirch);

}
let mumu=chutney.bind(momo,"MDH","noori")