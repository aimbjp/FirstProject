const buttons = document.querySelectorAll("[data-carousel-button]");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const typeButton = button.dataset.carouselButton === "next" ? 1 : -1;
        const slides = button.closest("[data-carousel]").querySelector("[data-slides]");
        const activeSlide = slides.querySelector("[data-active]");
        let newIndex = [...slides.children].indexOf(activeSlide) + typeButton;
        if (newIndex < 0) {
            newIndex = slides.children.length - 1;
        }
        if (newIndex >= slides.children.length ) {
            newIndex = 0;
        }
        slides.children[newIndex].dataset.active = true;
        delete activeSlide.dataset.active;
    })
})

// // lobby - group trans

// const legend = document.querySelectorAll('.leg-lobby'); 
// const aGroup = document.querySelectorAll('.a-group');

// aGroup.forEach(e => {
//     e.addEventListener('click', () => {
//         legend.forEach((elem) => {
//             if (e.id === elem.id) {
//                 let groupName = elem.innerHTML;
//                 fun (groupName);
//             }
//         });
//     });
// });

// const nameGr = document.querySelector('.nameGr'); 

// function fun (groupName) {
// window.onload = () => {
//     nameGr.innerHTML = groupName;
// };
// };



const canvas = document.getElementById("canvas");
const c = canvas.getContext("2d");
let widthProp = window.innerWidth;
let heightProp = window.innerHeight;



function randomColor() {
  return (
    "rgba(" +
    Math.round(Math.random() * 250) +
    "," +
    Math.round(Math.random() * 250) +
    "," +
    Math.round(Math.random() * 250) +
    "," +
    Math.ceil(Math.random() * 10) / 10 +
    ")"
  );
}

function Ball() {
  this.color = randomColor();
  this.radius = Math.random() * 20 + 50;
  this.x = Math.random() * (widthProp - this.radius * 2) + this.radius;
  this.y = Math.random() * (heightProp - this.radius);
  this.dy = Math.random() * 5;
  this.dx = Math.round((Math.random() - 0.5) * 10);
  this.vel = Math.random() / 3;
  this.update = function() {
    c.beginPath();
    c.rect(this.x, this.y, this.radius, this.radius);
    c.fillStyle = this.color;
    c.fill();
  };
}

let bal = [];
for (let i=0; i < 50; i++){
    bal.push(new Ball());
}

function animate() { 
    canvas.width = widthProp;
    canvas.height = heightProp;   
    requestAnimationFrame(animate);
    c.clearRect(0, 0, widthProp, heightProp);
    for (let i = 0; i < bal.length; i++) {
        bal[i].update();
        bal[i].y += bal[i].dy;
        bal[i].x += bal[i].dx;
        }
}

animate(); 

setInterval(() => { 
    bal.push(new Ball()); 
    bal.splice(0,1);
}, 300);

