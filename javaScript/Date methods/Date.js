const today = new Date();

const currentMilliSeconds = today.getTime();
console.log(currentMilliSeconds, "today ms")

console.log(today, "today time")

const startingDate = new Date(0)
console.log(startingDate, "js starting time")

const milliSecondsInOneDay = 24*60*60*1000;

const firstDay = new Date(milliSecondsInOneDay*5);
console.log(firstDay, "First day")

const couponValidTill = new Date(currentMilliSeconds + milliSecondsInOneDay );
console.log(couponValidTill, "coupon validity")

const date = new Date()
console.log(date.getTime(), "completed milli seconds from 1970");
console.log(date.getFullYear(), "current year");
const months = ["january", "febrauary", "march", "april", "may", "june"]
console.log( months[date.getMonth()] , 'current month value')
console.log(date.getDate(), "today date")
console.log(date.getHours(), "current hours")
console.log(date.getMinutes(), 'current minutes');
console.log(date.getSeconds(), "current seconds");
console.log(date.getMilliseconds(), "current milliseconds")