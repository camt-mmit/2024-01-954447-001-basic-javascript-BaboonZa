import readline from 'node:readline';
import { stdin, stdout } from 'node:process';

const rl = readline.createInterface({ input: stdin, output: stdout });

// Function to calculate the grade based on the score
function calculateGrade(score) {
  if (score >= 80) {
    return 'A';
  } else if (score >= 70) {
    return 'B';
  } else if (score >= 60) {
    return 'C';
  } else if (score >= 50) {
    return 'D';
  } else {
    return 'F';
  }
}

// Prompt the user for their score
rl.question('Input your score: ', (input) => {
  const score = parseFloat(input);


    const grade = calculateGrade(score);
    console.log(`Your grade is ${grade}.`);
  
  // Close the readline interface
  rl.close();
});
