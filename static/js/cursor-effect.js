document.addEventListener("DOMContentLoaded", function () {
    const cursor = document.createElement("div");
    cursor.classList.add("cursor");
    document.body.appendChild(cursor);

    const trails = [];

    document.addEventListener("mousemove", (e) => {
        const xPos = e.clientX;
        const yPos = e.clientY + window.scrollY; // Fix for scrolling issue

        cursor.style.left = `${xPos}px`;
        cursor.style.top = `${yPos}px`;

        const trail = document.createElement("div");
        trail.classList.add("cursor-trail");
        document.body.appendChild(trail);
        trails.push(trail);

        trail.style.left = `${xPos}px`;
        trail.style.top = `${yPos}px`;

        setTimeout(() => {
            trail.style.opacity = "0";
            setTimeout(() => {
                trail.remove();
                trails.shift();
            }, 200);
        }, 100);
    });
});