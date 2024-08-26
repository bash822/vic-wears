let price1 = document.querySelector(".price1")
  let news = document.getElementById("new")
  let count = 1;
  let price = 750;
  up.addEventListener("click", ()=>{
   count--
   price = price - 750
    news.innerHTML =  count
    price1.innerHTML = price
  })
   
  let me = document.getElementById("new") 
 down.addEventListener("click", ()=>{
  count++
  price = price * 2
  price1.innerHTML = price
  me.innerHTML = count
  
 })
//  second row
let price2 = document.querySelector(".price2")
let run = document.getElementById("old")
let Price = 400;
add.addEventListener(
  "click", ()=>{
    coun++
    Price = Price * 2
    price2.innerHTML = Price
    run.innerHTML = coun
  }
)
let ro = document.getElementById("old")
let coun = 1
met.addEventListener("click", ()=>{
  coun--
  Price = Price - 400
  ro.innerHTML = coun
  price2.innerHTML = Price 
})


//  third row
let PRice3 = document.querySelector(".price3")
let men = document.getElementById("older")
let PRice = 6000;
yoo.addEventListener(
  "click",()=> {
  cou++
  PRice = PRice * 2
  PRice3.innerHTML = PRice
  men.innerHTML=cou
})

let gen = document.getElementById("older")
let cou = 1
yaa.addEventListener("click", ()=> {
  cou--
  PRice = PRice - 6000
  gen.innerHTML=cou
  PRice3.innerHTML = PRice
})
