import readline from 'node:readline';
import { stdin, stdout } from 'node:process';

const rl = readline.createInterface(stdin, stdout);

rl.question('Input your number: ', (input) => {
  const num = parseInt(input, 10); 
  
  
    
    for (let i = 1; i <= num; i++) {
    
      const spaces = ' '.repeat(num - i); 
      const stars = '*'.repeat(i);        
      console.log(spaces + stars);        
    }
  
  
  rl.close();
});
