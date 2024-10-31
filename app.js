const schoolMgmt = require("./ZiXiang_StudentMgmt.js");

// console.log(schoolMgmt.registerStudent('221000b', 'Student4'));
// console.log(schoolMgmt.listAllStudents());
// console.log(schoolMgmt.deleteStudent('221000b'));
// console.log(schoolMgmt.listAllStudents());

console.log(schoolMgmt.listAllStudents());
console.log(schoolMgmt.assignCourse('221609S', 'CourseB'));
console.log(schoolMgmt.listAllStudents());
