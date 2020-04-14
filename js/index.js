document.body.querySelector('.logo-heading').style.background = 'orange';

//mouseOver and mouseOut
const heroImg = document.getElementsByTagName("img")[0];

heroImg.addEventListener("mouseover",(event)=>{
    event.target.style.opacity = ".05";

});
heroImg.addEventListener("mouseout",(event)=>{
    event.target.style.opacity = "1";

});

// KEYDOWN [when at the bottom of the page]
window.onscroll = ()=> {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        bodyBgColor.addEventListener("keydown",()=>{
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
        
    }
};

// WHEEL [when you press mouse wheel]
let bodyBgColor = document.getElementsByTagName("body")[0];

bodyBgColor.addEventListener("wheel",()=>{
    bodyBgColor.style.background = 'linear-gradient(#c5eafa, #fff)';
});

//DRAG and DROP [on images]
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


//LOAD [when done loading]
let ogWidth,ogHeight;
window.addEventListener('load', (event) => {
    document.body.style.color = "saddlebrown";
    ogHeight = window.innerHeight;
    ogWidth = window.innerWidth;
});

//FOCUS [press tab]
const anchors = Array.from(document.getElementsByTagName('a'));

anchors.forEach((element)=>{
    element.style.background = 'orange';

    element.addEventListener('focus', (event) => {
        event.target.style.background = 'orchid';
      });

      element.addEventListener('focusout', (event) => {
        event.target.style.background = 'skyblue';
      });
});

//resize [on window width change]
let paras;
window.addEventListener("resize",()=>{
    paras = Array.from(document.getElementsByTagName("p"));
    
    if(window.innerWidth < ogWidth){
        paras.forEach((element)=>{
            element.style.fontStyle = "italic";
        });
    } else {
        paras.forEach((element)=>{
            element.style.fontStyle = "";
        });
    }
    
});


// `scroll` [anywhere]
let scrolling = false;
const navbar = document.querySelector(".main-navigation");

window.addEventListener('scroll',(event)=>{

    if(!scrolling){
        window.requestAnimationFrame(()=>{
            //event.stopPropagation();
            scrolling = false;
            navbar.style.background = '#cfb8ff'; 
            
        });
        scrolling = true;
    }
});


// `select` [footer area]
let newTextField = document.createElement('textarea');
newTextField.innerText = "The quick brown fox jumped over the moon.";

let footTextArea = document.querySelector('.footer');
footTextArea.append(newTextField);

newTextField.addEventListener("select",()=>{
    //log the start and end of what was selected
    console.log(event.target.value.substring(event.target.selectionStart, event.target.selectionEnd));

});

// `dblclick` [desination headers]
const smallSecHeaders = Array.from(document.getElementsByTagName('h4'));
let destCards = Array.from(document.querySelectorAll(".destination"));

destCards.forEach((element)=>{
    element.addEventListener('dblclick', (event) => {
        event.stopPropagation();
         event.target.style.background = 'orchid';
         
      });
});