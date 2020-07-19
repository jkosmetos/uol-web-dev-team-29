const toggleClass = (el, className) => el.classList.toggle(className);
const clickables = document.querySelectorAll('.popup, .overlay');

for (var i = 0; i < clickables.length; i++) {
    clickables[i].addEventListener('click', (e) => {
        toggleClass(document.querySelector('.overlay'), 'active');
        toggleClass(document.querySelector('body'), 'no_scroll');
    });
} 