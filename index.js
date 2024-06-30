// Function to calculate distance in blocks from headquarters
function distanceFromHqInBlocks(block) {
    return Math.abs(block - 42); // Using Math.abs to handle negative blocks
}

// Function to calculate distance in feet from headquarters using distanceFromHqInBlocks
function distanceFromHqInFeet(block) {
    const blocks = distanceFromHqInBlocks(block);
    return blocks * 264; // Each block is 264 feet
}

// Function to calculate distance traveled in feet
function distanceTravelledInFeet(startBlock, endBlock) {
    const blocksTravelled = Math.abs(startBlock - endBlock);
    return blocksTravelled * 264; // Each block is 264 feet
}

// Function to calculate fare price based on distance traveled
function calculatesFarePrice(startBlock, endBlock) {
    const feetTravelled = distanceTravelledInFeet(startBlock, endBlock);

    if (feetTravelled <= 400) {
        return 0; // First 400 feet are free
    } else if (feetTravelled > 400 && feetTravelled <= 2000) {
        return (feetTravelled - 400) * 0.02; // 2 cents per foot after the first 400 feet
    } else if (feetTravelled > 2000 && feetTravelled <= 2500) {
        return 25; // Flat fare for distances between 2000 and 2500 feet
    } else {
        return 'cannot travel that far'; // Cannot travel distances over 2500 feet
    }
}


