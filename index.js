var numReminders = 0

setInterval(setDateTime(), 100)
setInterval(checkReminderTime(), 100)

//createNotification("Save The World", "5", "55", "PM", "12", "22", "05")


function setDateTime() {
    const date = new Date()
    document.getElementById("date").innerHTML = date.getMonth() + "/" + date.getDate() + "/" + date.getFullYear()%2000
    const meridiem = (date.getHours() < 12) ? "AM" : "PM"
    const min = (date.getMinutes() < 10) ? "0" : ""
    let hour = (date.getHours())%12
    if (hour == 0) {
        hour = 12
    }
    document.getElementById("time").innerHTML = hour + ":" + min + date.getMinutes() + " " + meridiem
}

function setNotificationStatus(circleId, innerCircleId, titleId, timeId, remainingId) {
    const outerCircle = document.getElementById(circleId)
    const innerCircle = document.getElementById(innerCircleId)
    const title = document.getElementById(titleId)
    const time = document.getElementById(timeId)
    const remaining = document.getElementById(remainingId)

    const currentBorder = window.getComputedStyle(outerCircle).border
    

    if (currentBorder === "1px solid rgb(0, 122, 255)") {
        outerCircle.style.border = "1px solid rgba(60, 50, 50, 1)"
        innerCircle.style.backgroundColor = "transparent"
        title.style.color = "white"
        remaining.style.color = "white"
    } else {
        outerCircle.style.border = "1px solid rgb(0, 122, 255)"
        innerCircle.style.backgroundColor = "rgb(0, 122, 255)"
        title.style.color = "rgba(103,103,103)"
        remaining.style.color = "rgba(103,103,103)"
    }
}

function switchMeridiem() {
    const meridiem = document.getElementById("meridiem-text")

    meridiem.innerHTML = (meridiem.innerHTML.trim() === "AM") ? "PM" : "AM"
}

function addReminder() {
    const form = document.getElementById("new-reminder")
    form.style.display = "flex"
    const addBtn = document.getElementById("addBtn")
    addBtn.style.display = "none"
    const addText = document.getElementById("addText")
    addText.style.display = "none"

    const cancel = document.getElementById("cancelBtn")
    cancelBtn.style.display = "block"
}

function cancelReminder() {
    const form = document.getElementById("new-reminder")
    form.style.display = "none"

    const addBtn = document.getElementById("addBtn")
    addBtn.style.display = "flex"
    const addText = document.getElementById("addText")
    addText.style.display = "block"

    const cancel = document.getElementById("cancelBtn")
    cancelBtn.style.display = "none"
}

                /*<div class="notification-container">
                    <div class="reminder-left">
                        <div onclick = "setNotificationStatus()" class="reminder-circle" id="circle">
                            <div id="innerCircle" class="inner-circle"></div>
                        </div>
                        
                        <div class="reminder-text">
                            <h2 id="reminder-title">XXX</h2>
                            <h3 id="reminder-time">12/22/05, x:xx</h3xs>
                        </div>
                    </div>
                    
                    <div class="reminder-right">
                        <h2 id="reminder-remaining">xxx</h2>
                    </div>   
                </div>*/

function createNotification(event, hour, minute, meridiem, month, day, year) {
    const containerElem = document.getElementById('remindersContainer')

    const notiContainerElem = createElement('div')
    addClassToElement(notiContainerElem, 'notification-container')
    addIdToElement(notiContainerElem, 'noti-container-'+numReminders)
    const notiLeftElem = createElement('div')
    addClassToElement(notiLeftElem, 'reminder-left')

    const notiCircleElem = createElement('div')
    addClassToElement(notiCircleElem, 'reminder-circle')
    addIdToElement(notiCircleElem, 'reminder-circle-'+numReminders)
    addAttributeToElement(notiCircleElem, "onclick", "setNotificationStatus('"+'circle-'+numReminders + "','"+'innerCircle-'+numReminders+"','"+'reminder-title-'+numReminders+"','"+'reminder-time-'+numReminders+"','"+'reminder-remaining-'+numReminders+"')")
    addIdToElement(notiCircleElem, 'circle-'+numReminders) 
    const notiInnerCircleElem = createElement('div')
    addClassToElement(notiInnerCircleElem, 'inner-circle')
    addIdToElement(notiInnerCircleElem, 'innerCircle-' + numReminders)

    const notiTextElem = createElement('div')
    addClassToElement(notiTextElem, 'reminder-text')
    const notiTitleElem = createElement('h2')
    notiTitleElem.innerHTML = event
    addIdToElement(notiTitleElem, 'reminder-title-'+numReminders)
    const notiTimeElem = createElement('h3')
    addClassToElement(notiTimeElem, 'reminder-time-black')
    notiTimeElem.innerHTML = month + '/' + day + '/' + year + ', ' + hour + ':' + minute + meridiem;
    addIdToElement(notiTimeElem, 'reminder-time-' + numReminders)

    const notiRightElem = createElement('div')
    addClassToElement(notiRightElem, 'reminder-right')
    const notiTimeRemainingElem = createElement('h2')
    addIdToElement(notiTimeRemainingElem, 'reminder-remaining-' + numReminders)

    addChildElement(notiContainerElem, notiLeftElem)
    addChildElement(notiContainerElem, notiRightElem)

    addChildElement(notiLeftElem, notiCircleElem)
    addChildElement(notiLeftElem, notiTextElem)
    
    addChildElement(notiRightElem, notiTimeRemainingElem)

    addChildElement(notiCircleElem, notiInnerCircleElem)

    addChildElement(notiTextElem, notiTitleElem)
    addChildElement(notiTextElem, notiTimeElem)

    addChildElement(containerElem, notiContainerElem)

    numReminders++;
}

