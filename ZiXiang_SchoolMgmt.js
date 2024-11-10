module.exports = {

    //School Management Records
    students: [
        {
            adminNo: "221609S",
            name: "Student1",
            courses: ["C1"],
        },

        {
            adminNo: "221000A",
            name: "Student2",
            courses: ["C2"],
        },
    ],

    lecturers: [
        {
            lecturerID: "S100A",
            lecturerName: "LectA",
            courses: ['C1'],
        },

        {
            lecturerID: "S100B",
            lecturerName: "LectB",
            courses: []
        }
    ],

    courses: [
        {
            courseID: 'C1',
            courseName: 'CourseA',
        },
        {
            courseID: 'C2',
            courseName: 'CourseB',
        }
    ],

    //STUDENTS

    //Register a new student with their admin number and name
    registerStudent(a, n) {
        const existingStudent = this.students.some(student => student.adminNo.toLowerCase() === a.toLowerCase());

        if (existingStudent) {
            return "Student is already registered"
        }

        else {
            this.students.push({ adminNo: a, name: n, courses: [] });
            return "Student registered successfully";
        }

    },

    //Delete a student record by their admin number
    deleteStudent(a) {
        const existingStudent = this.students.find(student => student.adminNo.toLowerCase() === a.toLowerCase());

        if (!existingStudent) {
            return "Unable to delete Student - Student not found";
        }

        else {
            this.students.forEach(
                (student, index) => {
                    if (student.adminNo.toLowerCase() === a.toLowerCase()) {
                        //Removes 1 element from the index of a
                        this.students.splice(index, 1);
                    }
                }
            )
            return "Student record deleted successfully";
        }

    },

    //Retrieve a student's record by admin number
    getStudentInfo(a) {
        const existingStudent = this.students.find(student => student.adminNo.toLowerCase() === a.toLowerCase());

        if (existingStudent) {
            return "Student Name is " + existingStudent.name + " and Admin Number is " + existingStudent.adminNo;

        }

        else {
            return "Student doesn't exist";
        }
    },

    //Retrive all student records
    listAllStudents() {
        return this.students;
    },


    //LECTURERS

    //Add a new lecturer with their id and name
    addLecturer(id, n) {
        const existingLecturer = this.lecturers.some(lecturer => lecturer.lecturerID.toLowerCase() === id.toLowerCase());
        if (existingLecturer) {
            return "Lecturer is already added";
        }

        else {
            this.lecturers.push({ lecturerID: id, lecturerName: n, courses: [] });
            return "Lecturer registered successfully";
        }

    },

    //Delete a lecturer record by their id
    deleteLecturer(a) {
        const existingLecturer = this.lecturers.some(lecturer => lecturer.lecturerID.toLowerCase() === a.toLowerCase());

        if (!existingLecturer) {
            return "Unable to delete Lecturer - Lecturer not found";
        }

        else {
            this.lecturers.forEach(
                (lecturer, index) => {
                    if (lecturer.lecturerID === a) {
                        this.lecturers.splice(index, 1);
                    }
                }
            )
            return "Lecturer record deleted successfully";
        }

    },

    //Retrieve a lecturer's record by id
    getLecturerInfo(a) {
        const existingLecturer = this.lecturers.find(lecturer => lecturer.lecturerID.toLowerCase() === a.toLowerCase());

        if (existingLecturer) {
            return "Lecturer Name is " + existingLecturer.lecturerName + " and Lecturer ID is " + existingLecturer.lecturerID;
        }

        else {
            return "Lecturer doesn't exist";
        }
    },

    //Retrive all lecturer records
    listAllLecturers() {
        return this.lecturers;
    },

    //COURSE

    //Create a course with Course ID and Course Name
    createCourse(id, n) {
        //Ensure that Course ID is not repeated
        const existingCourse = this.courses.some(course => course.courseID.toLowerCase() === id.toLowerCase());

        if (existingCourse) {
            return 'Course ID already exists';
        }

        else {
            this.courses.push({ courseID: id, courseName: n });
            return 'Course created!';
        }
    },

    //Delete a course by its ID
    deleteCourse(id) {
        const existingCourse = this.courses.some(course => course.courseID.toLowerCase() === id.toLowerCase());

        if (!existingCourse) {
            return "Unable to delete Course - Course not found";
        }

        else {
            this.courses.forEach(
                (course, index) => {
                    if (course.courseID.toLowerCase() === id.toLowerCase()) {
                        this.courses.splice(index, 1);
                    }
                }
            )
            return "Course deleted successfully";
        }
    },

    //Retrieve Course Info record by id
    getCourseInfo(id) {
        const existingCourse = this.courses.find(course => course.courseID.toLowerCase() === id.toLowerCase());

        if (existingCourse) {
            return "Course Name is " + existingCourse.courseName + " and Course ID is " + existingCourse.courseID;
        }

        else {
            return "Course doesn't exist";
        }
    },

    //Retrive number of courses
    getNoOfCourses() {
        return "There are " + this.courses.length + " courses available";
    },

    //List all courses
    listAllCourses() {
        return this.courses;
    },

    //Assign a course to a student by using their admin number
    assignStudentToCourse(a, c) {
        const existingStudent = this.students.find(student => student.adminNo.toLowerCase() === a.toLowerCase());
        const existingCourse = existingStudent.courses.some(courseID => courseID.toLowerCase() === c.toLowerCase());

        if (!existingStudent) {
            return "Unable to assign Course - Student not found";
        }

        else if (existingCourse) {
            return "Unable to assign Course - Course " + existingStudent.courses + " already assigned to Student of Admin Number " + existingStudent.adminNo;
        }

        else if (existingStudent.courses.includes(c)) {
            return existingStudent.adminNo + " is already registered in " + c;
        }

        else {
            existingStudent.courses.push(c);
            return "Course assigned successfully";
        }

    },

    //Assign a course to a lecturer by using their id
    assignLecturerToCourse(a, c) {
        const existingLecturer = this.lecturers.find(lecturer => lecturer.lecturerID.toLowerCase() === a.toLowerCase());
        const existingCourse = existingLecturer.courses.some(courseID => courseID.toLowerCase() === c.toLowerCase());

        if (!existingLecturer) {
            return "Unable to assign Course - Lecturer not found";
        }

        else if (existingCourse) {
            return "Unable to assign Course - Course " + existingLecturer.courses + " already assigned to Lecturer of ID " + existingLecturer.lecturerID;
        }

        // else if (existingLecturer.courses.includes(c)) {
        //     return existingLecturer.lecturerID + " is already registered in " + c;
        // }

        else {
            existingLecturer.courses.push(c);
            return "Course assigned successfully";
        }

    },


}