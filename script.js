document.querySelector('#menu').onclick = () => {
    document.querySelector('#menu').classList.toggle('fa-times');
    document.querySelector('.navbar').classList.toggle('nav-toggle');
}

// close navbar on scroll
window.onscroll = () => {
    document.querySelector('#menu').classList.remove('fa-times');
    document.querySelector('.navbar').classList.remove('nav-toggle');
}


// <!-- typed js effect starts -->
var typed = new Typed(".typing-text", {
    strings: ["frontend development", "web designing", "web development"],
    loop: true,
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 500,
});
// <!-- typed js effect ends -->