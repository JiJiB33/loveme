const noButton = document.getElementById('noButton');
const popup = document.getElementById('popup');

noButton.addEventListener('mouseover', () => {
    const x = Math.floor(Math.random() * (window.innerWidth - noButton.clientWidth));
    const y = Math.floor(Math.random() * (window.innerHeight - noButton.clientHeight));

    noButton.style.position = 'absolute';
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;
});

function showPopup() {
    popup.style.display = 'flex';
}

function redirectToPrank() {
    window.location.href = "hacked.html";
}
