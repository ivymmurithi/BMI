let butn = document.getElementById('butn');
let resultOutput = document.getElementById('result');

butn.addEventListener('click', results);

function results()  {
let weight = document.getElementById('weight').value;   
let height = document.getElementById('height').value;
let output = (weight / (height * height)); 
resultOutput.value = output;  
}


