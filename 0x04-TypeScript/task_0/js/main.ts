interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}


const  student1: Student = {
    firstName: 'Mary',
    lastName: 'Mutuku',
    age: 27,
    location: 'Nairobi'
}

const  student2: Student = {
    firstName: 'Ruth',
    lastName: 'Mutuku',
    age: 23,
    location: 'Nairobi'
}

const studentsList = [student1, student2];

for (let student of studentsList) {
    console.log(student.firstName, student.location);
}
