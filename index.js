setInterval(setDateTime, 1000)
setDateTime()

createNotification("KILL ALL MEN","x", "x", "x", "x", "x")

var numReminders = 0

function setDateTime() {
    const date = new Date()
    document.getElementById("date").innerHTML = date.getMonth() + "/" + date.getDate() + "/" + date.getFullYear()%2000
    const time = (date.getHours < 12) ? "AM" : "PM"
    const min = (date.getMinutes() < 10) ? "0" : ""
    document.getElementById("time").innerHTML = date.getHours()%12 + ":" + min + date.getMinutes() + " " + time
}

function setNotificationStatus() {
    const outerCircle = document.getElementById("circle")
    const innerCircle = document.getElementById("innerCircle")
    const title = document.getElementById("reminder-title")
    const time = document.getElementById("reminder-time")
    const remaining = document.getElementById("reminder-remaining")

    const currentBorder = window.getComputedStyle(outerCircle).border

    if (currentBorder === "1px solid rgb(255, 165, 0)") {
        outerCircle.style.border = "solid 1px rgba(60, 50, 50, 1)"
        innerCircle.style.backgroundColor = "transparent"
        title.style.color = "white"
        remaining.style.color = "white"
    } else {
        outerCircle.style.border = "solid 1px orange"
        innerCircle.style.backgroundColor = "orange"
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

function createNotification(event, hour, minute, month, day, year) {
    numReminders++;

    const containerElem = document.getElementById('remindersContainer')

    const notiContainerElem = createElement('div')
    addClassToElement(notiContainerElem, 'notification-container')
    const notiLeftElem = createElement('div')
    addClassToElement(notiLeftElem, 'reminder-left')

    const notiCircleElem = createElement('div')
    addClassToElement(notiCircleElem, 'reminder-circle')
    addAttributeToElement(notiCircleElem, "onclick", "setNotificationStatus()")
    addIdToElement(notiCircleElem, 'circle' + numReminders) 
    const notiInnerCircleElem = createElement('div')
    addClassToElement(notiInnerCircleElem, 'inner-circle')
    addIdToElement(notiInnerCircleElem, 'innerCircle' + numReminders)

    const notiTextElem = createElement('div')
    addClassToElement(notiTextElem, 'reminder-text')
    const notiTitleElem = createElement('h2')
    notiTitleElem.innerHTML = event
    addIdToElement(notiTitleElem, 'reminder-title' + numReminders)
    const notiTimeElem = createElement('h3')
    notiTimeElem.innerHTML = month + '/' + day + '/' + year + ', ' + hour + ':' + minute;
    addIdToElement(notiTimeElem, 'reminder-time' + numReminders)

    const notiRightElem = createElement('div')
    addClassToElement(notiRightElem, 'reminder-right')
    const notiTimeRemainingElem = createElement('h2')
    addIdToElement(notiTimeRemainingElem, 'reminder-remaining' + numReminders)

    addChildElement(notiContainerElem, notiLeftElem)
    addChildElement(notiContainerElem, notiRightElem)

    addChildElement(notiLeftElem, notiTextElem)
    addChildElement(notiLeftElem, notiCircleElem)

    addChildElement(notiRightElem, notiTimeRemainingElem)

    addChildElement(notiCircleElem, notiInnerCircleElem)

    addChildElement(containerElem, notiContainerElem)
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