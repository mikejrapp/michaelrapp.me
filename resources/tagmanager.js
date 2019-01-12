window.onload = () => {
    console.log("Loading GA tag manager with " + config.GOOGLE_ANALYTICS_TAG_MANAGER);
    document.getElementById("gaTagManager").src = config.GOOGLE_ANALYTICS_TAG_MANAGER;
};