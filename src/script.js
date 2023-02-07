const $checkInput = document.querySelector('.check__input');
const $scoreTitle = document.querySelector('.score__title');

const displayMessage = (message) => {
  $scoreTitle.textContent = message;
};

// 정답 숫자 생성
const $number = document.querySelector('.header__number');
let correctNumber = Math.floor(Math.random() * 99) + 1;

// 정답 판별
const $count = document.querySelector('.count');
const $highscore = document.querySelector('.highscore');
let score = 20;
let highscore = 0;
const checkAnswer = (value) => {
  if (!value) {
    // 입력하지 않을 때
    displayMessage('🚫 숫자를 입력해주세요');
  } else if (value === correctNumber) {
    // 정답일 때
    $number.textContent = correctNumber;
    displayMessage('🎉 정답입니다!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    if (score > highscore) {
      highscore = score;
      $highscore.textContent = highscore;
    }
  } else if (value !== correctNumber) {
    // 정답이 아닐 때
    displayMessage(
      value > correctNumber ? '📈 정답보다 높습니다!' : '📉 정답보다 낮습니다!',
    );
    score--;
    $count.textContent = score;
  }
};

const $checkForm = document.querySelector('.check__form');
$checkForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const guess = +$checkInput.value;
  $checkInput.value = '';
  checkAnswer(guess);
  if (score < 1) {
    displayMessage('😭 졌습니다');
    $count.textContent = 0;
  }
});

document.querySelector('.btn__again').addEventListener('click', () => {
  score = 20;
  correctNumber = Math.floor(Math.random() * 99) + 1;
  document.querySelector('body').style.backgroundColor = '#222';
  displayMessage('Start guessing...');
  $count.textContent = score;
  $number.textContent = '?';
});
