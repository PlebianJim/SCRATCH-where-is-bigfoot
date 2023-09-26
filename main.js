// Moves the location of the bigfoot image each time the page is loaded
function moveImage() {
    let imageContainer = document.getElementById('image-container');
    let viewportWidth = window.innerWidth;
    let viewportHeight = window.innerHeight;

    let newLeft = Math.random() * (viewportWidth - imageContainer.offsetWidth);
    let newTop = Math.random() * (viewportHeight - imageContainer.offsetHeight);

    imageContainer.style.left = newLeft + "px";
    imageContainer.style.top = newTop + "px";
}

// Moves the image each time the alert is trigered and the user closes the alert
function showAlert() {
    alert("Congratulations! You found Bigfoot");
    moveImage();
}

window.onload = moveImage;