// Code your solution in this file!
const drivers = [ 'Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = function() {
    return drivers.slice(0,2)
}

function returnLastTwoDrivers(){
    return drivers.slice(2,4)
}

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]

function createFareMultiplier(fare) {
    return function (fareMultiplier) {
        return fare * fareMultiplier 
    }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = function(drivers, callback) {
    return callback();
    console.log(callback)
}

