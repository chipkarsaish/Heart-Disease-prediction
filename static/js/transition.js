function navigateTo(page) {
    const transitionOverlay = document.querySelector('.transition-overlay');
    const loadingScreenVideo = document.querySelector('.loading-screen-video');

    if (!transitionOverlay || !loadingScreenVideo) {
        console.error("Transition overlay or loading screen video not found!");
        window.location.href = page; // Fallback redirect
        return;
    }

    // Reset the video and show overlay after a slight delay
    loadingScreenVideo.pause();
    loadingScreenVideo.currentTime = 0;

    setTimeout(() => {
        // Show overlay
        transitionOverlay.style.opacity = "1";
        transitionOverlay.style.visibility = "visible";

        // Play when video is ready
        loadingScreenVideo.addEventListener('canplaythrough', () => {
            loadingScreenVideo.play()
                .then(() => {
                    console.log("Loading screen video started successfully.");
                })
                .catch(error => {
                    console.error("Autoplay blocked:", error);
                    window.location.href = page; // Fallback if autoplay fails
                });
        }, { once: true });

        // Redirect when video ends
        loadingScreenVideo.onended = () => {
            console.log("Loading screen video ended, redirecting...");
            window.location.href = page;
        };

        // Safe fallback if video duration is invalid or no `onended`
        const fallbackDelay = isNaN(loadingScreenVideo.duration) ? 5000 : loadingScreenVideo.duration * 1000;
        setTimeout(() => {
            console.log("Fallback triggered, redirecting...");
            window.location.href = page;
        }, fallbackDelay);

    }, 50); // Short delay for smoother transitions
}
