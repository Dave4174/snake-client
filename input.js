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
    conn.write('Move: up');
  } else if (key === 'a') {
    conn.write('Move: left');
  } else if (key === 's') {
    conn.write('Move: down');
  } else if (key === 'd') {
    conn.write('Move: right');
  }
}

module.exports = { setupInput }