document.addEventListener("DOMContentLoaded", function () {
    const selects = document.querySelectorAll(".input-container select");
    const inputs = document.querySelectorAll(".input-container input");

    // Clear input fields on page load
    inputs.forEach(input => {
        input.value = ""; // Removes "Select" from the input box
    });

    selects.forEach(select => {
        select.addEventListener("change", function () {
            this.classList.add("shrink"); // Apply shrink immediately
            this.blur(); // Removes focus so it shrinks instantly
        });

        // Expand back when clicked again
        select.addEventListener("focus", function () {
            this.classList.remove("shrink");
        });
    });
});

function updateInput(inputId, selectElement) {
    const inputField = document.getElementById(inputId);
    if (selectElement.value) {
        inputField.value = selectElement.options[selectElement.selectedIndex].text; // Set text instead of value
    }
}
