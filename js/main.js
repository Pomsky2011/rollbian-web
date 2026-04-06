// highlight current nav link
const path = window.location.pathname.replace(/\/$/, "") || "/index.html";
document.querySelectorAll("nav ul a").forEach(a => {
    if (a.getAttribute("href") === path) a.classList.add("active");
});
