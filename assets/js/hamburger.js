const navMenu = document.querySelector('.nav-menu');
const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');

    if(hamburger.classList.contains('active')) {
        document.body.style.position = 'fixed';
    } else {
        document.body.style.position = 'static';
    }
});

const navMenuList = document.querySelectorAll('.nav-menu li');



navMenuList.forEach(li => {
    li.addEventListener('click', () => {
        document.body.style.position = 'static';
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
})