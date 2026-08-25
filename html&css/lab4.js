var x = 1;
do{
    name = prompt("Please enter your name: ");    
    x++;

}while(!name && x <= 3);

if(name){
alert("Welcome " + name);}


var i = 1;
do{
    var bYear = prompt("Please enter your birth year:");
    Number(bYear);
    i++;
}while( !bYear && bYear > 2010 && i <= 3);

if(bYear){
alert(" your Birth Year " + bYear );}


document.write("Name :" + name );  
document.write("<br>Birth Year :" + bYear );
document.write("<br>Age :" + (2026 - bYear) );