function createElement (elemType) {
    return document.createElement(elemType)
}

function addClassToElement(elem, className) {
    elem.classList.add(className)
}

function addIdToElement(elem, id) {
    elem.id = id;
}

function addChildElement(parentElem, childElem) {
    parentElem.appendChild(childElem)
}

function addAttributeToElement(elem, attribute, ability ) {
    elem.setAttribute(attribute, ability)
}

function saveChanges() {
    const newReminder = document.getElementById('new-reminder')
    const displayStyle = window.getComputedStyle(newReminder).display;

    if (displayStyle !== 'none') {
        const inputEvent = document.getElementById('new-reminder-event')
        const event = inputEvent.value

        const inputMonth = document.getElementById('new-reminder-month')
        const month = inputMonth.value
        if (!isMonth(month)) {
            errorSaving(1)
            return;
        }

        const inputDay = document.getElementById('new-reminder-day')
        const day = inputDay.value
        if (!isDay(day)) {
            errorSaving(1)
            return;
        }

        const inputYear = document.getElementById('new-reminder-year')
        const year = inputYear.value
        if (!isYear(year)) {
            errorSaving(1)
            return;
        }
        

        const inputHour = document.getElementById('new-reminder-hour')
        const hour = inputHour.value
        if (!isHour(hour)) {
            errorSaving(2)
            return;
        }

        const inputMinute = document.getElementById('new-reminder-minute')
        const minute = inputMinute.value
        if (!isMinute(minute)) { 
            errorSaving(2)
            return;
        }

        const inputMeridiem = document.getElementById('meridiem-text')
        meridiem = inputMeridiem.textContent
        inputMeridiem.value = 'AM'

        createNotification(event, hour, minute, meridiem, month, day, year)

        inputEvent.value = ''
        inputMonth.value = ''
        inputDay.value = ''
        inputYear.value = ''
        inputHour.value = ''
        inputMinute.value = ''
        inputMeridiem.value = 'AM'

        newReminder.style.display = 'none'
    }

    for (let i = 0; i < numReminders; i++) {
        const outerCircle = document.getElementById('circle-'+i)
        const borderColor = window.getComputedStyle(outerCircle).border
        if (borderColor === "1px solid rgb(0, 122, 255)") {
            const noti = document.getElementById('noti-container-'+i)
            noti.style.display = 'none'
        }
    }
}

                        /*<div class="reminder-text">
                            <input id="new-reminder-event" class="event-input">
                            <div class="new-time-date">
                                <input id="new-reminder-month" class="input-field">
                                <h3 id="new-reminder-date">/</h2>
                                <input id="new-reminder-day" class="input-field">
                                <h3 id="new-reminder-date">/</h2>
                                <input id="new-reminder-year" class="input-field">

                                <h3>, </h3>

                                <input id="new-reminder-hour" class="input-field">
                                <h3 id="new-reminder-time">:</h3>
                                <input id="new-reminder-minute" class="input-field">

                                <button onclick="switchMeridiem()" class="meridiem-btn">
                                    <h3 id="meridiem-text">AM</h3>
                                </button>
                            </div>  
                        </div>*/
function errorSaving(error) {
    const inputEvent = document.getElementById('new-reminder-event')
    if (error === 1) {
        inputEvent.value = 'DATE ERROR'
    }
    if (error === 2) {
        inputEvent.value = 'TIME ERROR'
    }
    
}

function isDay(day) {
    if (day > 0 && day <= 31) {
        return true 
    }

    return false
}
function isMonth(month) {
    if (month > 0 && month <= 12) {
        return true
    }

    return false
}
function isYear(year) {
    if (year > 0 && year < 100) {
        return true
    }

    return false
}
function isHour(hour) {
    if (hour > 0 && hour <= 12) {
        return true
    }

    return false
}

function isMinute(minute) {
    if (minute >= 0 && minute < 60) {
        return true
    }

    return false
}

function lateEvent(currentHour, currentMinute, currentMeridiem, reminderHour, reminderMinute, reminderMeridiem) {

}