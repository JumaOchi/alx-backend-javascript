// let username: string= "alex";

// //using unions   --> allows for multiple types to a variable

// let pageName: string | number = "1";

// //typealiases 
// type ID = string;
// type PopularTag = String;
// type MaybePopularTag = PopularTag | null  // use of both typpealias and union

interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1 : Student = {
    firstName: "Juma",
    lastName: "Ochi",
    age: 26,
    location: "Nairobi"
};
const student2 : Student = {
    firstName: "Lenah",
    lastName: "Ochi",
    age: 20,
    location: "Nairobi"
};

const studentsList: Array<Student> = [
    student1,
    student2,
  ];

  //Dispplay student inforation
  export const displayStudents = (students: Array<Student>): void => {
    const table = document.createElement('table');
    const tableHead = document.createElement('thead');
    const headRow = document.createElement('tr');
    const tableBody = document.createElement('tbody');
    headRow.insertAdjacentHTML('beforeend', '<td>FirstName</td');
    headRow.insertAdjacentHTML('beforeend', '<td>Location</td');
    tableHead.insertAdjacentElement('beforeend', headRow);
  
    for (const student of students) {
      const bodyRow = document.createElement('tr');
      bodyRow.insertAdjacentHTML('beforeend', `<td>${student.firstName}</td>`);
      bodyRow.insertAdjacentHTML('beforeend', `<td>${student.location}</td>`);
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