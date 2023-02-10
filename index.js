const btnEl = document.querySelector(".btn");

btnEl.addEventListener("mouseover",(Event)=>{
    const y =Event.pageY - btnEl.offsetTop;
    const x =Event.pageX - btnEl.offsetLeft;

    btnEl.style.setProperty("--xPos", x + "px");
    btnEl.style.setProperty("--yPos", y + "px");
})