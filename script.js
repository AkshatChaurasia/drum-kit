window.addEventListener("keydown", function (e) {
  const audio = document.querySelector(`audio[data-key = "${e.code}"]`);
  const key = document.querySelector(`.key[data-key = "${e.code}"]`);

  if (!audio) return; // stop the function from running

  // Add playing class for animation
  key.classList.add("playing");

  audio.currentTime = 0; // rewind to the start when pressing the same key multiple times
  audio.play();
});

// Remove playing class after animation
window.addEventListener("keyup", function (e) {
  const key = document.querySelector(`.key[data-key = "${e.code}"]`);
  if (key) {
    key.classList.remove("playing");
  }
});
