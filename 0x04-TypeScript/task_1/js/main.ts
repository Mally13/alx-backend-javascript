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
}

const teacher3: Teacher = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
};
console.log(teacher3);

interface DirectorProps extends TeacherProps {
    numberOfReports: number;
}


class Directors extends Teacher {
    numberOfReports: number;

    constructor(props: DirectorProps) {
        super(props);
        this.numberOfReports = props.numberOfReports;
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
