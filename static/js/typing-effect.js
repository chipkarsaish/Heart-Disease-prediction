const textArray = ["AI", "Speed", "Accuracy", "Security"];
let textIndex = 0;
let charIndex = 0;
const typingElement = document.querySelector(".typing");

function type() {
    if (charIndex < textArray[textIndex].length) {
        typingElement.textContent += textArray[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, 150);
    } else {
        setTimeout(erase, 1000);
    }
}

function erase() {
    if (charIndex > 0) {
        typingElement.textContent = textArray[textIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, 100);
    } else {
        textIndex = (textIndex + 1) % textArray.length;
        setTimeout(type, 500);
    }
}

document.addEventListener("DOMContentLoaded", function () {
    setTimeout(type, 500);
});
