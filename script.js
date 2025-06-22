const button = document.getElementById('wishButton');

button.addEventListener('click', () => {
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 }
  });

  //go to details page after confetti
  setTimeout(() => {
    window.location.href = "details.html";
  }, 2000);
});
