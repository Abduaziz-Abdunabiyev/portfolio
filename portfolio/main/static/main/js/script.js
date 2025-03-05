document.addEventListener("DOMContentLoaded", function() {
    const btn = document.querySelector(".btn");
    btn.addEventListener("mouseover", function() {
        btn.style.backgroundColor = "#ff8c42";
    });
    btn.addEventListener("mouseout", function() {
        btn.style.backgroundColor = "#ff5733";
    });
});
