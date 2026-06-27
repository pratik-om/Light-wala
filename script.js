/* ==========================
   LIGHTWALA SCRIPT.JS
========================== */

// Loader

window.addEventListener("load", function () {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";

        loader.style.visibility = "hidden";

    }, 1500);

});


/* Floating Sparkles */

function createSparkle() {

    const sparkle = document.createElement("div");

    sparkle.className = "sparkle";

    sparkle.style.left = Math.random() * window.innerWidth + "px";

    sparkle.style.top = window.innerHeight + "px";

    sparkle.style.width = Math.random() * 8 + 4 + "px";

    sparkle.style.height = sparkle.style.width;

    const colors = [
        "#ff0080",
        "#00ffff",
        "#ffee00",
        "#00ff66",
        "#ff5500",
        "#bb00ff"
    ];

    sparkle.style.background =
        colors[Math.floor(Math.random() * colors.length)];

    sparkle.style.position = "fixed";

    sparkle.style.borderRadius = "50%";

    sparkle.style.boxShadow = "0 0 20px white";

    sparkle.style.pointerEvents = "none";

    sparkle.style.zIndex = "0";

    sparkle.style.animation = "sparkMove 6s linear forwards";

    document.body.appendChild(sparkle);

    setTimeout(() => {

        sparkle.remove();

    }, 6000);

}

setInterval(createSparkle, 300);


/* Sparkle Animation */

const style = document.createElement("style");

style.innerHTML = `

@keyframes sparkMove{

0%{

transform:translateY(0) scale(.3);
opacity:0;

}

20%{

opacity:1;

}

100%{

transform:translateY(-110vh) scale(1.5);
opacity:0;

}

}

`;

document.head.appendChild(style);


/* Navbar Background */

window.addEventListener("scroll", function(){

const header=document.querySelector("header");

if(window.scrollY>40){

header.style.background="rgba(0,0,0,.75)";

header.style.backdropFilter="blur(15px)";

}

else{

header.style.background="rgba(255,255,255,.05)";

}

});


/* Hero Circle Glow */

const circle=document.querySelector(".circle");

let degree=0;

setInterval(()=>{

degree++;

circle.style.boxShadow=

`0 0 40px hsl(${degree},100%,60%),
0 0 80px hsl(${degree+50},100%,60%),
0 0 120px hsl(${degree+100},100%,60%)`;

},40);


/* Button Hover Sound Effect (Optional) */

const buttons=document.querySelectorAll(".btn1,.btn2,.book-btn");

buttons.forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.transform="scale(1.05)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="scale(1)";

});

});


/* Random Background Glow */

setInterval(()=>{

document.body.style.background=

`radial-gradient(circle at ${
Math.random()*100
}% ${
Math.random()*100
}%,
rgba(255,255,255,.08),
#050505 60%)`;

},5000);


/* Console */

console.log("✨ Welcome to LightWala ✨");
