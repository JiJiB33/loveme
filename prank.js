document.body.classList.add("hacked");

let count = 0;
setInterval(() => {
    const warningMessages = [
        "Initiating malware...",
        "Connecting to external servers...",
        "Bypassing firewall...",
        "Encrypting personal files...",
        "Sending data to hacker's server..."
    ];
    const randomMessage = warningMessages[Math.floor(Math.random() * warningMessages.length)];
    const warningDiv = document.createElement("div");
    warningDiv.textContent = randomMessage;
    warningDiv.style.marginTop = "10px";
    document.body.appendChild(warningDiv);
}, 1500);

setTimeout(() => {
    alert("Just kidding! This was a harmless prank. :)");
    window.location.href = "showcase.html"; // Redirect back to the main page
}, 5000); // Prank ends after 25 seconds
