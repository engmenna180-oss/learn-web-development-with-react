var N = parseInt(prompt("Enter number of elements  : ").trim());

document.write("Input N : " + N + "<br>");

var arr = [];
for (var i = 0; i < N; i++) {
    arr[i] = prompt("Enter array elements : ").trim().split(" ");
}

document.write("Input list : " + arr.join("  ") + "<br>");

var de = parseInt(prompt("Enter the element to delete : ").trim());
document.write("Input index : " + de + "<br>");
var index = arr.indexOf(de);
arr.splice(index, 1);

document.write(" Output : " + arr.join("  ") + "<br>");