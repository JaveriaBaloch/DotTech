// For skills functions
function cssFunctionForPercentage(){
progressCSS = ["95","90","94","96"]
progress= document.querySelectorAll(".progress")
let showPercentage= 0
progress.forEach(bar=>{
    bar.style.width = `${progressCSS[showPercentage]}%`
    showPercentage++
})
}
// For Navbar
navbar = document.querySelector(".navbar")
nav =document.querySelector("nav")
i = document.createElement("i")
i.setAttribute("class", "fa fa-bars")
let flexNav = true
responsiveNavbar = (x) =>{
    if(x.matches){
        navbar.style.display = "flex"
        navbar.style.transform = "translateX(100%)"
        nav.appendChild(i)
        flexNav = false
        document.querySelector(".fa-bars").addEventListener('click',showNav)
    }
    else{
        navbar.style.display = "flex"
        navbar.style.transform = "translateX(0%)"
        flexNav =true
        if(flexNav){
            bars = document.querySelector(".fa-bars")
            if(bars){
            nav.removeChild(bars)
            }
        }
    }
}
showNav = () =>{
    navbar.style.display = "flex"
    navbar.style.transform = "translateX(0%)"
    document.querySelector(".fa-xmark").addEventListener('click', hideNav)
}
hideNav = () =>{
    navbar.style.display = "flex"
    navbar.style.transform = "translateX(100%)"
}
hideATFirst=()=>{
    if(windowWidth.matches){
    navbar.style.display = "none"
    nav.appendChild(i)
    flexNav = false
    document.querySelector(".fa-bars").addEventListener('click',showNav)
}
}
windowWidth= window.matchMedia("(max-width:760px)")
hideATFirst()
windowWidth.addListener(responsiveNavbar)
cssFunctionForPercentage()

// Night Mode Function
lightSwitch = document.querySelectorAll("input[type='checkbox']")[0]
nightModeFunction=()=>{
    if(lightSwitch.checked){
      body =  document.querySelector("body")
      body.setAttribute("class","black")
    }
    else{
        body =  document.querySelector("body")
        body.setAttribute("class","")
    }
}
lightSwitch.addEventListener('change',nightModeFunction)