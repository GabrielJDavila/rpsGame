let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('comp-score');
const scoreBoard_div = document.querySelector('.scoreboard');
const result_div = document.querySelector('.result');
const choices_div = document.querySelector('.choices');
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');
const restart_div = document.querySelector('.restart');
const action_msg = document.getElementById('action-message');

function getComputerChoice() {
  const choices = ['r', 'p', 's'];
  const randomNumber = (Math.floor(Math.random() * 3));
  return choices[randomNumber];
}

function convertToWord(letter) {
  if (letter === "r") return "Rock";
  if (letter === "p") return "Paper";
  if (letter === "s") return "Scissors";
}

function win(userChoice, computerChoice) {
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  const userChoice_div = document.getElementById(userChoice);
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_div.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(computerChoice)}${smallCompWord}. You win!`;
  userChoice_div.classList.add('greenglow');
  setTimeout(() => userChoice_div.classList.remove('greenglow'), 1000);
}

function lose(userChoice, computerChoice) {
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  const userChoice_div = document.getElementById(userChoice);
  computerScore++;
  computerScore_span.innerHTML = computerScore;
  userScore_span.innerHTML = userScore;
  result_div.innerHTML = `${convertToWord(computerChoice)}${smallCompWord} beats ${convertToWord(userChoice)}${smallUserWord}. You lose!`;
  userChoice_div.classList.add('redglow');
  setTimeout(() => userChoice_div.classList.remove('redglow'), 1000);
}

function tie(userChoice, computerChoice) {
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  const userChoice_div = document.getElementById(userChoice);
  result_div.innerHTML = `${convertToWord(computerChoice)}${smallCompWord} equals ${convertToWord(userChoice)}${smallUserWord}. Tie game!`;
  userChoice_div.classList.add('greyglow');
  setTimeout(() => userChoice_div.classList.remove('greyglow'), 1000);
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case 'rs':
    case 'pr':
    case 'sp':
      win(userChoice, computerChoice);
      break;
    case 'rp':
    case 'ps':
    case 'sr':
      lose(userChoice, computerChoice);
      break;
    case 'rr':
    case 'pp':
    case 'ss':
      tie(userChoice, computerChoice);
  } if (userScore > 4) {
    result_div.innerHTML = 'You won! The Mulitverse is saved!';
    choices_div.style.display = "none";
    action_msg.style.display = "none";
    restart_div.style.display = "block";
    restart_div.style.textAlign = "center";
    restart_div.addEventListener('click',() => {
      window.location.reload();
    })

  } else if (computerScore > 4) {
    result_div.innerHTML = 'Oh no, you lost! The Mulitverse is doomed!';
    choices_div.style.display = "none";
    action_msg.style.display = "none";
    restart_div.style.display = "inline";
    restart_div.style.textAlign = "center";
    restart_div.addEventListener('click',() => {
      window.location.reload();
    })
  }
}

function main() {
  rock_div.addEventListener('click', () => game('r'));

  paper_div.addEventListener('click', () => game('p'));

  scissors_div.addEventListener('click', () => game('s'));
}

main();
