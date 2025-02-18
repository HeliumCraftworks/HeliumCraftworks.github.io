const form = document.getElementById('contactForm');
const overlay = document.querySelector('.overlay');

overlay.style.display = 'none';

form.addEventListener('submit', function (event) {
    event.preventDefault();
    setTimeout(function () {
        overlay.style.display = 'flex';
        form.reset();
        setTimeout(function () {
            overlay.style.display = 'none';
        }, 3000);
    }, 500);
});
