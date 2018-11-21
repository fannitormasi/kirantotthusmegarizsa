var numberArray1 = [];
var numberArray2 = [];
var muveletIsOn = false;
var numberSum1 = 0;
var numberSum2 = 0;
var muveletSaved = 0;
document.querySelector('span.display').innerHTML = 0;

function torles() {
  numberArray1 = [];
  numberArray2 = [];
  muveletIsOn = false;
  document.querySelector('span.display').innerHTML = 0;
}

function number(num) {
  if (muveletSaved === 14) { // = was saved
    muveletIsOn = false;
    numberArray1 = [];
    muveletSaved = 15;
  }
  if (!muveletIsOn) {
    if (num !== 0 || num === 0 && numberArray1.length > 0) {
      numberArray1.push(num);
      document.querySelector('span.display').innerHTML = numberArray1.join('');
    }
  } if (muveletIsOn) {
    if (num !== 0 || num === 0 && numberArray2.length > 0) {
      numberArray2.push(num);
      document.querySelector('span.display').innerHTML = numberArray2.join('');
    }
  }
}

function muvelet(s) {
  if (numberArray1.length > 0 || numberArray2.length > 0) {
    muveletIsOn = true;
  }
  if (numberArray1.length > 0 && numberArray2.length > 0) {
    for (var i = 0; i < numberArray1.length; i++) {
      numberSum1 = numberArray1[i] * 10 ** (numberArray1.length - 1 - i) + numberSum1;
    }
    for (var j = 0; j < numberArray2.length; j++) {
      numberSum2 = numberArray2[j] * 10 ** (numberArray2.length - 1 - j) + numberSum2;
    }
    numberArray1 = [];
    numberArray2 = [];

    if (muveletSaved === 10) { // +
      numberArray1.push(numberSum1 + numberSum2);
    }
    if (muveletSaved === 11) { // -
      numberArray1.push(numberSum1 - numberSum2);
    }
    if (muveletSaved === 13) { // ÷
      numberArray1.push(numberSum1 / numberSum2);
    }
    if (muveletSaved === 12) { // *
      numberArray1.push(numberSum1 * numberSum2);
    }
    document.querySelector('span.display').innerHTML = numberArray1.join('');
  }
  muveletSaved = s;
  numberSum1 = 0;
  numberSum2 = 0;
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
