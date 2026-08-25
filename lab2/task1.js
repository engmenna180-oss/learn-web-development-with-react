var list = [];
for (var i = 0; i < 5; i++) {
    var x = parseInt(prompt("Enter a number:").trim());
    if (!isNaN(x) && x >= 0 && x <= 10) { 
        list.push(x);
    }
}
document.write("u have entered the values of :  " + list.join(" , ")+ "<br>");
list.sort(function(a, b) {
    return a - b;
});
document.write("ur values after being sorted descending :  " + list.reverse().join(" , ")+ "<br>");
document.write("ur values after being sorted ascending :  " + list.join(" , ")+ "<br>");