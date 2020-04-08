/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

function createEmployeeRecord(array) {
    const [firstName, familyName, title, payPerHour] = array
    const timeInEvents = []
    const timeOutEvents = []
    return {firstName, familyName, title, payPerHour, timeInEvents, timeOutEvents}
}

function createEmployeeRecords(arrays) {
    return arrays.map(arr => createEmployeeRecord(arr))
}

function createTimeInEvent(dtStr) {
    const type = "TimeIn"
    let [date, hour] = dtStr.split(' ')
    hour = parseInt(hour)
    this.timeInEvents.push({type, date, hour})
    return this
}

function createTimeOutEvent(dtStr) {
    const type = "TimeOut"
    let [date, hour] = dtStr.split(' ')
    hour = parseInt(hour)
    this.timeOutEvents.push({type, date, hour})
    return this
}
function hoursWorkedOnDate(date) {
    const start = this.timeInEvents.find(elm => elm.date === date)
    const end = this.timeOutEvents.find(elm => elm.date === date)
    return (end.hour - start.hour) / 100
}

function wagesEarnedOnDate(date) {
    return this.payPerHour * hoursWorkedOnDate.call(this, date)
}

function allWagesFor() {
    const wages = this.timeInEvents.map(event => wagesEarnedOnDate.call(this, event.date))
    return wages.reduce((x,y)=>x+y, 0)
}

function createEmployeeRecords(empArray) {
    return empArray.map(emp => createEmployeeRecord(emp))
}

function findEmployeeByFirstName(empArray, firstName) {
    return empArray.find(emp => emp.firstName === firstName)
}

function calculatePayroll(empArray) {
    const wages = empArray.map(emp => allWagesFor.call(emp))
    return wages.reduce((x,y)=>x+y, 0)
}

// let allWagesFor = function () {
//     let eligibleDates = this.timeInEvents.map(function (e) {
//         return e.date
//     })

//     let payable = eligibleDates.reduce(function (memo, d) {
//         return memo + wagesEarnedOnDate.call(this, d)
//     }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

//     return payable
// }