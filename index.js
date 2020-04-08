/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const createEmployeeRecord = employee => {
    return {
        firstName: employee[0],
        familyName: employee[1],
        title: employee[2],
        payPerHour: employee[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

const createEmployeeRecords = employees => {
    return employees.map(createEmployeeRecord)
}

class TimePunch {
    constructor(dateString) {
        const dateTime = dateString.split(" ")
        this.date = dateTime[0]
        this.hour = parseInt(dateTime[1])
    }
}

function createTimeInEvent(dateString) {
    let timeIn = new TimePunch(dateString)
    timeIn.type = "TimeIn"
    this.timeInEvents.push(timeIn)
    return this
}


function createTimeOutEvent(dateString) {
    let timeOut = new TimePunch(dateString)
    timeOut.type = "TimeOut"
    this.timeOutEvents.push(timeOut)
    return this
}

function hoursWorkedOnDate(date) {
    const timeIn = this.timeInEvents.find(timeIn => timeIn.date === date)
    const timeOut = this.timeOutEvents.find(timeOut => timeOut.date === date)
    return (timeOut.hour - timeIn.hour)/ 100
}

function wagesEarnedOnDate(date) {
    const hours = hoursWorkedOnDate.call(this, date)
    return hours * this.payPerHour
}


let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}



const calculatePayroll = employees => {
    const totalWages = employees.map(emp => allWagesFor.call(emp))
    return totalWages.reduce((memo, wage) => memo + wage)
}

const findEmployeeByFirstName = (employees, name) => {
    return employees.find(emp => emp.firstName === name)
}
