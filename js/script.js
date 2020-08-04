document.addEventListener('scroll', e => {
    const scroll = window.scrollY;
    const nav = document.querySelector('nav');
    if(scroll > 100) {
        nav.classList.add('bg')
    } else {
        nav.classList.remove('bg')
    }
})