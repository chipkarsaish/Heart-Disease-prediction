function navigateTo(page) {
    const transitionOverlay = document.querySelector('.transition-overlay');
    const loadingScreenVideo = document.querySelector('.loading-screen-video');

    if (!transitionOverlay || !loadingScreenVideo) {
        console.error("Transition overlay or loading screen video not found!");
        window.location.href = page; // Fallback redirect
        return;
    }

    // Reset video
    loadingScreenVideo.pause();
    loadingScreenVideo.currentTime = 0;

    // Slight delay to allow for style update before playing
    setTimeout(() => {
        // Show transition overlay
        transitionOverlay.style.opacity = "1";
        transitionOverlay.style.visibility = "visible";

        // Wait until video is ready
        loadingScreenVideo.addEventListener('canplaythrough', () => {
            loadingScreenVideo.play()
                .then(() => {
                    console.log("Loading screen video started successfully.");

                    // Redirect when video ends
                    loadingScreenVideo.onended = () => {
                        console.log("Loading screen video ended, redirecting...");
                        window.location.href = page;
                    };

                    // Fallback in case onended doesn't trigger
                    const fallbackDelay = isNaN(loadingScreenVideo.duration)
                        ? 5000
                        : loadingScreenVideo.duration * 1000;

                    setTimeout(() => {
                        console.log("Fallback triggered, redirecting...");
                        window.location.href = page;
                    }, fallbackDelay);

                })
                .catch(error => {
                    console.error("Autoplay blocked:", error);
                    window.location.href = page; // Fallback if autoplay fails
                });
        }, { once: true });

    }, 50); // Small delay for smoother transition
}
