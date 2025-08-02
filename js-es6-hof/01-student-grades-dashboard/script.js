// Starter data
const students = [
  { name: "Anna", grade: 92 },
  { name: "Ben", grade: 78 },
  { name: "Clara", grade: 88 },
  { name: "David", grade: 84 },
  { name: "Ella" } // no grade, should use default
];

// Start coding here 
function displayStudent({name, grade = 0}){
  return `Student: ${name}, Grade: ${grade}`;
}

const uppercaseNames = students.map(student => student.name.toUpperCase());
console.log("All the student name is in uppercase:", uppercaseNames);

const highGradeStudents = students.filter(student => (student.grade ?? 0) >= 85);
console.log("Students with grade >= 85:");
highGradeStudents.forEach(a => console.log(displayStudent(a)));

const totalGrades = students.reduce((sum, {grade = 0}) => sum + grade, 0);
const averageGrade = totalGrades / students.length;
console.log("Average grade:", averageGrade.toFixed(2));