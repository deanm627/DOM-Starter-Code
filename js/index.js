'use strict';
const form = document.querySelector("#form");

// *Generating Node Lists for inputs and replacement blanks
const inputs = document.querySelectorAll(".userInput");
const replacements = document.querySelectorAll(".replacement");

// *BONUS* Creating Array from Node List
const newArray = Array.from(inputs);

// *Processing by individual input
// const replace1 = document.querySelector("#replace1");
// const replace2 = document.querySelector("#replace2");
// const replace3 = document.querySelector("#replace3");
// const replace4 = document.querySelector("#replace4");
// const replace5 = document.querySelector("#replace5");
// const replace6 = document.querySelector("#replace6");
// const replace7 = document.querySelector("#replace7");
// const replace8 = document.querySelector("#replace8");
// const replace9 = document.querySelector("#replace9");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    // *BONUS 2* Getting input values using map method
    const inputValuesArr = newArray.map((x) => document.getElementById(x.id).value);

    // *Creating input array using forEach method 
    // const inputArr = [];
    // inputs.forEach(function(userInput) {
    //     inputArr.push(document.getElementById(userInput.id).value);
    // });

    replacements.forEach(function(blank, index) {
        blank.innerHTML = inputValuesArr[index];
    });

    // *Processing by individual input
    // replace1.innerHTML = document.getElementById("input1").value;
    // replace2.innerHTML = document.getElementById("input2").value;
    // replace3.innerHTML = document.getElementById("input3").value;
    // replace4.innerHTML = document.getElementById("input4").value;
    // replace5.innerHTML = document.getElementById("input5").value;
    // replace6.innerHTML = document.getElementById("input6").value;
    // replace7.innerHTML = document.getElementById("input7").value;
    // replace8.innerHTML = document.getElementById("input8").value;
    // replace9.innerHTML = document.getElementById("input9").value;

    document.getElementById("form").reset();
});
