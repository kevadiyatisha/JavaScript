const prevButton = document.getElementById("prev-week");
const nextButton = document.getElementById("next-week");
const monthYearDisplay = document.getElementById("month-year");
const days = document.querySelectorAll(".day");

// Set the initial date to the current date
let currentDate = new Date();
let today = new Date(); // Keeps track of today's date for highlighting

function updateCalendar() {
  const monthYear = currentDate.toLocaleString("default", {
    month: "long",
    year: "numeric",
  });
  monthYearDisplay.textContent = monthYear;

  const startOfWeek = new Date(currentDate);
  startOfWeek.setDate(currentDate.getDate() - currentDate.getDay());

  days.forEach((day, index) => {
    const dayDate = new Date(startOfWeek);
    dayDate.setDate(startOfWeek.getDate() + index);

    const dayName = dayDate.toLocaleString("default", { weekday: "short" });
    const dayNumber = dayDate.getDate();

    const isToday = dayDate.toDateString() === today.toDateString(); // Check if the day is today

    const dayNameElement = day.querySelector(".day-name");
    const dayNumberElement = day.querySelector(".day-number");

    dayNameElement.textContent = dayName[0]; // First letter of day name
    dayNumberElement.textContent = dayNumber;
    day.dataset.day = dayNumber;

    // Highlight today's date
    if (isToday) {
      dayNameElement.classList.add("highlight");
      dayNumberElement.classList.add("highlight");
    } else {
      dayNameElement.classList.remove("highlight");
      dayNumberElement.classList.remove("highlight");
    }
  });
}

prevButton.addEventListener("click", () => {
  currentDate.setDate(currentDate.getDate() - 7);
  updateCalendar();
});

nextButton.addEventListener("click", () => {
  currentDate.setDate(currentDate.getDate() + 7);
  updateCalendar();
});

days.forEach((day) => {
  day.addEventListener("click", () => {
    alert(`You clicked on ${day.dataset.day}`);
  });
});

// Initialize calendar with the current date
updateCalendar();
