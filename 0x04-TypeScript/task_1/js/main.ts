interface TeacherProps {
    firstName: string;
    lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
}

class Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any; 

    constructor(props: TeacherProps) {
        this.firstName = props.firstName;
        this.lastName = props.lastName;
        this.fullTimeEmployee = props.fullTimeEmployee;
        this.location = props.location;
        this.yearsOfExperience = props.yearsOfExperience;
        
        Object.keys(props).forEach(key => {
            if (!(key in this)) {
                (this as any)[key] = props[key];
            }
        });
    }

    workFromHome() {
        return 'Cannot work from home';
    }

    getCoffeeBreak() {
        return 'Cannot have a break';
    }

    workTeacherTasks() {
        return 'Getting to work';
    }

}

const teacher3 = new Teacher({
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
});
console.log(teacher3);

interface DirectorProps extends TeacherProps {
    numberOfReports: number;
}


class Director extends Teacher {
    numberOfReports: number;

    constructor(props: DirectorProps) {
        super(props);
        this.numberOfReports = props.numberOfReports;
    }

    workFromHome() {
        return 'Working from home';
    }

    getCoffeeBreak() {
        return 'Getting a coffee break';
    }

    workDirectorTasks() {
        return 'Getting to director tasks'
    }
}

interface PrintTeacherFunction {
    (firstName: string, lastName: string): string;
}

const printTeacher: PrintTeacherFunction = (firstName, lastName) => {
    return (`${firstName.charAt(0)}. ${lastName}`)
}

interface StudentClassProps {
    firstName: string;
    lastName: string;
}

class StudentClass {
    firstName: string;
    lastName: string;

    constructor(props: StudentClassProps) {
        this.firstName = props.firstName;
        this.lastName = props.lastName;
    }

    workOnHomework() {
        return 'Currently working';
    }

    displayName() {
        return this.firstName;
    }
}

function createEmployee(salary: number | string): Director | Teacher {
    if (Number(salary) < 500) {
        return new Teacher({firstName:'j', lastName:'g', fullTimeEmployee: true, location: 'Nairobi'});
    }
    return new Director({firstName:'j', lastName:'g', fullTimeEmployee: true, location: 'Nairobi', numberOfReports: 20,});
}
