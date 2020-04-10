// Your code goes here

// WHEEL
let bodyBgColor = document.getElementsByTagName("body")[0];
console.log(bodyBgColor);
bodyBgColor.addEventListener("wheel",(event)=>{
    bodyBgColor.style.background = 'linear-gradient(#c5eafa, #fff)';
});

// KEYDOWN
window.onscroll = function(ev) {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        // you're at the bottom of the page
        console.log("BOTTOM OF THE PAGE");
    }
};