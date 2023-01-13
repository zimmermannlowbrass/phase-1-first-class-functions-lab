// Code your solution in this file!
function returnFirstTwoDrivers(arr) {
    return arr.slice(0, 2);
}

function returnLastTwoDrivers(arr) {
    return arr.slice((arr.length - 2, 2));
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(x){
    return (function() {
        return x * x;
    })
}

function fareDoubler(fare) {
    return fare * 2;
}

function fareTripler(fare) {
    return fare * 3;
}

function selectDifferentDrivers(arrayOfDrivers, functionChoice) {
    return functionChoice(arrayOfDrivers);
}