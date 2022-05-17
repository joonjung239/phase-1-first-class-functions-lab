const returnFirstTwoDrivers = (x) => x.slice(0,2)


const returnLastTwoDrivers = function(drivers){
    return drivers.slice(-2)
}


const selectingDrivers =  [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = (x) => {
    return function (fare) {return x * fare}
}

const  fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = (x, returnFirstTwoDrivers) => {
    return returnFirstTwoDrivers(x)
}
