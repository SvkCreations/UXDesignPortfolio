let caseStudy1= document.getElementById('caseStudy1');
let caseStudy2= document.getElementById('caseStudy2');

caseStudy1.addEventListener("mouseover",()=>{
    caseStudy1.style.cssText = "background-size: 105%; transition-duration: .5s; cursor: pointer";
})
caseStudy1.addEventListener("mouseout",()=>{
    caseStudy1.style.cssText = "background-size: 100%; transition-duration: .5s";
})
caseStudy1.addEventListener("click",()=>{
    document.location="project1.html";
})


caseStudy2.addEventListener("mouseover",()=>{
    caseStudy2.style.cssText = "background-size: 105%; transition-duration: .5s; cursor: pointer";
})
caseStudy2.addEventListener("mouseout",()=>{
    caseStudy2.style.cssText = "background-size: 100%; transition-duration: .5s";
})

let socialLinks = document.getElementsByClassName('fa');
Array.from(socialLinks).forEach((element)=>{
    element.addEventListener('mouseover',()=>{
        element.style.color="#de0f66";
        element.style.transitionDuration = ".3s";
    })
    element.addEventListener('mouseout',()=>{
        element.style.color="#212529";
        element.style.transitionDuration = ".3s";
    })
})


