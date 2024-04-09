// script.js
function playSound(key) {
    const audio = document.querySelector(`audio[data-key="${key}"]`);
    const keyDiv = document.querySelector(`div[data-key="${key}"]`);

    if (!audio) return; // Stop the function if no audio element is found

    audio.currentTime = 0; // Rewind to the start of the sound
    audio.play();

    keyDiv.classList.add('playing');
}

function removeTransition(event) {
    if (event.propertyName !== 'transform') return; // Skip if it's not a transform
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', function (event) {
    playSound(event.keyCode);
});
