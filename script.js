let secnum = Math.floor(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const userinput = Number(document.querySelector(".numbox").value);
  if (!userinput) {
    displayMessage("⛔ No Number!");
  }

  //    WINNING
  else if (userinput == secnum) {
    displayMessage(" 🎉 Correct Number");
    document.querySelector(".que-mark").textContent = secnum;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".que-mark").style.width = "5em";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  }

  //LOSING
  else if (userinput !== secnum) {
    if (score > 1) {
      document.querySelector(".message").textContent =
        userinput < secnum ? " 📉 Too Low!" : "📈 Too High";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage(" 😢 You lost the game");
      document.querySelector(".score").textContent = 0;
    }
  }
});

//RESETTING
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secnum = Math.floor(Math.random() * 20) + 1;
  document.querySelector(".score").textContent = score;

  document.querySelector(".que-mark").textContent = "?";

  displayMessage(" Start guessing...");
  document.querySelector(".numbox").value = "";

  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".que-mark").style.width = "2.5em";
});
