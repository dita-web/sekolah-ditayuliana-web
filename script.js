const nav=document.getElementById("nav"),hamb=document.getElementById("hamburger");
hamb.addEventListener("click",()=>{nav.classList.toggle("open")});
document.querySelectorAll(".nav a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));

document.querySelectorAll(".tabs button").forEach(btn=>btn.addEventListener("click",()=>{
 document.querySelectorAll(".tabs button").forEach(b=>b.classList.remove("active"));btn.classList.add("active");
 const f=btn.dataset.filter;
 document.querySelectorAll(".ekskul-grid article").forEach(card=>card.classList.toggle("hidden",f!=="all"&&card.dataset.category!==f));
}));

const modal=document.getElementById("modal"), loginModal=document.getElementById("loginModal");
function show(m){m.classList.add("show");document.body.style.overflow="hidden"}
function hide(m){m.classList.remove("show");document.body.style.overflow=""}
document.querySelectorAll(".detail").forEach(b=>b.addEventListener("click",()=>{document.getElementById("modalTitle").textContent=b.dataset.title;document.getElementById("modalText").textContent=b.dataset.text;show(modal)}));
document.getElementById("loginBtn").addEventListener("click",()=>show(loginModal));
document.querySelectorAll(".close").forEach(b=>b.addEventListener("click",()=>hide(b.closest(".modal"))));
document.querySelectorAll(".modal").forEach(m=>m.addEventListener("click",e=>{if(e.target===m)hide(m)}));
document.addEventListener("keydown",e=>{if(e.key==="Escape"){hide(modal);hide(loginModal)}});

document.getElementById("loginForm").addEventListener("submit",e=>{
 e.preventDefault();document.getElementById("loginMsg").textContent="Demo login aktif. Hubungkan form ini dengan sistem autentikasi sekolah untuk penggunaan nyata.";
});
