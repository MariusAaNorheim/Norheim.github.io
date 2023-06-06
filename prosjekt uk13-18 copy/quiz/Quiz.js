

 // Sjekk om local storage støttes
 function isLocalStorageSupported() {
  try {
    localStorage.setItem('test', 'test');
    localStorage.removeItem('test');
    return true;
  } catch (e) {
    return false;
  }
}


// Oppdater og vis poenglisten
function updateScoreboard() {
  if (isLocalStorageSupported()) {
    // Hent eksisterende poengliste fra local storage
    var scoreboard = localStorage.getItem('scoreboard');

    // Oppdater og sorter poenglisten
    var scoreList = scoreboard ? JSON.parse(scoreboard) : [];
    scoreList.sort(function(a, b) {
      return b.score - a.score;
    });

    // Vis poenglisten på nettsiden
    var scoreboardElement = document.getElementById('scoreboard');
    scoreboardElement.innerHTML = '';
    for (var i = 0; i < scoreList.length; i++) {
      var entry = scoreList[i];
      var listItem = document.createElement('li');
      listItem.textContent = entry.name + ': ' + entry.score + ' poeng';
      scoreboardElement.appendChild(listItem);
    }
  }
}

// Lagre poeng i local storage
function saveScore(name, score) {
  if (isLocalStorageSupported()) {
    // Hent eksisterende poengliste fra local storage
    var scoreboard = localStorage.getItem('scoreboard');
    var scoreList = scoreboard ? JSON.parse(scoreboard) : [];

    // Legg til det nye poenget i listen
    scoreList.push({ name: name, score: score });

    // Lagre den oppdaterte poenglisten i local storage
    localStorage.setItem('scoreboard', JSON.stringify(scoreList));

    // Oppdater poenglisten på nettsiden
    updateScoreboard();
  }
}

// Start quiz
function startQuiz() {
  var questions = [
    { question: 'Hva er hovedstaden i Norge?', answer: 'Oslo' },
    { question: 'Hva er hovedstaden i Sverige?', answer: 'Stockholm' },
    { question: 'Hva er hovedstaden i Danmark?', answer: 'København' },
    { question: 'Hva er hovedstaden i Storbritannia?', answer: 'London' },
    { question: 'Hva er hovedstaden i Frankrike?', answer: 'Paris' },
    { question: 'Hva er hovedstaden i Spania?', answer: 'Madrid' },
    { question: 'Hva er hovedstaden i Tyskland?', answer: 'Berlin' },
    { question: 'Hva er hovedstaden i Italia?', answer: 'Roma' },
    { question: 'Hva er hovedstaden i Hellas?', answer: 'Athen' },
    { question: 'Hva er hovedstaden i Romania?', answer: 'Bucuresti' },
    { question: 'Hva er hovedstaden i Slovenia?', answer: 'Ljubljana' },
    { question: 'Hva er hovedstaden i Slovakia?', answer: 'Bratislava' },
  ];

  var score = 0;

  for (var i = 0; i < questions.length; i++) {
    var answer = prompt(questions[i].question);

    if (answer && answer.toLowerCase() === questions[i].answer.toLowerCase()) {
      score++;
    }
  }

  var playerName = prompt('Din poengsum: ' + score + ' poeng. Skriv inn navnet ditt for å lagre poengene dine.');

  if (playerName) {
    saveScore(playerName, score);
  }
}