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
                    if (student.adminNo === a) {
                        this.students.splice(index, 1);
                    }
                }
            )
            return "Student deleted successfully";
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
    assignCourse(a, c) {
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

    }

    //LECTURERS

    
}