const displayMessage = require('./0-console');

displayMessage('Welcome to Holberton School, what is your name?');
process.stdin.setEncoding('utf-8');
process.stdin.on('data', (data) => {
  displayMessage(`Your name is: ${data.trim()}`);
  if (!process.stdin.isTTY) {
    console.log('This important software is now closing');
  }
  process.exit();
});

process.stdin.resume();
