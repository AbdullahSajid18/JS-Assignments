var num1=("Sum of 3 and 5 is")

document.write(num1 + " " + Number(3+5) )

document.write(" </br> Value after variable declaration is undefined </br> Initial value: 5 </br> Value after increment is: 6 </br> Value after addition is:13 </br> Value after decrement is:12 </br> The remainder is:0 ")

var ticket=("600")
document.write("</br>Total cost to buy 5 tickets to a movie is "+ " "+ Number(600*5) + "</br><br>" )


document.write("Tables Of Mathematics </br>")
var a=prompt (" Enter Your Number")
for(var s=1; s<=10; s++)

{
    document.write(a + " x "+s+" = "+ a*s + "</br>" +"</br></br>")
}

var F=prompt("Enter temperature in Faherneheit");
var C=(F-32)*5/9;
document.write("Temperatue in Celsius="+C +"C" +"</br></br>");


var F=prompt("Enter temperature in Celcius");
var F=(C*9/5)+32;
document.write("Temperatue in Fehreneheit="+F +"F");