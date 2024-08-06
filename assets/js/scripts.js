const toTobBtn = document.querySelector(".top-btn");

addEventListener("scroll", () => {
    if (scrollY >= 88) {
        toTobBtn.classList.add("show");
    } else {
        toTobBtn.classList.remove("show");
    }
});