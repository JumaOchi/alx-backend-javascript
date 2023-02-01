// Create a function getListStudentIds that returns an array of ids from a list of object.

export default function getListStudentsIds(arr) {
  if (arr.constructor !== Array) {
    return [];
  }
  return arr.map((arr) => arr.id);
}
