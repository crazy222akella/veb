//ХРАНИЛИЩЕ ДЕЛ
let tasks = {};   // { "2025-02-14": ["Купить хлеб", "Встреча"] }

class Notebook {
    addTask(date, task) {
        if (!tasks[date]) tasks[date] = [];
        tasks[date].push(task);
    }

    getTasks(date) {
        return tasks[date] || [];
    }

    hasTasks(date) {
        return tasks[date] && tasks[date].length > 0;
    }
}

const notebook = new Notebook();

//КАЛЕНДАРЬ 
let currentDate = new Date();
let selectedDate = null;

const monthLabel = document.getElementById("monthLabel");
const monthTable = document.getElementById("monthTable");
const taskList = document.getElementById("taskList");
const selectedDateLabel = document.getElementById("selectedDateLabel");
const taskInput = document.getElementById("taskInput");

// Названия месяцев
const months = [
    "Январь", "Февраль", "Март", "Апрель",
    "Май", "Июнь", "Июль", "Август",
    "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"
];

function buildCalendar() {
    let year = currentDate.getFullYear();
    let month = currentDate.getMonth();

    monthLabel.textContent = `${months[month]} ${year}`;

    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    let startDay = (firstDay === 0 ? 6 : firstDay - 1);

    let tableHTML = "<tr>";
    for (let i = 0; i < startDay; i++) {
        tableHTML += "<td></td>";
    }

    for (let day = 1; day <= daysInMonth; day++) {
        const fullDate = `${year}-${month + 1}-${day}`;

        let classes = "";

        // Выделение сегодняшней даты
        let today = new Date();
        if (
            day === today.getDate() &&
            month === today.getMonth() &&
            year === today.getFullYear()
        ) {
            classes += "today ";
        }

        // Если есть дела — синяя рамка
        if (notebook.hasTasks(fullDate)) {
            classes += "has-tasks ";
        }

        tableHTML += `<td class="${classes}" data-date="${fullDate}">${day}</td>`;

        if ((day + startDay) % 7 === 0) {
            tableHTML += "</tr><tr>";
        }
    }

    tableHTML += "</tr>";

    monthTable.innerHTML = tableHTML;

    // Назначаем обработчики клика по датам
    document.querySelectorAll("td[data-date]").forEach(td => {
        td.onclick = () => selectDate(td.getAttribute("data-date"));
    });
}

function selectDate(dateStr) {
    selectedDate = dateStr;
    selectedDateLabel.textContent = dateStr;

    renderTasks();
}

function renderTasks() {
    taskList.innerHTML = "";

    let list = notebook.getTasks(selectedDate);

    if (list.length === 0) {
        taskList.innerHTML = "<li>Планов нет</li>";
        return;
    }

    list.forEach(task => {
        let li = document.createElement("li");
        li.textContent = task;
        taskList.appendChild(li);
    });
}

//Добавление дела
document.getElementById("addTaskBtn").onclick = () => {
    if (!selectedDate) return alert("Сначала выберите дату!");

    let task = taskInput.value.trim();
    if (task === "") return;

    notebook.addTask(selectedDate, task);
    taskInput.value = "";

    buildCalendar();  // обновить рамки задач
    renderTasks();
};

//Переключение месяцев
document.getElementById("prev").onclick = () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    buildCalendar();
};

document.getElementById("next").onclick = () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    buildCalendar();
};

//Первое построение
buildCalendar();
