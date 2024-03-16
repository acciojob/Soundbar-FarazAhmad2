document.addEventListener("DOMContentLoaded", function() {
  const buttons = document.querySelectorAll(".btn");
  const stopButton = document.querySelector(".stop");
  const soundsFolder = "./sounds/";
  let playingAudio = null;

  buttons.forEach(button => {
    button.addEventListener("click", function() {
      const soundName = this.textContent.trim();
      playSound(soundName);
    });
  });

  stopButton.addEventListener("click", function() {
    stopAllSounds();
  });

  function playSound(soundName) {
    stopAllSounds();
    const soundFile = `${soundsFolder}${soundName}.mp3`;
    playingAudio = new Audio(soundFile);
    playingAudio.play();
    document.body.appendChild(playingAudio); // Append audio element to the body
  }

  function stopAllSounds() {
    if (playingAudio !== null) {
      playingAudio.pause();
      document.body.removeChild(playingAudio); // Remove audio element from the body
      playingAudio = null;
    }
  }
});
