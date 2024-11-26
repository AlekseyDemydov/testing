let totalSeconds = 90; // 1 хвилина 30 секунд

// Функція для форматування часу у вигляді хвилин і секунд
function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
}

// Функція для оновлення таймера
function updateTimer() {
  const timerElement = document.getElementById('countdown-timer');
  timerElement.textContent = formatTime(totalSeconds);

  if (totalSeconds > 0) {
    totalSeconds--;
  } else {
    // Після завершення знову починаємо з 1 хвилини 30 секунд
    totalSeconds = 90;

    // Перемикаємо хедери та футери
    toggleHeadersFooters();
  }
}

// Функція для перемикання видимості хедерів і футерів
function toggleHeadersFooters() {
  const headerFirst = document.getElementById('headerfirst');
  const headerSecond = document.getElementById('headersecond');
  const footerFirst = document.getElementById('footerfirst');
  const footerSecond = document.getElementById('footersecond');

  // Змінюємо видимість для хедерів і футерів
  if (headerFirst.style.display === 'none') {
    headerFirst.style.display = 'block';
    headerSecond.style.display = 'none';
    footerFirst.style.display = 'block';
    footerSecond.style.display = 'none';
  } else {
    headerFirst.style.display = 'none';
    headerSecond.style.display = 'block';
    footerFirst.style.display = 'none';
    footerSecond.style.display = 'block';
  }
}

// Оновлюємо таймер кожну секунду
setInterval(updateTimer, 1000);

// Початковий виклик для відображення початкового часу
updateTimer();