
var ad;
function openAd() {
    setTimeout(function () {
        ad = window.open(" ", "_blank");
        ad.document.write("<h1>lorem ipsum</h1>");
        ad.document.write("<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et doloremagna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat. Duis aute irure dolor in reprehenderit in voluptate.</p>");
        ad.document.write("<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et doloremagna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat. Duis aute irure dolor in reprehenderit in voluptate.</p>");
    }, 3000);
}

function closePage() {
    ad.close();
}