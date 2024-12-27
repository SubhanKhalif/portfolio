document.querySelector('#menu').onclick = () => {
    document.querySelector('#menu').classList.toggle('fa-times');
    document.querySelector('.navbar').classList.toggle('nav-toggle');
}

// close navbar on scroll
window.onscroll = () => {
    document.querySelector('#menu').classList.remove('fa-times');
    document.querySelector('.navbar').classList.remove('nav-toggle');
}
