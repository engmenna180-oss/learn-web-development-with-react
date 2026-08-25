var x = prompt("Enter your number to test :").trim();
var y = x.split("").reverse().join("");
if (y === x) {
    document.write("Yes"+"<br>")
}
else {
    document.write("No"+"<br>")
}
