var images = ["1.jpeg","2.jpeg", "3.jpeg", "4.jpeg", "5.jpeg"]

var CIndex = 0;
function showImage() {
    document.getElementById("slideshow").src = images[CIndex]}

function nextImage() {
    CIndex ++;
    if(CIndex == 5){CIndex = 0}
    showImage();}

function prevImage() {
    if(CIndex== 0){CIndex = images.length- 1}
    CIndex--
    showImage()}

var slideInterval;
function startSlideShow() {
    stopSlideShow()
    slideInterval = setInterval(nextImage,1000)}

function stopSlideShow() {
    clearInterval(slideInterval)}








function addData() {
    var name = document.getElementById("nameInput").value
    var age = document.getElementById("ageInput").value

    var table = document.getElementById("crudTable").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(); 
    newRow.innerHTML = `
    <td>${name}</td>
    <td>${age}</td>
    <td>
        <button onclick="editRow(this)">Edit</button>
        <button onclick="deleteRow(this)">Delete</button>
    </td>
    `;
    document.getElementById("nameInput").value = "";
    document.getElementById("ageInput").value = "";
}

function deleteRow(btn) {
    btn.closest('tr').remove() }

function editRow(btn) {
    var row = btn.closest('tr')
    var nameCell = row.cells[0]
    var ageCell = row.cells[1]

    var newName = prompt("Edit Name:", nameCell.innerText)
    var newAge = prompt("Edit Age:", ageCell.innerText)
    nameCell.innerText = newName
    ageCell.innerText = newAge
}