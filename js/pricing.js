
var numberOfProject = document.querySelector(".NoPs")
var typeOfProject =document.querySelectorAll("input[type='radio']")
var slider = document.querySelector("input[type='range']")
var month = document.querySelector("#durationOfProject")
var noShowfirst = document.querySelectorAll(".no-show")
var total = document.querySelector(".total")
var calBtn =document.querySelectorAll("button")[1]
var includeOnBoardingSupport = document.querySelector("#onBoardingSupport")
var form = document.querySelector("form")
form.addEventListener("submit", function (e) {
    e.preventDefault()
})
let totalCost = 0
generateTotal=()=>{
    const eachProjectCost=  30000
    const projectPerMonthCost = 15000
    const consultationProjectCost = 20000
    const technicalSupportAndOnboardingCost  = 50000
    totalCost = eachProjectCost * parseInt(numberOfProject.value)
    let projectType = ""
    let perMonthCost = 0
    typeOfProject.forEach(e=>{
        if(e.checked){
            projectType = e.value
        }
    })
    if (projectType == "TS"){
        perMonthCost = consultationProjectCost
    }else{
        perMonthCost = projectPerMonthCost
    }
    if(isNaN(totalCost)){
        totalCost = 0
    }
    noOfMonths =  perMonthCost* parseInt(slider.value)
    if(totalCost <= 0 || noOfMonths <= 0){
        totalCost = 0
    }
    else{
        totalCost = totalCost + noOfMonths
    }
   if (includeOnBoardingSupport.checked){
    newValues= technicalSupportAndOnboardingCost * parseInt(numberOfProject.value)
    totalCost = totalCost + newValues
   }
   if(totalCost > 0){
    total.innerText = "Total Cost:\t"+totalCost + " euro"
   }
}
calBtn.addEventListener('click', generateTotal)

months=()=>{
    month.innerText = slider.value + " months"
}
slider.addEventListener('change',months)