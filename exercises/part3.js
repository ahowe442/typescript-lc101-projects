// URL for the instructions:
// https://education.launchcode.org/intro-to-professional-web-dev/chapters/typescript/exercises.html
var spacecraftName = "Space Shuttle";
var speedMph = 17500;
var kilometersToMars = 225000000;
var kilometersToTheMoon = 384400;
var milesPerKilometer = 0.621;
// Code the "getDaysToLocation" function here:
// named function example -->
// function myFunction(x: number): number {
//       return x*2;
//    }
function getDaysToLocation(kilometersAway) {
    var milesToLocation = kilometersAway * milesPerKilometer;
    var hoursToLocation = milesToLocation / speedMph;
    var daysToLocation = hoursToLocation / 24;
    return daysToLocation;
}
// Call the function and print the outputs for the Mars trip and the moon trip:
console.log(spacecraftName + " would take " + getDaysToLocation(kilometersToMars) + " days to get to Mars");
console.log(spacecraftName + " would take " + getDaysToLocation(kilometersToTheMoon) + " days to get to Moon");
