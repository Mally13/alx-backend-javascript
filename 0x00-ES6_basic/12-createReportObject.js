export default function createReportObject(employeesList) {
  const allEmployees = {
    allEmployees: {
      ...employeesList,
    },
    getNumberOfDepartments() {
      return Object.keys(this.allEmployees).length;
    },
  };
  return allEmployees;
}
