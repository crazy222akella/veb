// 1. выделение раздела документа
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        // e.preventDefault(); // Allow scrolling
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            document.querySelectorAll('section').forEach(sec => sec.classList.remove('highlighted'));
            targetSection.classList.add('highlighted');
        }
    });
});

//подсветка столбцов
let currentColumn = null;
document.querySelectorAll('table thead th').forEach((th, index) => {
    th.addEventListener('click', function() {
        if (currentColumn === index) {
            // Toggle off
            document.querySelectorAll(`table tbody td:nth-child(${index + 1})`).forEach(td => td.classList.remove('shadow-highlight'));
            currentColumn = null;
        } else {
            // Remove previous
            if (currentColumn !== null) {
                document.querySelectorAll(`table tbody td:nth-child(${currentColumn + 1})`).forEach(td => td.classList.remove('shadow-highlight'));
            }
            // Add new
            document.querySelectorAll(`table tbody td:nth-child(${index + 1})`).forEach(td => td.classList.add('shadow-highlight'));
            currentColumn = index;
        }
    });
});

//отображению соответствующего содержимого aside
document.querySelectorAll('aside').forEach(aside => {
    aside.addEventListener('click', function() {
        alert(this.textContent.trim());
    });
});

// 4. Form handling
const form = document.getElementById('surveyForm');
const fields = form.querySelectorAll('input, textarea');
const resetButton = document.getElementById('resetButton');

// сброс формы - обработчик на кнопке reset
resetButton.addEventListener('click', function(e) {
    e.preventDefault(); // предотвращаем стандартный сброс
    
    if (confirm('Подтвердить сброс?')) {
        // закрашиваем красным
        fields.forEach(field => {
            field.style.backgroundColor = 'red';
            setTimeout(() => field.style.backgroundColor = '', 1000);
        });
        
        // Сбрасываем форму
        form.reset();
    } else {
        // закрашиваем зеленым
        fields.forEach(field => {
            field.style.backgroundColor = 'green';
            setTimeout(() => field.style.backgroundColor = '', 1000);
        });
    }
});

// отправка формы
form.addEventListener('submit', function(e) {
    e.preventDefault(); // раскомментировал, чтобы форма не отправлялась по-настоящему
    fields.forEach(field => {
        field.style.backgroundColor = 'blue';
        setTimeout(() => field.style.backgroundColor = '', 1000);
    });
    setTimeout(() => alert('Данные отправлены'), 1000);
});