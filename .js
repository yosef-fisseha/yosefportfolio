// Back to Top Button Logic
const backToTopButton = document.getElementById("backToTop");

window.onscroll = function () {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        backToTopButton.style.display = "block"; // Show the button
    } else {
        backToTopButton.style.display = "none"; // Hide the button
    }
};

backToTopButton.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent anchor default behavior
    window.scrollTo({ top: 0, behavior: "smooth" }); // Smooth scroll to top
});
