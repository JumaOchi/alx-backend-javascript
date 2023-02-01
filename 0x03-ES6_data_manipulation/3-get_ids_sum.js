// Create a function getStudentIdsSum that returns the sum of all the student ids.

export default function getStudentIdsSum(students) {
  const stlist = students.map((student) => student.id);
  return stlist.reduce((sum, curValue) => sum + curValue, 0);
}
