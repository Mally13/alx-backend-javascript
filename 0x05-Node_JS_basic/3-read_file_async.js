const fs = require('fs').promises;

function countStudents(path) {
  return fs.readFile(path, 'utf8')
    .then((data) => {
      const lines = data.split('\n');
      const studentLines = lines.filter((line) => line.trim() !== '').slice(1);
      const numberOfStudents = studentLines.length;
      console.log(`Number of students: ${numberOfStudents}`);
      const fields = {};
      studentLines.forEach((line) => {
        const [firstname, , , field] = line.split(',');
        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(firstname);
      });
      for (const field in fields) {
        if (Object.prototype.hasOwnProperty.call(fields, field)) {
          const students = fields[field];
          console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
        }
      }
    })
    .catch(() => {
      throw new Error('Cannot load the database');
    });
}

module.exports = countStudents;
