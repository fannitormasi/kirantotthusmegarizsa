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

function matyinumberfunction1() {
  var selectedBoolean = document.querySelector('#matyi-operatorselector').value === 'select';
  if (selectedBoolean === true) {
    document.querySelector('#firstnumber-matyi').value += 1;
  } else {
    document.querySelector('#secondnumber-matyi').value += 1;
  }
}

function matyinumberfunction2() {
  var selectedBoolean = document.querySelector('#matyi-operatorselector').value === 'select';
  if (selectedBoolean === true) {
    document.querySelector('#firstnumber-matyi').value += 2;
  } else {
    document.querySelector('#secondnumber-matyi').value += 2;
  }
}

function matyinumberfunction3() {
  var selectedBoolean = document.querySelector('#matyi-operatorselector').value === 'select';
  if (selectedBoolean === true) {
    document.querySelector('#firstnumber-matyi').value += 3;
  } else {
    document.querySelector('#secondnumber-matyi').value += 3;
  }
}

function matyinumberfunction4() {
  var selectedBoolean = document.querySelector('#matyi-operatorselector').value === 'select';
  if (selectedBoolean === true) {
    document.querySelector('#firstnumber-matyi').value += 4;
  } else {
    document.querySelector('#secondnumber-matyi').value += 4;
  }
}

function matyinumberfunction5() {
  var selectedBoolean = document.querySelector('#matyi-operatorselector').value === 'select';
  if (selectedBoolean === true) {
    document.querySelector('#firstnumber-matyi').value += 5;
  } else {
    document.querySelector('#secondnumber-matyi').value += 5;
  }
}

function matyinumberfunction6() {
  var selectedBoolean = document.querySelector('#matyi-operatorselector').value === 'select';
  if (selectedBoolean === true) {
    document.querySelector('#firstnumber-matyi').value += 6;
  } else {
    document.querySelector('#secondnumber-matyi').value += 6;
  }
}

function matyinumberfunction7() {
  var selectedBoolean = document.querySelector('#matyi-operatorselector').value === 'select';
  if (selectedBoolean === true) {
    document.querySelector('#firstnumber-matyi').value += 7;
  } else {
    document.querySelector('#secondnumber-matyi').value += 7;
  }
}

function matyinumberfunction8() {
  var selectedBoolean = document.querySelector('#matyi-operatorselector').value === 'select';
  if (selectedBoolean === true) {
    document.querySelector('#firstnumber-matyi').value += 8;
  } else {
    document.querySelector('#secondnumber-matyi').value += 8;
  }
}

function matyinumberfunction9() {
  var selectedBoolean = document.querySelector('#matyi-operatorselector').value === 'select';
  if (selectedBoolean === true) {
    document.querySelector('#firstnumber-matyi').value += 9;
  } else {
    document.querySelector('#secondnumber-matyi').value += 9;
  }
}

function matyinumberfunction0() {
  var selectedBoolean = document.querySelector('#matyi-operatorselector').value === 'select';
  if (selectedBoolean === true) {
    document.querySelector('#firstnumber-matyi').value += 0;
  } else {
    document.querySelector('#secondnumber-matyi').value += 0;
  }
}

function matyinumberfunctiondot() {
  var selectedBoolean = document.querySelector('#matyi-operatorselector').value === 'select';
  if (selectedBoolean === true) {
    document.querySelector('#firstnumber-matyi').value += '.';
  } else {
    document.querySelector('#secondnumber-matyi').value += '.';
  }
}

function matyicalculate() {
  var number1 = parseFloat(document.querySelector('#firstnumber-matyi').value, 10);
  var number2 = parseFloat(document.querySelector('#secondnumber-matyi').value, 10);
  var operator = document.querySelector('#matyi-operatorselector').value;

  if (operator === '+') {
    document.querySelector('#matyi-result').innerHTML = number1 + number2;
  }
  if (operator === '-') {
    document.querySelector('#matyi-result').innerHTML = number1 - number2;
  }
  if (operator === '*') {
    document.querySelector('#matyi-result').innerHTML = number1 * number2;
  }
  if (operator === '/') {
    document.querySelector('#matyi-result').innerHTML = number1 / number2;
  }
  if (operator === 'pow') {
    document.querySelector('#matyi-result').innerHTML = Math.pow(number1, number2);
  }
  if (operator === '%') {
    document.querySelector('#matyi-result').innerHTML = number1 % number2;
  }
}