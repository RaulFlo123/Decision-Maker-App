let selectedMood = null;

// Load JSON data
let data = {};

fetch("data.json")
  .then(response => response.json())
  .then(json => {
    data = json;
  });

function setMood(mood) {
  selectedMood = mood;
}

function getIdea(mood) {
  const list = data[mood];
  const randomIndex = Math.floor(Math.random() * list.length);
  return list[randomIndex];
}

function decide() {
  if (!selectedMood) {
    alert("Pick a mood first");
    return;
  }

  const result = getIdea(selectedMood);

  document.getElementById("result-text").innerText =
    result.activity + " - " + result.description;

  const img = document.getElementById("image");
  img.src = result.image;
  img.style.display = "block";
}
