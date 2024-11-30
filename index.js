document.addEventListener('DOMContentLoaded', function() {
    const yesButton = document.getElementById('yes-button');
    const noButton = document.getElementById('no-button');

    yesButton.addEventListener('click', function() {
        window.location.href = 'home.html';
    });

    noButton.addEventListener('click', function() {
        alert('Please get the mask from the reception and try again.');
    });
});
