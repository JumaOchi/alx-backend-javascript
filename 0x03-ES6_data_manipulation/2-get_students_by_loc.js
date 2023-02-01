// function getStudentsByLocation that returns an array of objects who are located in city.

export default function getStudentsByLocation(studentlis, city) {
  return studentlis.filter((student) => student.location === city);
}
