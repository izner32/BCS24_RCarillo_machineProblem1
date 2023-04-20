// ITCS227 Source Code Template for 2T AY 2022-2023
/*
    Program:        Computation of Grades using Function
    Programmer:     Ricardo Renz C. Carillo IV
    Section:        BCS24
    Start Date:     April 17, 2023
    End Date:       April 20, 2023
*/
const prompt = require('prompt-sync')();

function calculateAverage(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}

function calculateGrade(student) {
  let enablingGrade = calculateAverage(student.enablingAssessment);
  let summativeGrade = calculateAverage(student.summativeAssessment);
  let finalGrade = (enablingGrade * 0.3) + (summativeGrade * 0.3) + (student.finalExam * 0.4);

  student.grade = finalGrade;

  if (finalGrade >= 90) {
    student.letterGrade = 'A';
  } else if (finalGrade >= 80) {
    student.letterGrade = 'B';
  } else if (finalGrade >= 70) {
    student.letterGrade = 'C';
  } else if (finalGrade >= 60) {
    student.letterGrade = 'D';
  } else {
    student.letterGrade = 'F';
  }
}

let students = [];

for (let i = 0; i < 5; i++) {
  let student = {};
  student.enablingAssessment = [];
  student.summativeAssessment = [];

  student.name = prompt(`Enter the name of student: `);
  
  // get enabling assessment grades
  for (let j = 0; j < 5; j++) {
    student.enablingAssessment.push(parseFloat(prompt(`Enter the enabling assessment ${j+1}: `)));
  }

  // get summative assessment grades
  for (let j = 0; j < 3; j++) {
    student.summativeAssessment.push(parseFloat(prompt(`Enter the summative assessment ${j+1}: `)));
  }

  // get final exam grade
  student.finalExam = parseFloat(prompt(`Enter major exam grade: `));

  calculateGrade(student);

  students.push(student);
}

console.log("Name\t\tClass Part.\tSummative Assess.\tExam Grade\tGrade Score\tLetter Grade");

for (let i = 0; i < 5; i++) {
  console.log(`${students[i].name}\t\t${Math.round(calculateAverage(students[i].enablingAssessment))}\t\t${Math.round(calculateAverage(students[i].summativeAssessment))}\t\t${Math.round(students[i].finalExam)}\t\t${Math.round(students[i].grade)}\t\t${students[i].letterGrade}`);
}