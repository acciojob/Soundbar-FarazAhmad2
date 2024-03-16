//your JS code here. If required.
document.addEventListener('DOMContentLoaded',() => {
  const btns = document.querySelectorAll('.btn');
  const stopButton = document.querySelector('.stop');

  let playingSound = null;
  btns.forEach(btn => {
    let soundFile = `./sounds/${btn.textContent}.mp3`;
    btn.addEventListener('click', () => {
      playSound(soundFile);
    });
  })

  stopButton.addEventListener('click', () => {
    stopAllSound();
  })

  function stopAllSound() {
    if (playingSound != null) {
      playingSound.pause();
      playingSound = null;
    }
  }

  function playSound(soundFile) {
    stopAllSound();
    sound = new Audio (soundFile);
    playingSound = sound;
    playingSound.play();
  }
})