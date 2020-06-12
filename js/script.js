var vacationType = prompt ('What kind of trip would you like to go on: musical, tropical, or adventurous?');
var groupSize = prompt ("How many people are in your group?");
var destination;
var travelType;

if (vacationType === "musical") {
    destination = "New Orleans.";
}
else if (vacationType === "tropical") {
    destination = "a beach vacation in Mexico.";
}
else if (vacationType === "adventurous") {
    destination = "go whitewater rafting in the Grand Canyon.";
}

if (groupSize >= 6) {
    travelType = "take a charter flight"
}
else if (groupSize == 1 || groupSize == 2) {
    travelType = "travel first class"
}
else if (groupSize >= 3 && groupSize <=5) {
    travelType = "take a helicopter"
}

var str1 = "Since you're a group of ";
var str2 = " looking to take a "
var str3 = " vacation,"
var str4 = " you should ";
var str5 = " to ";
var result = str1.concat(groupSize, str2, vacationType, str3, str4, travelType, str5, destination)
console.log(result)