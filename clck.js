"use strict";
document.addEventListener("DOMContentLoaded", ()=>{
let firstName = document.querySelector("#num1");
let secondName = document.querySelector("#num2");
document.querySelector("button").addEventListener("click", ()=>{
   if (firstName.value.length==0 && secondName.value.length==0){
	alert("Fill your names!!");
   }else{
	alert(`Hello ${firstName.value} ${secondName.value}`);
   }
});

});