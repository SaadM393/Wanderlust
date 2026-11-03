
const menuButton = document.getElementById("menuButton");

menuButton.addEventListener("click", () => {
    console.log("Menu clicked");
});
document.querySelector(".back-to-top").addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});