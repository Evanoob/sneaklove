console.log("hello")

const burger = () => {
    const btnresponsive = document.querySelector(".burger");
    const nav = document.querySelector(".nav-link");

    btnresponsive.addEventListener('click', () => {
        btnresponsive.classList.toggle("active");
        nav.classList.toggle("nav-active")
    });
}
burger()