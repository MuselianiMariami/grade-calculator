function calculateGrade(grade) {
  if (grade >= 90) {
    return "A";
  } else if (grade >= 80 && grade <= 89) {
    return "B";
  } else if (grade >= 70 && grade <= 79) {
    return "C";
  } else if (grade >= 60 && grade <= 69) {
    return "D";
  } else {
    return "F";
  }
}
function calculate() {
  let inputGrade = document.getElementById("grade").value;
  let grade = parseInt(inputGrade);

  let result = calculateGrade(grade);

  let resultText = "";
  if (result === "F") {
    resultText = "You didn't pass the subject.";
    document.getElementById("result").style.color = "red";
  } else {
    resultText = "Congratulations! You passed the subject.";
    document.getElementById("result").style.color = "green";
  }
  document.getElementById("result").innerHTML = "Your grade is: " + result + "<br>" + resultText;
}
