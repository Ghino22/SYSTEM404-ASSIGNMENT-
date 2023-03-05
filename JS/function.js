//POP UP
function popup() {
  var StudentId = document.getElementById('STID').value;
  var nameofstudent = document.getElementById('nym').value;
  var Middle = document.getElementById('MN').value;
  var lastname = document.getElementById('LN').value;
  var fullname = lastname + ', ' + nameofstudent + ', ' + Middle;
  var prelim = parseInt(document.getElementById('pregrade').value);
  var midterm = parseInt(document.getElementById('midgrade').value);
  var final = parseInt(document.getElementById('figrade').value);
  var total = (prelim + midterm + final) / 3;

  var courses = document.getElementById('course').value;
  var Subject = document.getElementById('sub').value;

  document.getElementById('STID1').innerHTML = StudentId;
  document.getElementById('nym1').innerHTML = fullname;
  document.getElementById('final1').innerHTML = total;

  //Course
  if (courses == 1) {
    document.getElementById('curs1').innerHTML = 'DICT.';
  }
  if (courses == 2) {
    document.getElementById('curs1').innerHTML = 'Arts and Sciences.';
  }
  if (courses == 3) {
    document.getElementById('curs1').innerHTML = 'Criminal Justice.';
  }
  if (courses == 4) {
    document.getElementById('curs1').innerHTML = 'Education.';
  }
  if (courses == 5) {
    document.getElementById('curs1').innerHTML = 'BS in Nursing.';
  }

  //Subject
  if (Subject == 1) {
    document.getElementById('sub1').innerHTML = 'Math.';
  }
  if (Subject == 2) {
    document.getElementById('sub1').innerHTML = 'English.';
  }
  if (Subject == 3) {
    document.getElementById('sub1').innerHTML = 'Web Technology';
  }
  if (Subject == 4) {
    document.getElementById('sub1').innerHTML = 'Foreign Language.';
  }
  if (Subject == 5) {
    document.getElementById('sub1').innerHTML = 'Networking..';
  }

  //Grading System and equivalent and grade mark

  if (total >= 99 && total <= 100) {
    document.getElementById('gmark').innerHTML = 'Passed';
    document.getElementById('equa').innerHTML = '1.00';
  }
  if (total >= 96 && total <= 98.99) {
    document.getElementById('gmark').innerHTML = 'Passed';
    document.getElementById('equa').innerHTML = '1.25';
  }
  if (total >= 93 && total <= 95.99) {
    document.getElementById('gmark').innerHTML = 'Passed';
    document.getElementById('equa').innerHTML = '1.50';
  }
  if (total >= 90 && total <= 92.99) {
    document.getElementById('gmark').innerHTML = 'Passed';
    document.getElementById('equa').innerHTML = '1.75';
  }
  if (total >= 87 && total <= 89.99) {
    document.getElementById('gmark').innerHTML = 'Passed';
    document.getElementById('equa').innerHTML = '2.00';
  }

  if (total >= 84 && total <= 86.99) {
    document.getElementById('gmark').innerHTML = 'Passed';
    document.getElementById('equa').innerHTML = '2.25';
  }
  if (total >= 81 && total <= 83.99) {
    document.getElementById('gmark').innerHTML = 'Passed';
    document.getElementById('equa').innerHTML = '2.50';
  }
  if (total >= 78 && total <= 80.99) {
    document.getElementById('gmark').innerHTML = 'Passed';
    document.getElementById('equa').innerHTML = '2.75';
  }
  if (total >= 75 && total <= 77.99) {
    document.getElementById('gmark').innerHTML = 'Passed';
    document.getElementById('equa').innerHTML = '3.00';
  }
  if (total < 75.99) {
    document.getElementById('gmark').innerHTML = 'Failed';
    document.getElementById('equa').innerHTML = '5.00';
  }

  if (course < 75.99) {
    document.getElementById('gmark').innerHTML = 'Failed';
    document.getElementById('equa').innerHTML = '5.00';
  }

  

  document.getElementById('text-result').style.display = 'none';
  document.getElementById('result').style.display = 'block';
}

//reset button

function popreset() {
  document.getElementById('nym').value = '';
  document.getElementById('MN').value = '';
  document.getElementById('LN').value = '';
  document.getElementById('STID').value = '';
  document.getElementById('course').value = '0';
  document.getElementById('sub').value = '0';
  document.getElementById('pregrade').value = '';
  document.getElementById('midgrade').value = '';
  document.getElementById('figrade').value = '';
  document.getElementById('text-result').style.display = 'block';
  document.getElementById('result').style.display = 'none';
}

//for pop up
function showload() {
  document.getElementById('load').style.display = 'block';
}
function hideload() {
  document.getElementById('load').style.display = 'none';
}
function allfunct() {
  setTimeout(showload, 1);
  setTimeout(hideload, 5000);
  setTimeout(popup, 5010);

  return false;
}


