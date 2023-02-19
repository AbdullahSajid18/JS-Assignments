//CHAP 14 AND 15 ARRAY
//QUESTION NO.1

let students = []

// QUESTION NO.2

let emptyArray = {
    studentName : []
}

//QUESTION NO. 3 4 5 6

let student = []
let studentName = ["Student", 4, true, student];

//QUESTION NO.7

let education = [
    "SSC",
    "HSC" ,
    "BSC" ,
    "B.COM", 
    "MS" ,
    "M.PHIL", 
    "PHD"+"</br>"
];

document.write(education)

// QUESTION NO.8

let studentNames4 = ["Frankiln", "Shawn", "Michael", "Bruce"]

let numbers = [350 , 300 , 450 , 480]

let studentPercentages = []

for (let i = 0; i < numbers.length; i++) {
    let percentage =(numbers[i] /500) *100;
    studentPercentages.push(percentage);
}

for (let i=0; i< studentNames4.length; i++) {
    console.log(studentNames4[i] + ":Score ="+ numbers[i] + ", Percentage =" + studentPercentages[i] + "%");
}

// QUESTION NO.9

//INITIALIZE AN ARRAY 

// ==============START===============

let colors = ["yellow", "green", "orange", "pink", "red", "golden",]

document.write(colors)

// ADD BEGINING ARRAY

// =============a============

let colorToAdd = prompt("type the color in the beginning")

colors.unshift(colorToAdd)
document.write("</br> update and add in the beginning array check </br>" + colors)

// =============b============

let colorToAddingAtEnd = prompt ("type the color to add in the end ")

colors.push(colorToAddingAtEnd)
document.write("</br> update and add in the end array check </br>" + colors +"</br>")

// FOR ADDING TWO ARRAYS AT A TIME 

// =============c============

colors.unshift("brown", "purple")
document.write("<br> adding two more colors" + colors )

//DELETE BEGINNING ARRAY

// =============d============

colors.shift()
document.write("<br> delete beginning array" + colors)

//DELETE ENDING ARRAY

// =============E============

colors.pop()
document.write("<br> delete ending array" + colors)

