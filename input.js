let connection;

// Setup User Interface 
// Specifically, so that we can handle user input via stdin
const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  stdin.on('data', (key) => {
    handleUserInput(key);
  });

  return stdin;
}

const handleUserInput = function (key) {
  // \u0003 maps to ctrl+c input
  if (key === '\u0003') {
    process.exit();
  } else if (key === 'w') {
    connection.write('Move: up');
  } else if (key === 'a') {
    connection.write('Move: left');
  } else if (key === 's') {
    connection.write('Move: down');
  } else if (key === 'd') {
    connection.write('Move: right');
  } else if (key === 'u') {
    connection.write('Say: EAT!!');
  } else if (key === 'i') {
    connection.write('Say: KILL!!');
  } else if (key === 'o') {
    connection.write('Say: SMASH!!');
  } else if (key === 'p') {
    connection.write('Say: DIE!!');
  }
}

module.exports = { setupInput }