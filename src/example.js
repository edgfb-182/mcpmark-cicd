// Intentional linting violations to test the workflow
const unusedVariable = 'This variable is unused'; // Violates no-unused-vars
console.log('This uses console (warn)'); // Violates no-console (warn)
let wrongQuotes = "This uses double quotes"; // Violates quotes (error)
let missingSemi = 42 // Violates semi (error)

function exampleFunction() {
  return;
}