const form = document.getElementById('contact-form');
const overlay = document.getElementById('overlay');
const overlayContent = document.getElementById('overlay-content');
const overlayMessage = document.getElementById('overlay-message');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    const formData = new FormData(form);

    fetch(form.action, {
        method: form.method,
        body: formData,
        headers: { 'Accept': 'application/json' }
    })
        .then(response => {
            if (response.ok) {
                overlay.style.display = 'flex';
                overlayMessage.textContent = 'Thank you for reaching out.'
                form.reset();
            } else {
                overlay.style.display = 'flex';
                overlayMessage.textContent = 'There was an error with your submission. Please try again later.';
            }
        })
        .catch(error => {
            console.error('Error:', error);
            overlay.style.display = 'flex';
            overlayMessage.textContent = 'There was an error with your submission. Please try again later.';
        });
    setTimeout(function () {
        overlay.style.display = 'none';
    }, 2000);
});