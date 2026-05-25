const light = document.querySelector(".cursor-light");

document.addEventListener("mousemove", e=>{
light.style.left = e.clientX+"px";
light.style.top = e.clientY+"px";
});

document.addEventListener("touchmove", e=>{
light.style.left = e.touches[0].clientX+"px";
light.style.top = e.touches[0].clientY+"px";
});
// CURSOR LIGHT
const cursor = document.getElementById("cursor");

document.addEventListener("mousemove", e => {
cursor.style.left = e.clientX + "px";
cursor.style.top = e.clientY + "px";
});

// 3D TILT EFFECT
const cards = document.querySelectorAll(".card, .price-card");

cards.forEach(card => {

card.addEventListener("mousemove", (e) => {

const rect = card.getBoundingClientRect();
const x = e.clientX - rect.left;
const y = e.clientY - rect.top;

const centerX = rect.width / 2;
const centerY = rect.height / 2;

const rotateX = -(y - centerY) / 15;
const rotateY = (x - centerX) / 15;

card.style.transform = `
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
scale(1.05)
`;

});

card.addEventListener("mouseleave", () => {
card.style.transform = "rotateX(0) rotateY(0) scale(1)";
});

});
