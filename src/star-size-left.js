import readline from 'node:readline';
import { stdin, stdout } from 'node:process';

const rl = readline.createInterface(stdin, stdout);

rl.question('Input your number: ', (input) => {
  const num = parseInt(input, 10); 
  
  
   
    for (let i = 1; i <= num; i++) {
      console.log('*'.repeat(i));  
    }
  
  
  rl.close();
});
