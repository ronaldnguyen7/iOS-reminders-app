setInterval(setDateTime, 1000);
setDateTime();

var numReminders = 0;

function setDateTime() {
    const date = new Date();
    document.getElementById("date").innerHTML = date.getMonth() + "/" + date.getDate() + "/" + date.getFullYear()%2000;
    const time = (date.getHours%12 == 1) ? "AM" : "PM";
    const min = (date.getMinutes() < 10) ? "0" : "";
    document.getElementById("time").innerHTML = date.getHours()%12 + ":" + min + date.getMinutes() + " " + time;
}

function setNotificationStatus() {
    const outerCircle = document.getElementById("circle");
    const innerCircle = document.getElementById("innerCircle");
    const title = document.getElementById("reminder-title");
    const time = document.getElementById("reminder-time");
    const remaining = document.getElementById("reminder-remaining");

    const currentBorder = window.getComputedStyle(outerCircle).border;

    if (currentBorder === "1px solid rgb(255, 165, 0)") {
        outerCircle.style.border = "solid 1px rgba(60, 50, 50, 1)";
        innerCircle.style.backgroundColor = "transparent";
        title.style.color = "white";
        remaining.style.color = "white";
    } else {
        outerCircle.style.border = "solid 1px orange";
        innerCircle.style.backgroundColor = "orange";
        title.style.color = "rgba(103,103,103)";
        remaining.style.color = "rgba(103,103,103)";
    }
}

function switchMeridiem() {
    const meridiem = document.getElementById("meridiem-text");

    meridiem.innerHTML = (meridiem.innerHTML.trim() === "AM") ? "PM" : "AM";
}

function addReminder() {
    const form = document.getElementById("new-reminder");
    form.style.display = "flex";
}

function createReminder(event, month, day, year, hour, minute, meridiem) {
    
}