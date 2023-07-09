// Toggle class active
const navbarNav = document.querySelector ('.navbar-nav');
//Ketika Dagana-menu di klik 
document.querySelector ('#Dagana-menu').onclick = ( ) => {
    navbarNav.classList.toggle('active');
};
// Klik di luar sidebar untuk menghilangkan nav
const Dagana = document.querySelector('#Dagana-menu');

document.addEventListener('click', function (e) {
    if (!Dagana.contains(e.target) && !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active');
}
});