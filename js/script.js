// get the element
// the header top elemnt
let searsh = document.querySelector(".searsh");
let input = document.querySelector('input[id="searsh"]')
let nav = document.querySelector("ul")
let anchor = document.querySelectorAll("ul a")
let sectionOne = document.querySelector(".section-one")
let myList = document.querySelector(".my-lis")
let leftIcn = document.querySelector(".left-icn")
// end of the header top elemnt

// the header bottom elemnt
let changeInfo = document.querySelector(".change-ifo")
let brgrBtn = document.querySelector(".burger-btn")
// end of the header buttom elemnt

// shop section
let shop = document.querySelector(".shop")
let product = document.querySelectorAll(".shop .product")

let aboutImg = document.querySelector(".about-img")
let aboutImgSecound = document.querySelector(".about-sec-two")
// end shop sectio

// the request section
// let request = document.querySelectorAll("form input")
// console.log(request)
// end the request section

// end of getting elements
window.addEventListener("click",function(e){
    if(e.target != input){
        searsh.classList.remove('active')
    }
})

// header 

// top
input.addEventListener("click",()=>{
    searsh.classList.toggle('active')
})

myList.addEventListener("click", ()=>{
    sectionOne.classList.add("active")
    sectionOne.classList.add("active-a")
    leftIcn.classList.toggle("active")
})

leftIcn.addEventListener("click", ()=>{
    sectionOne.classList.remove("active")
    sectionOne.classList.remove("active-a")
    leftIcn.classList.toggle("active")
})
// end top

// buttom
brgrBtn.addEventListener("click",()=>{
    brgrBtn.classList.toggle("active")
    nav.classList.toggle("active")
})
anchor.forEach(function(e){
    e.addEventListener("click",()=>{
        nav.classList.toggle("active")
    })
})
// end bottom

// end header

// shop section
window.onscroll = function (){
    if(window.scrollY >= shop.offsetTop - 100){
        product.forEach(e => e.classList.add("active"))
        if(window.scrollY >= aboutImg.offsetTop - 100){
            aboutImg.classList.add("active")
            if(window.scrollY >= aboutImgSecound.offsetTop - 100){
                aboutImgSecound.classList.add("active")
            }    
        }    
}
}

// request section

// request.forEach(function(e){
//     e.onmouseout = ()=>{
//         if(e.lenght === 0){
//             e.style.borderColor = "red"
//         }
//     }
// })