function myFunction1() {
  document.getElementById("changeSavings").innerHTML = `
  <h3>1 895 Kč</h3>
  <h4>Průměrná měsíční úspora člena Alza Premium</h4>
  `}

function myFunction2() {
  document.getElementById("changeSavings").innerHTML = `
  <h3>22 750 Kč</h3>
  <h4>Průměrná roční úspora člena Alza Premium</h4>
  `}

  function myFunction3() {
    myReset();
    myReset2();
    document.getElementById("column2").classList.add('show');
    document.getElementById("column3").classList.add('hide');
    document.getElementById("column4").classList.add('hide');
    document.getElementById("choice1").classList.add('active');
  }
  
  function myFunction4() {
    myReset();
    myReset2();
    document.getElementById("column2").classList.add('hide');
    document.getElementById("column3").classList.add('show');
    document.getElementById("column4").classList.add('hide');
    document.getElementById("choice2").classList.add('active');
  }
  
  function myFunction5() {
    myReset();
    myReset2();
    document.getElementById("column2").classList.add('hide');
    document.getElementById("column3").classList.add('hide');
    document.getElementById("column4").classList.add('show');
    document.getElementById("choice3").classList.add('active');
  }
  
  function myReset() {
    document.getElementById("column2").classList.remove('hide');
    document.getElementById("column2").classList.remove('show');
    document.getElementById("column3").classList.remove('hide');
    document.getElementById("column3").classList.remove('show');
    document.getElementById("column4").classList.remove('hide');
    document.getElementById("column4").classList.remove('show');
  }

  function myReset2() {
    document.getElementById("choice1").classList.remove('active');
    document.getElementById("choice2").classList.remove('active');
    document.getElementById("choice3").classList.remove('active');
  }
