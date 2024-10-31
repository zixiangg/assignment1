module.exports = {
    //Explain what function A does
    
    //STUDENTS
    students: [
        {
            adminNo: "221609S",
            name: "Student1",
            courses: ["CourseA"],
        },

        {
            adminNo: "221000A",
            name: "Student2",
            courses: ["CourseB"],
        }
    ],

    //Register a new student with their admin number and name
    registerStudent(a, n) {
        const existingStudent = this.students.some(student => student.adminNo.toLowerCase() === a.toLowerCase());

        if (existingStudent) {
            return "Student is already registered"
        }

        else {
            this.students.push({ adminNo: a, name: n });
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

    //Assign a course to a student by using their admin number
    assignStudentToCourse(a, c) {
        const existingStudent = this.students.find(student => student.adminNo.toLowerCase() === a.toLowerCase());

        if (!existingStudent) {
            return "Unable to assign Course - Student not found";
        }

        else if (existingStudent.courses.includes(c)) {
            return "Student is already registered in " + c;
        }

        else {
            existingStudent.courses.push(c);
            return "Course assigned successfully";
        }

    },

    //LECTURERS
    lecturers: [
        {
            lecturerID: "S100A",
            lecturerName: "LectA",
            courses: ['CourseA'],
        },

        {
            lecturerID: "S100B",
            lecturerName: "LectB",
            courses: []
        }
    ],

    //Add a new lecturer with their id and name
    addLecturer(id, n) {
        const existingLecturer = this.lecturers.some(lecturer => lecturer.lecturerID.toLowerCase() === id.toLowerCase());
        if (existingLecturer) {
            return "Lecturer is already added";
        }

        else {
            this.lecturers.push({ lecturerID: id, lecturerName: n});
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

    //Assign a course to a lecturer by using their id
    assignLecturerToCourse(a, c) {
        const existingLecturer = this.lecturers.find(lecturer => lecturer.lecturerID.toLowerCase() === a.toLowerCase());

        if (!existingLecturer) {
            return "Unable to assign Course - Lecturer not found";
        }

        else if (existingLecturer.courses.includes(c)) {
            return "Lecturer is already registered in " + c;
        }

        else {
            existingLecturer.courses.push(c);
            return "Course assigned successfully";
        }

    },


    
}