// Mobile menu toggle
const menuIcon = document.getElementById('menu-icon');
const navList = document.querySelector('nav ul');

menuIcon.addEventListener('click', () => {
    navList.classList.toggle('active');
});
