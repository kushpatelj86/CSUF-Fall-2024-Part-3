str = "Hi, How are you?";

console.log(str.indexOf("H"));
console.log(str.indexOf('How'));

str = "Hi Shreya, How are you Shreya?";
console.log(str.indexOf("Shreya"));
console.log(str.lastIndexOf("Shreya"));

console.log(str.slice(5, 15)); // between 5 to 15
console.log(str.slice(5, -5)); // leaves last 5 characters

console.log(str.substring(5, 15));
console.log(str.substring(5, -5)); // doesn't work


let newStrLower = str.toLowerCase();
console.log(newStrLower);

let newStrUpper = str.toUpperCase();
console.log(newStrUpper);

let replaceStr = str.replace('Shreya', 'Kavitha');
console.log(replaceStr);

let replaceAllStr = str.replaceAll('Shreya', 'Kavitha');
console.log(replaceAllStr);

let char = str.charAt(8);
console.log(char);

let charCode = str.charCodeAt(8);
console.log(charCode);



