const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

let currentDate = new Date();
let currentView = "week"; // Default view is month

function renderCalendar() {
  const calendarContent = document.getElementById("calendarContent");
  const monthYear = document.getElementById("monthYear");

  // Update the header with the current month and year
  monthYear.textContent = `${
    monthNames[currentDate.getMonth()]
  } ${currentDate.getFullYear()}`;

  // Clear previous calendar content
  calendarContent.innerHTML = "";

  if (currentView === "month") {
    renderMonthView(calendarContent);
  } else if (currentView === "week") {
    renderWeekView(calendarContent);
  }
}

function renderMonthView(container) {
  const firstDayOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  );
  const lastDayOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  );
  const firstDay = firstDayOfMonth.getDay();
  const totalDays = lastDayOfMonth.getDate();

  const weekdays = document.createElement("div");
  weekdays.classList.add("weekdays");
  ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].forEach((day) => {
    const dayElement = document.createElement("div");
    dayElement.textContent = day;
    weekdays.appendChild(dayElement);
  });
  container.appendChild(weekdays);

  const daysContainer = document.createElement("div");
  daysContainer.classList.add("days");

  // Add empty cells for the days before the 1st of the month
  for (let i = 0; i < firstDay; i++) {
    const emptyCell = document.createElement("div");
    emptyCell.classList.add("empty");
    daysContainer.appendChild(emptyCell);
  }

  // Loop through all the days of the month
  for (let day = 1; day <= totalDays; day++) {
    const dayCell = document.createElement("div");
    dayCell.classList.add("day");
    dayCell.textContent = day;

    // Check if the current day is the same as today and add the 'active' class
    if (
      day === currentDate.getDate() &&
      currentDate.getMonth() === new Date().getMonth()
    ) {
      dayCell.classList.add("active");
    }

    // Add a click event for each day
    dayCell.addEventListener("click", () =>
      alert(
        `You clicked on ${
          monthNames[currentDate.getMonth()]
        } ${day}, ${currentDate.getFullYear()}`
      )
    );

    daysContainer.appendChild(dayCell);
  }

  container.appendChild(daysContainer);
}

function renderWeekView(container) {
  const firstDayOfWeek = new Date(currentDate);
  const currentDay = currentDate.getDay();
  const diff = currentDay === 0 ? -6 : 1 - currentDay; // Adjust to the previous Sunday
  firstDayOfWeek.setDate(currentDate.getDate() + diff);

  const weekdays = document.createElement("div");
  weekdays.classList.add("weekdays");
  ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].forEach((day) => {
    const dayElement = document.createElement("div");
    dayElement.textContent = day;
    weekdays.appendChild(dayElement);
  });
  container.appendChild(weekdays);

  const weekDays = document.createElement("div");
  weekDays.classList.add("week");

  for (let i = 0; i < 7; i++) {
    const dayCell = document.createElement("div");
    dayCell.classList.add("day");
    const currentDayOfWeek = new Date(firstDayOfWeek);
    currentDayOfWeek.setDate(firstDayOfWeek.getDate() + i);
    dayCell.textContent = currentDayOfWeek.getDate();
    dayCell.addEventListener("click", () =>
      alert(
        `You clicked on ${
          monthNames[currentDayOfWeek.getMonth()]
        } ${currentDayOfWeek.getDate()}, ${currentDayOfWeek.getFullYear()}`
      )
    );
    if (currentDayOfWeek.toDateString() === currentDate.toDateString()) {
      dayCell.classList.add("active");
    }
    weekDays.appendChild(dayCell);
  }

  container.appendChild(weekDays);
}

function changeMonth(direction) {
  if (currentView === "month") {
    currentDate.setMonth(currentDate.getMonth() + direction);
  } else if (currentView === "week") {
    currentDate.setDate(currentDate.getDate() + 7 * direction);
  }
  renderCalendar();
}

function changeCalendarView() {
  currentView = document.getElementById("calendarType").value;
  renderCalendar();
}

// Initial render
renderCalendar();
