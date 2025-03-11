document.getElementById("openGifts").addEventListener("click", function () {
    document.getElementById("giftsContainer").classList.remove("hidden");
});

function showGiftMessage(message) {
    hideVideo(); // Hide and pause the video when switching gifts
    document.getElementById("giftMessage").innerText = message;
}

// Function to show and play the video
function playVideo() {
    let videoContainer = document.getElementById("videoContainer");
    let video = document.getElementById("birthdayVideo");

    hideVideo(); // Hide previous video if open
    videoContainer.classList.remove("hidden"); // Show video container
    video.play(); // Start playing
}

// Function to hide and pause the video
function hideVideo() {
    let videoContainer = document.getElementById("videoContainer");
    let video = document.getElementById("birthdayVideo");

    video.pause(); // Pause the video
    videoContainer.classList.add("hidden"); // Hide the container
}
function showGiftImage(imageSrc) {
    hideVideo(); // Hide video if it's open
    let imageContainer = document.getElementById("imageContainer");
    let giftImage = document.getElementById("giftImage");

    giftImage.src = imageSrc; // Set the image source dynamically
    imageContainer.classList.remove("hidden"); // Show image container
}

function hideImage() {
    document.getElementById("imageContainer").classList.add("hidden");
}
