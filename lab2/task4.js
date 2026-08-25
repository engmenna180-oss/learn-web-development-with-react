var ra = Math.floor(Math.random() * 10) + 1;
var rb = parseInt(prompt("Guess number from 1 to 10 : ").trim());
if (ra == rb) {
    alert("Good Work 🎉🎉");
}
else {
    alert("Not matched ❌");
}
