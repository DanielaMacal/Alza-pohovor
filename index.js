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
  document.getElementById("column2").style.display = "flex"
  document.getElementById("column3").style.display = "none"
  document.getElementById("column4").style.display = "none"
}

function myFunction4() {
  document.getElementById("column2").style.display = "none"
  document.getElementById("column3").style.display = "flex"
  document.getElementById("column4").style.display = "none"
}

function myFunction5() {
  document.getElementById("column2").style.display = "none"
  document.getElementById("column3").style.display = "none"
  document.getElementById("column4").style.display = "flex"
}