let appData = {};
let selectedMood = "";

fetch("decisions.json")
  .then(res => res.json())
  .then(data => {
    appData = data;
    console.log("Loaded:", appData);
  });

function setMood(mood) {
  selectedMood = mood;

  document.getElementById("selectedMoodText").textContent =
    "Selected: " + mood;

  const buttons = document.querySelectorAll(".mood-btn");

  buttons.forEach(btn => {
    btn.classList.remove("active");

    if (btn.textContent.toLowerCase() === mood) {
      btn.classList.add("active");
    }
  });
}

function decide() {
  if (!selectedMood) {
    alert("Pick a mood first");
    return;
  }

  const choices = appData[selectedMood];

  const randomIndex = Math.floor(Math.random() * choices.length);
  const choice = choices[randomIndex];

  document.getElementById("resultTitle").textContent = choice.activity;
  document.getElementById("resultDescription").textContent = choice.description;

  const img = document.getElementById("resultImage");
  img.src = choice.image;
  img.style.display = "block";
}

/*
Random logic based on:
MDN Web Docs - Math.random()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
*/