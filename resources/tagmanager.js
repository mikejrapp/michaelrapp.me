window.onload = () => {
    console.log("Loading GA tag manager with " + GOOGLE_ANALYTICS_TAG_MANAGER);
    document.getElementById("gaTagManager").src = GOOGLE_ANALYTICS_TAG_MANAGER;
};