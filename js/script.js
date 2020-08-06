document.addEventListener('scroll', e => {
    const scroll = window.scrollY;
    const nav = document.querySelector('nav');
    if(scroll > 100) {
        nav.classList.add('bg')
    } else {
        nav.classList.remove('bg')
    }
})

document.getElementById("btn-menu").addEventListener("click", () => {
    document.getElementById("nav-navbar").classList.toggle("show");
});