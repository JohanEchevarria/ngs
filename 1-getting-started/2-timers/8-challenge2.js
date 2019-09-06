// Print "Hello World"
// Every second
// And stop after 5 times

// After 5 times. Print "Done" and let Node exit.
let contador = 0;
const intervalo = setInterval(() => {
  console.log('Hello World');
  contador += 1;

  if (contador === 5) {
    console.log('Done');
    clearInterval(intervalo);
  }
}, 1000);
