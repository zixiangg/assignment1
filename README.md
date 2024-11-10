# Assignment 1

My Node Module is about managing a School. The School has Students, Lecturers and Courses. It allows you to create, view and delete student, lecturer and course records.

In my Node Module, here are some key functions that I implemented

-> Register Student Info - registerStudent(a, n) - This function takes in 2 parameters, Student Admin Number and Student Name needed to register their info. An example of running this function would be registerStudent('221609S', 'StudentZ'). I made this function more user-friendly such that the admin number cannot be repeated and the function will return "Student is already registered". Given a successful output, the function will return "Student registered successfully".

-> Delete Lecturer Info - deleteLecturer(a) - This function takes in 1 parameter, Lecturer ID. An example of running this function would be deleteLecturer('S100A'). I made this function more user-friendly such that the lecturer ID cannot be deleted if it's not found and the function will return "Unable to delete Lecturer - Lecturer not found". Given a successful output, the function will return "Lecturer record deleted successfully". I also implemented the parameter in the function to be case-sensitive. If users enter deleteLecturer('S100a'), the same results would be returned.

-> Get Lecturer Info - getLecturerInfo(a) - This function takes in 1 parameter, Lecturer ID. An example of running this function would be getLecturerInfo('S100A'). I made this function more user-friendly such that the lecturer ID must be in the record. Otherwise, the function will return "Lecturer doesn't exist". Given a successful output, the function will return both the Lecturer's ID and Name, return "Lecturer Name is " + existingLecturer.lecturerName + " and Lecturer ID is " + existingLecturer.lecturerID; I also implemented the parameter in the function to be case-sensitive. If users enter getLecturerInfo('S100a'), the same results would be returned.

-> Get Number of Courses - getNoOfCourses() - This function takes in no parameter and it returns how many courses there are in the array with its length. Given a successful output, the function will return "There are " + this.courses.length + " courses available"; 

-> Assign Student to Course - assignStudentToCourse(a, c) - This function takes in 2 parameters, Student Admin Number and Course ID needed to register the course. An example of running the function would be assignStudentToCourse('221609S', 'C1'). I made this function more user-friendly such that if a student's admin number doesn't exist, it would return "Unable to assign Course - Student not found"; If the course is already assigned to the student, it would return return "Unable to assign Course - Course " + existingStudent.courses + " already assigned to Student of Admin Number " + existingStudent.adminNo;. Given a successful output, the function will return "Course assigned successfully";


# References
I made use of mostly ChatGPT and Stack Overflow to find out how to use the functions like some, find etc.