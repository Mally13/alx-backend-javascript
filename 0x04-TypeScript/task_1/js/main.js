var Teacher = /** @class */ (function () {
    function Teacher(props) {
        var _this = this;
        this.firstName = props.firstName;
        this.lastName = props.lastName;
        this.fullTimeEmployee = props.fullTimeEmployee;
        this.location = props.location;
        this.yearsOfExperience = props.yearsOfExperience;
        Object.keys(props).forEach(function (key) {
            if (!(key in _this)) {
                _this[key] = props[key];
            }
        });
    }
    return Teacher;
}());
var teacher3 = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
};
console.log(teacher3);
