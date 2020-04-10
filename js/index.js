// Your code goes here

// WHEEL
let bodyBgColor = document.getElementsByTagName("body")[0];

bodyBgColor.addEventListener("wheel",()=>{
    bodyBgColor.style.background = 'linear-gradient(#c5eafa, #fff)';
});

// KEYDOWN
window.onscroll = function(ev) {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        // console.log("BOTTOM OF THE PAGE");

        bodyBgColor.addEventListener("keydown",()=>{
            window.scrollTo({ top: 0, behavior: 'smooth' });
            // console.log("Lets go then!");
        });
        
    }
};

//mouseOver and mouseOut
const heroImg = document.getElementsByTagName("img")[0];

heroImg.addEventListener("mouseover",(event)=>{
    event.target.style.opacity = ".05";

});
heroImg.addEventListener("mouseout",(event)=>{
    event.target.style.opacity = "1";

});

let dragImg = document.getElementsByTagName("img")[1];
console.log(dragImg);