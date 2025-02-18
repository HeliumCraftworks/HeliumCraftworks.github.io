const form = document.getElementById('contact-form');
const overlay = document.getElementById('overlay');
const overlayContent = document.getElementById('overlay-content');
const overlayMessage = document.getElementById('overlay-message');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    overlayMessage.textContent = 'Processing your submission...';
    overlay.style.display = 'flex';

    const formData = new FormData(form);

    fetch(form.action, {
        method: form.method,
        body: formData,
        headers: { 'Accept': 'application/json' }
    })
        .then(response => {
            if (response.ok) {
                overlayMessage.textContent = 'Thank you for reaching out.';
                form.reset();
            } else {
                overlayMessage.textContent = 'There was an error with your submission. Please try again later.';
            }
        })
        .catch(error => {
            console.error('Error:', error);
            overlayMessage.textContent = 'There was an error with your submission. Please try again later.';
        })
        .finally(() => {
            setTimeout(() => {
                overlay.style.display = 'none';
            }, 1500);
        });
});
