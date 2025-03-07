document.addEventListener("DOMContentLoaded", function () {
    const toggler = document.querySelector(".navbar-toggler");
    const menu = document.querySelector(".navbar-collapse");
    const header_banner = document.querySelector(".header_banners");

    toggler.addEventListener("click", function () {
        menu.classList.toggle("show");
        header_banner.classList.add("expand");
        console.log("clicked");
    });

    // Close menu when clicking outside
    document.addEventListener("click", function (event) {
        if (!menu.contains(event.target) && !toggler.contains(event.target)) {
            menu.classList.remove("show");
            header_banner.classList.remove("expand");
        }
    });
});
