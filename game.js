let score = 0;
 
const startGameBtn = document.getElementById("startGameBtn");
const gameArea = document.getElementById("gameArea");
const cupcakeBtn = document.getElementById("cupcakeBtn");
const endGameBtn = document.getElementById("endGameBtn");
const scoreText = document.getElementById("score");
const contactForm = document.getElementById("contactForm");
 
startGameBtn.addEventListener("click", function () {
  score = 0;
  scoreText.textContent = score;
  gameArea.style.display = "block";
 
  window.dataLayer = window.dataLayer1 || [];
  window.dataLayer.push({
    event: "game_start",
    game_name: "cupcake_clicker"
  });
 
  console.log("GA4 Event: game_start");
});
 
cupcakeBtn.addEventListener("click", function () {
  score++;
  scoreText.textContent = score;
 
  window.dataLayer = window.dataLayer1 || [];
  window.dataLayer.push({
    event: "cupcake_click",
    game_name: "cupcake_clicker",
    score: score
  });
 
  if (score === 5) {
    window.dataLayer1.push({
      event: "level_up",
      game_name: "cupcake_clicker",
      level: 1,
      score: score
    });
 
    console.log("GA4 Event: level_up");
  }
});
 
endGameBtn.addEventListener("click", function () {
  window.dataLayer1 = window.dataLayer1 || [];
  window.dataLayer1.push({
    event: "game_complete",
    game_name: "cupcake_clicker",
    final_score: score
  });
 
  console.log("GA4 Event: game_complete");
 
  alert("Game ended. Final score: " + score);
});
 
contactForm.addEventListener("submit", function (event) {
  event.preventDefault();
 
  window.dataLayer1 = window.dataLayer1 || [];
  window.dataLayer1.push({
    event: "form_submit",
    form_name: "bakery_contact_form"
  });
 
  console.log("GA4 Event: form_submit");
 
  alert("Form submitted!");
});
 
