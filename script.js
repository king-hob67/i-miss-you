const messages = [
    "I miss you more than words can say.",
    "Every moment without you is a moment too long.",
    "I wish you were here with me.",
    "My heart aches without you.",
    "I miss your smile, your laugh, your eyes.",
    // ... add more messages here (at least 100)
];

const generateMessage = () => {
    const randomIndex = Math.floor(Math.random() * messages.length);
    const message = messages[randomIndex];
    document.getElementById("message-container").innerHTML = message;
};

document.getElementById("generate-message").addEventListener("click", generateMessage);

// Rose popup
const rosePopup = document.createElement("div");
rosePopup.id = "rose-popup";
const roseImage = document.createElement("img");
roseImage.src = "rose.png"; // replace with your own rose image
rosePopup.appendChild(roseImage);
document.body.appendChild(rosePopup);

const showRosePopup = () => {
    rosePopup.style.display = "block";
    setTimeout(() => {
        rosePopup.style.display = "none";
    }, 3000);
};

document.getElementById("generate-message").addEventListener("click", showRosePopup);
