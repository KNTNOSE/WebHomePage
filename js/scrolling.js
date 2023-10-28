document.addEventListener("DOMContentLoaded", function() {
    const infiniteText = document.querySelector(".infinite-scroll-text");
    let position = 0;
    
    function moveText() {
        // Reset position if text goes out of screen
        if (position > window.innerWidth) {
            position = -infiniteText.offsetWidth;
        }
        // Move the text to the right
        position += 2;
        infiniteText.style.left = position + "px";
        
        requestAnimationFrame(moveText);
    }
    
    moveText();
});
