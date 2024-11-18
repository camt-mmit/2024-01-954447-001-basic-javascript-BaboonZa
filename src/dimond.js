import readline from 'node:readline';
import { stdin, stdout } from 'node:process';

const rl = readline.createInterface(stdin, stdout);

rl.question('Input your number: ', (input) => {
  const size = parseInt(input, 10); 
  
 
 
    for (let i = 0; i < size; i++) {
      if (i === 0) {
        console.log(' '.repeat(size - 1) + '*');
      } else {
        console.log(' '.repeat(size - 1 - i) + '*' + ' '.repeat(2 * i - 1) + '*');
      }
    }

    for (let i = size - 2; i >= 0; i--) {
      if (i === 0) {
        console.log(' '.repeat(size - 1) + '*');
      } else {
        console.log(' '.repeat(size - 1 - i) + '*' + ' '.repeat(2 * i - 1) + '*');
      }
    }
  

  rl.close();
});
