var myId; 
function startTimer() {
    alert("Clock Started");
    if (!myId) {
        updateClock(); 
        myId = setInterval(updateClock, 1000);
    }
}
function updateClock() {
    var now = new Date().toLocaleTimeString();
    var display = document.getElementById('clockDisplay');
    if (display) {
        display.textContent = now;
    }
}
function stopTimer() {
    clearInterval(myId);
    myId = null; 
}