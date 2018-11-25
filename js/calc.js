document.querySelector('#dis1').value = 0;
document.querySelector('#dis2').value = 0;

function calc() {
  var num1 = parseInt(document.querySelector('#dis1').value, 10);
  var num2 = parseInt(document.querySelector('#dis2').value, 10);

  if (document.querySelector('#muveletek').value === '*') {
    document.querySelector('#eredmeny').innerHTML = num1 * num2;
  }
  if (document.querySelector('#muveletek').value === '-') {
    document.querySelector('#eredmeny').innerHTML = num1 - num2;
  }
  if (document.querySelector('#muveletek').value === '/') {
    document.querySelector('#eredmeny').innerHTML = num1 / num2;
  }
  if (document.querySelector('#muveletek').value === '%') {
    document.querySelector('#eredmeny').innerHTML = num1 % num2;
  }
  if (document.querySelector('#muveletek').value === '+') {
    document.querySelector('#eredmeny').innerHTML = num1 + num2;
  }
  if (document.querySelector('#muveletek').value === '**') {
    document.querySelector('#eredmeny').innerHTML = num1 ** num2;
  }
  document.querySelector('#dis1').innerHTML = '';
  document.querySelector('#dis2').innerHTML = '';
}

function number(num) {
  var operatorSelected  = document.querySelector('#muveletek').value === 'select';
  if (operatorSelected) {
    document.querySelector('#dis1').value = num;
    document.querySelector('#dis1').innerHTML = document.querySelector('#dis1').value;
  }
  if (!operatorSelected) {
    document.querySelector('#dis2').value = num;
    document.querySelector('#dis2').innerHTML = document.querySelector('#dis2').value;
  }
}

function szamolFanni() {
  var n1 = parseFloat(document.getElementById('n1').value);
  var n2 = parseFloat(document.getElementById('n2').value);

  var oper = document.getElementById('operators').value;

  if (oper === '+') {
    document.getElementById('result').value = n1 + n2;
  }

  if (oper === '-') {
    document.getElementById('result').value = n1 - n2;
  }

  if (oper === '/') {
    document.getElementById('result').value = n1 / n2;
  }

  if (oper === 'X') {
    document.getElementById('result').value = n1 * n2;
  }
}

function plusCalculate() {
  var num1 = parseInt(document.querySelector('#num1').value, 10);
  var num2 = parseInt(document.querySelector('#num2').value, 10);
  document.querySelector('#szum').innerHTML = num1 + num2;
}
function minusCalculate() {
  var num1 = parseInt(document.querySelector('#num1').value, 10);
  var num2 = parseInt(document.querySelector('#num2').value, 10);
  document.querySelector('#szum').innerHTML = num1 - num2;
}
function multiplicationCalculate() {
  var num1 = parseInt(document.querySelector('#num1').value, 10);
  var num2 = parseInt(document.querySelector('#num2').value, 10);
  document.querySelector('#szum').innerHTML = num1 * num2;
}
function divisionCalculate() {
  var num1 = parseInt(document.querySelector('#num1').value, 10);
  var num2 = parseInt(document.querySelector('#num2').value, 10);
  document.querySelector('#szum').innerHTML = num1 / num2;
}
