const schoolMgmt = require("./ZiXiang_SchoolMgmt.js");

// //-----------Students------------------------
// //Register a new student with their admin number
// console.log(schoolMgmt.listAllStudents());
// console.log(schoolMgmt.registerStudent('221000m', 'Student4'));
// console.log(schoolMgmt.listAllStudents());

// //Delete an existing student record
// console.log(schoolMgmt.deleteStudent('221000a'));
// console.log(schoolMgmt.listAllStudents());

// //Get a particular existing student record
// console.log(schoolMgmt.getStudentInfo('221609s'));

// //List all student records
// console.log(schoolMgmt.listAllStudents());

// //-----------Lecturers------------------------
// //Register a new lecturer with their id and name
// console.log(schoolMgmt.listAllLecturers());
// console.log(schoolMgmt.addLecturer('S100C', 'LectA'));
// console.log(schoolMgmt.listAllLecturers());

// //Delete an existing lecturer record
// console.log(schoolMgmt.listAllLecturers());
// console.log(schoolMgmt.deleteLecturer('S100d'));
// console.log(schoolMgmt.listAllLecturers());

// //Get an existing lecturer record by id
// console.log(schoolMgmt.getLecturerInfo('S100c'));

// //Retrive all lecturer records
// console.log(schoolMgmt.listAllLecturers());

// //-----------Courses------------------------
// //Register a new course by their id and name
// console.log(schoolMgmt.listAllCourses());
// console.log(schoolMgmt.createCourse('C3', 'CourseZ'));
// console.log(schoolMgmt.listAllCourses());

// //Delete an existing course by its id
// console.log(schoolMgmt.listAllCourses());
// console.log(schoolMgmt.deleteCourse('c1'));
// console.log(schoolMgmt.listAllCourses());

// //Retrive existing course by id
// console.log(schoolMgmt.getCourseInfo('c2'));

// //Retrive number of courses
// console.log(schoolMgmt.getNoOfCourses());

// //List all the courses available
// console.log(schoolMgmt.listAllCourses());

//Assign existing course to Student
console.log(schoolMgmt.listAllStudents());
console.log(schoolMgmt.assignStudentToCourse('221609z', 'c1'));
console.log(schoolMgmt.listAllStudents());

// //Assign existing course to lecturer
// console.log(schoolMgmt.listAllLecturers());
// console.log(schoolMgmt.assignLecturerToCourse('S100b', 'c7'));
// console.log(schoolMgmt.listAllLecturers());




