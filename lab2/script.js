// Функция для предупреждения о недоступных разделах
function showUnavailable(sectionName) {
  alert('Раздел "' + sectionName + '" недоступен!');
}

// Обработчик формы поиска (красивое всплывающее сообщение на странице)
document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('searchForm');
  const message = document.getElementById('searchMessage');

  form.addEventListener('submit', function(event) {
    event.preventDefault(); // отменяем стандартную отправку формы
    message.textContent = '🔍 Функция поиска на данный момент недоступна!';
    message.classList.add('show');

    // Убираем сообщение через 3 секунды
    setTimeout(() => {
      message.classList.remove('show');
    }, 3000);
  });
});
