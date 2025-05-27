document.addEventListener("DOMContentLoaded", function () {
    const tabs = document.querySelectorAll(".tab-btn");
    const contents = document.querySelectorAll(".tab-content");
    const highlight = document.createElement("div");
    highlight.classList.add("tab-highlight");
    document.querySelector(".tab-container").appendChild(highlight);

    function updateTabHighlight() {
        const activeTab = document.querySelector(".tab-btn.active");
        if (activeTab) {
            highlight.style.left = activeTab.offsetLeft + "px";
            highlight.style.width = activeTab.offsetWidth + "px";
        }
    }

    tabs.forEach((tab, index) => {
        tab.addEventListener("click", () => {
            tabs.forEach((t) => t.classList.remove("active"));
            contents.forEach((c) => c.classList.remove("active"));

            tab.classList.add("active");
            contents[index].classList.add("active");

            updateTabHighlight();
        });
    });

    // Initialize
    document.querySelector(".tab-btn.active")?.click();
});
