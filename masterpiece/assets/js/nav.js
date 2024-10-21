// nav mobile

const sidebar = document.querySelector("#sidebar");
const hamb = document.querySelector(".hamb");
const hambSpan = document.querySelectorAll(".hamb span");

hamb.addEventListener("click", () => {
    console.log("clicked");
    sidebar.classList.toggle("active-sidebar")

    // if (sidebar.classList.contains("active-sidebar")) {
    // hambSpan.forEach((span) => {
    //     span.style.backgroundColor = "white";
    // })
    // } else {
    //     hambSpan.forEach((span) => {
    //         span.style.backgroundColor = "black";
    //     })
    // }
})