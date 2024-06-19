const http = require('http');
const fs = require('fs').promises;

const database = process.argv[2];

async function countStudents(path, stream) {
  try {
    const data = await fs.readFile(path, 'utf8');
    const lines = data.split('\n');
    const studentLines = lines.filter((line) => line.trim() !== '').slice(1);
    const numberOfStudents = studentLines.length;

    stream.write(`Number of students: ${numberOfStudents}\n`);

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
        stream.write(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}\n`);
      }
    }
    stream.end();
  } catch (err) {
    stream.end('Cannot load the database');
  }
}

const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('This is the list of our students\n');
    countStudents(database, res);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

app.listen(1245, () => {
  console.log('Server listening at port 1245');
});

module.exports = app;
