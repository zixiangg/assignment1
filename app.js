const schoolMgmt = require("./ZiXiang_StudentMgmt.js");

// console.log(schoolMgmt.registerStudent('221000b', 'Student4'));
// console.log(schoolMgmt.listAllStudents());
// console.log(schoolMgmt.deleteStudent('221000b'));
// console.log(schoolMgmt.listAllStudents());
//console.log(schoolMgmt.getStudentInfo('221609s'));

// console.log(schoolMgmt.listAllStudents());
//console.log(schoolMgmt.assignStudentToCourse('221609S', 'CourseB'));
// console.log(schoolMgmt.listAllStudents());

// console.log(schoolMgmt.addLecturer('S100C', 'LectA'));
// console.log(schoolMgmt.listAllLecturers());
// console.log(schoolMgmt.deleteLecturer('S100C'));
// console.log(schoolMgmt.listAllLecturers());

//console.log(schoolMgmt.getLecturerInfo('S100d'));
//console.log(schoolMgmt.listAllLecturers());
console.log(schoolMgmt.listAllLecturers());
console.log(schoolMgmt.assignLecturerToCourse('S100a', 'CourseA'));
console.log(schoolMgmt.listAllLecturers());

