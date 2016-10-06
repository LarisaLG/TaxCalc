// Set Tax Rates of 20% and 40%
var taxRate1 = 0.2;
var taxRate2 = 0.4;


// Returns the user's salary
function getSalary() {
  return 27850;
}


// Returns the cut-off point at which tax in rate 1 is paid
function getTaxRate1CutOffPoint() {
  return 33800;
}


// Returns the tax due in Band 1
function calculateTaxDueInBand1(salary) {
  if (salary<=getTaxRate1CutOffPoint()){
  var taxRate1CutOffPoint = getTaxRate1CutOffPoint();
  return getSalary() * 0.2; }
  else return getTaxRate1CutOffPoint()*.2;
}


// Returns the tax due in Band 2
function calculateTaxDueInBand2(salary) {
  if (salary>=getTaxRate1CutOffPoint()){
  var taxableIncomeForBand2 = (salary - getTaxRate1CutOffPoint()) * taxRate2;
  return parseInt(taxableIncomeForBand2); }
  else return 0;
}


// Display the tax details 
function displayTaxDetails(){
  var salary = getSalary();
  var taxDueInBand1 = calculateTaxDueInBand1(salary);
  var taxDueInBand2 = calculateTaxDueInBand2(salary);

  console.log("Gross Salary: " + salary);
  console.log("Tax Due in Band 1: " + taxDueInBand1);
  console.log("Tax Due in Band 2: " + taxDueInBand2);
  var totalTaxDue = taxDueInBand1 + taxDueInBand2;
  console.log("Total Tax Due: " + totalTaxDue);
  var nettSalary = salary - totalTaxDue;
  nettSalary = nettSalary;
  console.log("Nett Salary: " + nettSalary);
  

  if (nettSalary >=80000)  {
    console.log("Your nett salary is greater than 80,000");
   } else if (nettSalary >= 70000) {
    console.log("Your nett salary is between 70,000 and 79,999");
  } else if (nettSalary >= 40000) {
    console.log("Your nett salary is between 40,000 and 69,999");
  } else if (nettSalary >= 30000) {
    console.log("Your nett salary is between 30,000 and 39,999");
  } else if (nettSalary >= 20000) {
    console.log("Your nett salary is between 20,000 and 29,999");
  } else if (nettSalary < 20000) {
    console.log("Your nett salary is less than 20,000");
  }
}

displayTaxDetails();  } else if (nettSalary < 20000) {
    console.log("Your nett salary is less than 20,000");
  }
