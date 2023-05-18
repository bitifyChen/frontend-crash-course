// Declare a variable called day type is number and show the  result of day of string
//  	(0 → ‘Sunday’, 1 → ‘Monday’, … 6 → ‘Saturday’)
let day = 6
let map = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
console.log(map[day]);

// Declare a variable called seaon type is number and show the  result of season of string
//  	(1 → ‘Spring’, 2 → ‘Summer’, 3 → ‘Fall’, 4 → ‘Winter’)

const season = 2;
let seasonString = "";

switch (season) {
    case 1:
        seasonString = "Spring";
        break;
    case 2:
        seasonString = "Summer";
        break;
    case 3:
        seasonString = "Fall";
        break;
    case 4:
        seasonString = "Winter";
        break;
    default:
        seasonString = "None";
}
console.log(seasonString); 