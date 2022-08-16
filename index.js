function distanceFromHqInBlocks(location) {
    let numOfBlocksFromScuberHQ;
    if (location < 42) {
        numOfBlocksFromScuberHQ = 42 - location;
    }else {
        numOfBlocksFromScuberHQ = location - 42;
    }

    return numOfBlocksFromScuberHQ;
}

function distanceFromHqInFeet(locationInFeet) {
    let numOfBlocksFromScuberHQInFeet = distanceFromHqInBlocks(locationInFeet);
    return numOfBlocksFromScuberHQInFeet * 264;
}

function distanceTravelledInFeet(start, destination) {
    let numOfBlocksTravelledInFeet;
    if (start < destination) {
        numOfBlocksTravelledInFeet = (destination - start) * 264;
    }else {
        numOfBlocksTravelledInFeet = (start - destination) * 264;
    }
    return numOfBlocksTravelledInFeet;

}

function calculatesFarePrice(start, destination) {
    let customerDistance = distanceTravelledInFeet(start, destination);
    let customerFare
    if (customerDistance < 400) {
        customerFare = customerDistance * 0;
        return customerFare;

    }else if (customerDistance < 2000) {
        let customerDistance2 = customerDistance - 400;
        customerFare = (customerDistance2 * 2) / 100;
        return customerFare;

    }else if (customerDistance < 2500){
        let additionalCharge = 25;
        return additionalCharge;
    }else {
        return 'cannot travel that far';
    }

}



// console.log(distanceFromHqInBlocks(30));
// console.log(distanceFromHqInFeet(30));
// console.log(distanceTravelledInFeet(25, 30));
console.log(calculatesFarePrice(25, 33));

