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


//DRAG and DROP
//let dragImg = document.getElementsByTagName("img")[1];
let allImages = Array.from(document.getElementsByTagName("img"));

allImages.forEach((element)=>{
    element.setAttribute("class","dropzone");

    element.addEventListener("drag",(event)=>{
    },false);
    
    element.addEventListener("dragend",(event)=>{
        //reset
        event.target.style.opacity = "";
    },false);
    
    element.addEventListener("dragstart",(event)=>{
        event.target.style.opacity = "0.3";
    },false);
    
    element.addEventListener("dragover",(event)=>{
        event.preventDefault();
    },false);
    
    element.addEventListener("dragenter",(event)=>{
        if(event.target.className == "dropzone"){
            event.target.style.opacity = '0.5';
        }
    },false);
    
    element.addEventListener("dragleave", function(event) {
        if (event.target.className == "dropzone") {
            event.target.style.opacity = "";
        }
      }, false);
    
    
      element.addEventListener("drop", function(event) {
        event.preventDefault();
        if (event.target.className == "dropzone") {
            console.log("Dragged on an image!");
            event.target.style.opacity = "";
        }
    }, false);


});


//LOAD
window.addEventListener('load', (event) => {
    document.body.style.color = "saddlebrown";
});

//FOCUS
const anchors = Array.from(document.getElementsByTagName('a'));

anchors.forEach((element)=>{
    element.addEventListener('focus', (event) => {
        event.target.style.background = 'orchid';    
      });
});

//