let currentMode = "";
let currentSongIndex = 0;
let songs = ["songs/song1.mp3", "songs/song2.mp3", "songs/song3.mp3"];

// Crazy mode games
let games = [
  { id: 1, task: "Solve puzzle: 2 + 2 = ?" , answer: "4" },
  { id: 2, task: "Type the word 'MUSIC'", answer: "MUSIC" },
  { id: 3, task: "Click 5 times on this button!" , clicksRequired: 5 }
];
let completedGames = new Set();

function selectMode(mode) {
  currentMode = mode;
  document.getElementById("task-container").style.display = "none";
  currentSongIndex = 0;
  playSong();
}

function playSong() {
  let player = document.getElementById("music-player");
  player.src = songs[currentSongIndex];
  player.play();
}

// ---------------- Crazy Mode ----------------
function requireGameBeforeSong() {
  if (completedGames.size === games.length) {
    completedGames.clear(); // reset after all games played
  }
  
  let available = games.filter(g => !completedGames.has(g.id));
  let game = available[Math.floor(Math.random() * available.length)];

  document.getElementById("task-container").style.display = "block";
  document.getElementById("task-container").innerHTML = `
    <p>${game.task}</p>
    <input type="text" id="gameAnswer">
    <button onclick="checkGameAnswer('${game.answer}', ${game.id})">Submit</button>
  `;
}

function checkGameAnswer(correct, id) {
  let ans = document.getElementById("gameAnswer").value;
  if (ans === correct) {
    completedGames.add(id);
    document.getElementById("task-container").style.display = "none";
    playSong();
  } else {
    alert("Wrong! Try again. Song will repeat.");
    playSong(); // replay same song
  }
}

// ---------------- Gym Mode ----------------
let gymTasks = {
  chest: ["20 push-ups", "15 bench presses"],
  legs: ["30 squats", "20 lunges"]
};

function chooseWorkout(type) {
  let task = gymTasks[type][Math.floor(Math.random() * gymTasks[type].length)];
  document.getElementById("task-container").style.display = "block";
  document.getElementById("task-container").innerHTML = `
    <p>Your task: ${task}</p>
    <button onclick="completeWorkout()">Done</button>
  `;
}

function completeWorkout() {
  document.getElementById("task-container").style.display = "none";
  playSong();
}

// ---------------- Next Song ----------------
function nextSong() {
  if (currentMode === "crazy") {
    requireGameBeforeSong();
  } else if (currentMode === "gym") {
    // show workout selection
    document.getElementById("task-container").style.display = "block";
    document.getElementById("task-container").innerHTML = `
      <p>Select workout for today:</p>
      <button onclick="chooseWorkout('chest')">Chest</button>
      <button onclick="chooseWorkout('legs')">Legs</button>
    `;
  } else {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    playSong();
  }
}
