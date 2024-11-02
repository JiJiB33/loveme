const noButton = document.getElementById('noButton');
const popup = document.getElementById('popup');

noButton.addEventListener('mouseover', () => {
    const x = Math.floor(Math.random() * (window.innerWidth - noButton.clientWidth));
    const y = Math.floor(Math.random() * (window.innerHeight - noButton.clientHeight));

    noButton.style.position = 'absolute';
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;
});

// Show popup when "Yes" is clicked
function showPopup() {
    popup.style.display = 'flex'; // Shows the popup
}

// Redirect to the prank page
function redirectToPrank() {
    popup.style.display = 'none';
    window.location.href = "hacked.html";
}
