//  Create a function updateStudentGradeByCity that returns an array
//  of students for a specific city with their new grade

export default function updateStudentGradeByCity(students, city, newGrades) {
  const defaultGrade = { grade: 'N/A' };

  const cityList = students.filter((student) => student.location === city);
  return cityList.map((student) => ({
    id: student.id,
    firstName: student.firstName,
    location: student.location,
    grade: (newGrades
      .filter((grade) => grade.studentId === student.id)
      .pop() || defaultGrade).grade,
  }));
}
