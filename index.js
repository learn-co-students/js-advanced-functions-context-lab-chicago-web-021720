/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

// Your code here
const createEmployeeRecord = a => ({
  firstName: a[0],
  familyName: a[1],
  title: a[2],
  payPerHour: a[3],
  timeInEvents: [],
  timeOutEvents: []
});
const createEmployeeRecords = array_of_employee_records => array_of_employee_records
  .map(record => createEmployeeRecord(record));

const makeTimeIn = date_stamp => {
  const [date, hour] = date_stamp.split(' ');
  return {
    type: "TimeIn",
    hour: parseInt(hour, 10),
    date: date
  }
};

const makeTimeOut = date_stamp => {
  const [date, hour] = date_stamp.split(' ');
  return {
    type: "TimeOut",
    hour: parseInt(hour, 10),
    date: date
  }
};
//
//
const createTimeInEvent = function(time_stamp) {
  this.timeInEvents.push(makeTimeIn(time_stamp));
  return this;
}

const createTimeOutEvent = function(time_stamp) {
  this.timeOutEvents.push(makeTimeOut(time_stamp));
  return this;
}

const hoursWorkedOnDate = function(date) {
  const timeInDate = this.timeInEvents.find(e => e.date === date);
  const timeOutDate = this.timeOutEvents.find(e => e.date === date);
  return (parseInt(timeOutDate.hour) - parseInt(timeInDate.hour)) / 100;
};


const wagesEarnedOnDate = function(date) {
  return parseFloat((hoursWorkedOnDate.call(this, date) * this.payPerHour).toString());
}

const calculatePayroll = function(employee_records) {return employee_records.reduce((sum,emp) => sum + allWagesFor.call(emp), 0);}

const findEmployeeByFirstName = (arr, firstName) => arr.find(rec => rec.firstName === firstName);
