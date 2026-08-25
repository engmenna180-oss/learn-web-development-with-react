function showBig(src) {
    document.getElementById("bigImage").src = src
    document.getElementById("bigImage").style.display = "block"
}
function hideSmall() {
    document.getElementById("bigImage").src = ""
    document.getElementById("bigImage").style.display = "none"
}








function getUsers() {
    var xhr = new XMLHttpRequest()
    xhr.open("GET", "https://dummyjson.com/users", true)
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var response = JSON.parse(xhr.responseText);
            var data = response.users;
            var output = "";
            for (var i = 0; i < data.length; i++) {
                output += "<div class='user-card'>";
                output += "<img src='" + data[i].image + "' width='80'>";
                output += "<p><strong>" + data[i].firstName + " " + data[i].lastName + "</strong></p>";
                output += "<p class='user-email'>" + data[i].email + "</p>";
                output += "</div>";
            }
            document.getElementById("usersList").innerHTML = output;
        }
    } 
    xhr.send();
}