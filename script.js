/* ===========================================
   HALB Website JavaScript
=========================================== */

// Welcome text animation
window.addEventListener("load", () => {
    document.body.classList.add("loaded");
});

// Menu active effect
const menuLinks = document.querySelectorAll("nav ul li a");

menuLinks.forEach(link => {

    link.addEventListener("click", function(){

        menuLinks.forEach(item=>{
            item.classList.remove("active");
        });

        this.classList.add("active");

    });

});

// Car hover glow
const cars = document.querySelectorAll("images/bmw.png");

cars.forEach(car=>{

    car.addEventListener("mouseenter",()=>{

        car.style.transform="scale(1.08)";
        car.style.filter="drop-shadow(0 0 60px red)";

    });

    car.addEventListener("mouseleave",()=>{

        car.style.transform="scale(10)";
        car.style.filter="drop-shadow(0 0 70px rgba(255,255,255,.2))";

    });

});

// Green light pulse
const glow=document.querySelector(".glow");

if(glow){

setInterval(()=>{

glow.style.opacity=Math.random()*0.5+0.5;

},300);

}

// Smoke animation
const smoke=document.querySelectorAll(".smoke");

smoke.forEach((item,index)=>{

let pos=0;

setInterval(()=>{

pos++;

item.style.transform=`translateY(${-pos}px)`;

if(pos>150){

pos=0;

}

},60+index*20);

});

// Gallery animation
const cards=document.querySelectorAll(".card");

cards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-15px) scale(1.05)";
card.style.boxShadow="0 0 40px gold";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0)";
card.style.boxShadow="none";

});

});

// Scroll animation
window.addEventListener("scroll",()=>{

const scroll=window.scrollY;

const hero=document.querySelector(".hero");

if(hero){

hero.style.transform=`translateY(${scroll*0.2}px)`;

}

});

// Blinking headlights effect
setInterval(()=>{

document.querySelectorAll(".headlight").forEach(light=>{

light.classList.toggle("on");

});

},500);

// Wheel rotation (requires .wheel class)
setInterval(()=>{

document.querySelectorAll(".wheel").forEach(wheel=>{

let angle = wheel.dataset.angle ? parseInt(wheel.dataset.angle) : 0;
angle += 10;

wheel.style.transform=`rotate(${angle}deg)`;
wheel.dataset.angle=angle;

});

},30);
// ===================
// PROFILE MENU
// ===================
const btn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

btn.addEventListener("click", () => {
    menu.classList.toggle("show");
});

// ===============================
// PREMIUM NAVBAR SCRIPT
// ===============================

// ---------- USER PROFILE ----------

const userPic = document.getElementById("userPic");
const subMenu = document.getElementById("subMenu");

if (userPic && subMenu) {

    userPic.addEventListener("click", function (e) {
        e.stopPropagation();
        subMenu.classList.toggle("open");
    });

    document.addEventListener("click", function (e) {

        if (!subMenu.contains(e.target) && !userPic.contains(e.target)) {
            subMenu.classList.remove("open");
        }

    });

}

// ---------- SEARCH ----------

const searchIcon = document.querySelector(".nav-icon");

if(searchIcon){

searchIcon.addEventListener("mouseenter",()=>{

searchIcon.style.transform="scale(1.15) rotate(15deg)";

});

searchIcon.addEventListener("mouseleave",()=>{

searchIcon.style.transform="scale(1)";

});

}

// ---------- GOLD LOGO EFFECT ----------

const logo=document.querySelector(".logo");

if(logo){

setInterval(()=>{

logo.style.textShadow="0 0 20px gold";

setTimeout(()=>{

logo.style.textShadow="0 0 5px gold";

},600);

},2500);

}

// ---------- NOTIFICATION BELL ----------

const bell=document.querySelectorAll(".nav-icon")[1];

if(bell){

setInterval(()=>{

bell.style.transform="rotate(15deg)";

setTimeout(()=>{

bell.style.transform="rotate(-15deg)";

},180);

setTimeout(()=>{

bell.style.transform="rotate(0deg)";

},360);

},4000);

}
