
let btns = document.querySelector(".btns");
let buttonElement = document.querySelectorAll(".btns button");
let contentDivs = document.querySelectorAll(".content div");


btns.addEventListener("click" ,(e)=>{
    let currentBtn = e.target;
    let currentDiv = document.getElementById(currentBtn.dataset.mark);
    buttonElement.forEach((btn)=>{
        btn.classList.remove("active")
        currentBtn.classList.add("active")
    });
    contentDivs.forEach((div)=>{
        div.classList.remove("show");
        currentDiv.classList.add("show")
    });
})