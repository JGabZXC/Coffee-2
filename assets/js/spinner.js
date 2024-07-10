window.addEventListener('load', () =>{
    const spinnerCon = document.querySelector('.spinner-con');

    spinnerCon.classList.add('active');

    spinnerCon.addEventListener('transitionend', () => {
        spinnerCon.remove();
    });
});