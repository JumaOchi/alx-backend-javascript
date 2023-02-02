// let username: string= "alex";
var student1 = {
    firstName: "Juma",
    lastName: "Ochi",
    age: 26,
    location: "Nairobi"
};
var student2 = {
    firstName: "Lenah",
    lastName: "Ochi",
    age: 20,
    location: "Nairobi"
};
var studentsList = [
    student1,
    student2,
];
//Dispplay student inforation
export var displayStudents = function (students) {
    var table = document.createElement('table');
    var tableHead = document.createElement('thead');
    var headRow = document.createElement('tr');
    var tableBody = document.createElement('tbody');
    headRow.insertAdjacentHTML('beforeend', '<td>FirstName</td');
    headRow.insertAdjacentHTML('beforeend', '<td>Location</td');
    tableHead.insertAdjacentElement('beforeend', headRow);
    for (var _i = 0, students_1 = students; _i < students_1.length; _i++) {
        var student = students_1[_i];
        var bodyRow = document.createElement('tr');
        bodyRow.insertAdjacentHTML('beforeend', "<td>".concat(student.firstName, "</td>"));
        bodyRow.insertAdjacentHTML('beforeend', "<td>".concat(student.location, "</td>"));
        tableBody.insertAdjacentElement('beforeend', bodyRow);
    }
    table.insertAdjacentElement('beforeend', tableHead);
    table.insertAdjacentElement('beforeend', tableBody);
    document.body.insertAdjacentElement('beforeend', table);
};
displayStudents(studentsList);
//   const styleSheetElement = document.createElement('style');
//   styleSheetElement.innerHTML = styleSheet;
//   document.head.insertAdjacentElement('beforeend', styleSheetElement);
//   document.title = 'Task 0';
//# sourceMappingURL=main.js.map