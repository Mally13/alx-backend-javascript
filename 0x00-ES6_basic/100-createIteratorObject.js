export default function createIteratorObject(report) {
  const employeelist = [];
  for (const department in report.allEmployees) {
    if (Object.prototype.hasOwnProperty.call(report.allEmployees, department)) {
      const departmentEmployees = report.allEmployees[department];
      for (const employee in departmentEmployees) {
        if (Object.prototype.hasOwnProperty.call(departmentEmployees, employee)) {
          employeelist.push(departmentEmployees[employee]);
        }
      }
    }
  }
  return employeelist;
}
