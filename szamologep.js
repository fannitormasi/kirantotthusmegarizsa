function Result() {
  var oper = document.getElementById('operators').value;
  var n1 = parseFloat(document.getElementById('numone').value);
  var n2 = parseFloat(document.getElementById('numtwo').value);


  if (oper === '+') {
    document.getElementById('result').value = n1 + n2;
    document.getElementById('numone').value = '';
    document.getElementById('numtwo').value = '';
    document.getElementById('operators').value = 'selected';
  }
  if (oper === '-') {
    document.getElementById('result').value = n1 - n2;
    document.getElementById('numone').value = '';
    document.getElementById('numtwo').value = '';
  }
  if (oper === '*') {
    document.getElementById('result').value = n1 * n2;
    document.getElementById('numone').value = '';
    document.getElementById('numtwo').value = '';
  }
  if (oper === '/') {
    document.getElementById('result').value = n1 / n2;
    document.getElementById('numone').value = '';
    document.getElementById('numtwo').value = '';
  }
  if (oper === '%') {
    document.getElementById('result').value = n1 % n2;
    document.getElementById('numone').value = '';
    document.getElementById('numtwo').value = '';
  }
  if (oper === '**') {
    document.getElementById('result').value = n1 ** n2;
    document.getElementById('numone').value = '';
    document.getElementById('numtwo').value = '';
  }
}

function Insert(num) {
  var operatorValueEmpty = document.getElementById('operators').value === 'empty';
  if (operatorValueEmpty === true) {
    document.calculator.numone.value += num;
  } else if (operatorValueEmpty === false) {
    document.calculator.numtwo.value += num;
  }
}