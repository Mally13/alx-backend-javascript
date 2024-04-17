var student1 = {
    firstName: 'Mary',
    lastName: 'Mutuku',
    age: 27,
    location: 'Nairobi'
};
var student2 = {
    firstName: 'Ruth',
    lastName: 'Mutuku',
    age: 23,
    location: 'Nairobi'
};
var studentsList = [student1, student2];
for (var _i = 0, studentsList_1 = studentsList; _i < studentsList_1.length; _i++) {
    var student = studentsList_1[_i];
    console.log(student.firstName, student.location);
}
