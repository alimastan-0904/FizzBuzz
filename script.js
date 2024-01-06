let score = 0;

begin();

function begin() {
  let start = prompt(
    'Are you ready to start playing "FizzBuzz" or would you like to see the rules. Type "Start" or "Rules".'
  );

  if (typeof start == "string") {
    start = start.toLowerCase();
  }

  function rules() {
    alert("The computer will start the game by saying a number.");
    alert("When it's your turn, type in the next number in the sequence.");
    alert(
      'If the next number in the sequence is a multiple of 3, type in "Fizz".'
    );
    alert(
      'If the next number in the sequence is a multiple of 5, type in "Buzz".'
    );
    alert(
      'If the next number in the sequence is a multiple of 3 AND 5, type in "FizzBuzz".'
    );
    alert("If you don't type in the correct answer the game is over.");
  }

  while (
    start == "" ||
    (start != "rules" && start != "start" && start != null)
  ) {
    start = prompt(
      'Are you ready to start playing "FizzBuzz" or would you like to see the rules. Type "Start" or "Rules"'
    );
    if (typeof start == "string") {
      start = start.toLowerCase();
    }
    while (start == "rules") {
      rules();
      start = prompt(
        'Are you ready to start playing "FizzBuzz" or would you like to see the rules. Type "Start" or "Rules"'
      );
      if (typeof start == "string") {
        start = start.toLowerCase();
      }
    }
  }

  while (start == "rules") {
    rules();
    start = prompt(
      'Are you ready to start playing "FizzBuzz" or would you like to see the rules. Type "Start" or "Rules"'
    );
    if (typeof start == "string") {
      start = start.toLowerCase();
    }
    while (
      start == "" ||
      (start != "rules" && start != "start" && start != null)
    ) {
      start = prompt(
        'Are you ready to start playing "FizzBuzz" or would you like to see the rules. Type "Start" or "Rules"'
      );
      if (typeof start == "string") {
        start = start.toLowerCase();
      }
    }
  }

  if (start == "start") {
    startGame();
  }

  if (start == null) {
    alert("You pressed cancel. You lose.");
    endGame();
  }
}

function startGame() {
  let difficulty = prompt(
    'What number would you like to play "FizzBuzz" up to?'
  );

  while (difficulty == "" || isNaN(difficulty)) {
    difficulty = prompt('What number would you like to play "FizzBuzz" up to?');
  }

  if (difficulty == null) {
    alert("You pressed cancel. You lose.");
    endGame();
  }

  let goFirst;
  if (difficulty != null) {
    goFirst = prompt(
      'Would you like to go first or after the computer. Type in "First" or "Second"'
    );

    if (typeof goFirst == "string") {
      goFirst = goFirst.toLowerCase();
    }
    while (
      goFirst == "" ||
      (goFirst != "first" && goFirst != "second" && goFirst != null)
    ) {
      goFirst = prompt(
        'Would you like to go first or after the computer. Type in "First" or "Second"'
      );
      if (typeof goFirst == "string") {
        goFirst = goFirst.toLowerCase();
      }
    }

    if (goFirst == null) {
      alert("You pressed cancel. You lose.");
      endGame();
    }
  }

  if (difficulty != null && goFirst != null) {
    for (let i = 1; i <= difficulty; i++) {
      if (goFirst == "first") {
        playerFirst(i);
      } else if (goFirst == "second") {
        compFirst(i);
      }
    }
    endGame();
  }
}

function playerChoice(i) {
  let answer = prompt("Enter your answer:");
  if (typeof answer == "string") {
    answer = answer.toLowerCase();
  }
  if (i % 3 == 0 && answer == "fizz") {
    alert("Correct");
    score = score + 1;
  } else if (i % 5 == 0 && answer == "buzz") {
    alert("Correct");
    score = score + 1;
  } else if (i % 3 == 0 && i % 5 == 0 && answer == "fizzbuzz") {
    alert("Correct");
    score = score + 1;
  } else if (!(i % 5 == 0) && !(i % 3 == 0) && answer == i) {
    alert("Correct");
    score = score + 1;
  } else if (answer == null) {
    alert("You pressed cancel. You lose. Goodbye.");
    endGame();
  } else {
    alert("Wrong");
  }
}

function compChoice(i) {
  if (i % 3 == 0 && i % 5 == 0) {
    alert("FizzBuzz");
  } else if (i % 3 == 0) {
    alert("Fizz");
  } else if (i % 5 == 0) {
    alert("Buzz");
  } else {
    alert(i);
  }
}

function endGame() {
  alert(`You scored ${score} point(s).`);

  score = 0;
  let playAgain = prompt("Do you wish to play again? Type 'Yes' or 'No'.");

  if (typeof playAgain == "string") {
    playAgain = playAgain.toLowerCase();
  }

  while (
    playAgain == "" ||
    (playAgain != "no" && playAgain != "yes" && playAgain != null)
  ) {
    playAgain = prompt("Do you wish to play again? Type 'Yes' or 'No'.");
    if (typeof playAgain == "string") {
      playAgain = playAgain.toLowerCase();
    }
  }

  if (playAgain == "yes") {
    begin();
  } else if (playAgain == "no" || playAgain == null) {
    alert("Goodbye then mate");
  }
}

function playerFirst(i) {
  if (i % 2 == 1) {
    playerChoice(i);
  } else if (i % 2 == 0) {
    compChoice(i);
  }
}

function compFirst(i) {
  if (i % 2 == 1) {
    compChoice(i);
  } else if (i % 2 == 0) {
    playerChoice(i);
  }
}
