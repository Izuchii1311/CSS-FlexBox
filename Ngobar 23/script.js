const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', function() {
    // toggle = jika tidak ada classnya tambahkan, jika ada hilangkan
    nav.classList.toggle('slide');
});